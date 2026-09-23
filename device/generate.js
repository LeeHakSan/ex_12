#!/usr/bin/env node
/**
 * BR-A 카드5 — "계속 새로 쓰는 장치"
 * 입력(device/input/*.json)을 읽어 숫자 칸(site-data.json)과
 * 능력별 문단 후보(candidates.json)를 결정론적으로 재생성한다.
 * AI를 런타임에 호출하지 않는다 — 모든 문장은 입력 데이터를 고정 템플릿에
 * 채워 넣어 만들며, 같은 입력이면 항상 같은 출력이 나온다.
 */
"use strict";
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const INPUT_DIR = path.join(ROOT, "input");
const OUTPUT_DIR = path.join(ROOT, "output");

function readJSON(file) {
  const p = path.join(INPUT_DIR, file);
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function get(entries, label) {
  // entries: array of "라벨: 값" 문자열. 라벨과 정확히 일치하는 항목의 값을 반환.
  const prefix = label + ": ";
  for (const e of entries) {
    if (e.startsWith(prefix)) return e.slice(prefix.length);
  }
  return null;
}

function countMatching(entries, labelPrefix) {
  return entries.filter((e) => e.startsWith(labelPrefix)).length;
}

// 능력 분류 키워드(우선순위 순). 첫 번째로 매치되는 능력으로 분류한다.
const ABILITY_RULES = [
  {
    ability: "자기조절력",
    keywords: [
      "감정을 드러내지",
      "감정을 숨기",
      "화를 참",
      "화내지 않",
      "안 좋은 감정을 겉으로",
      "참았다",
      "조절",
      "꾹 참",
    ],
  },
  {
    ability: "대인관계력",
    keywords: [
      "배려",
      "도와",
      "도움",
      "양보",
      "챙겨",
      "먼저 다가",
      "사과",
      "나눠",
      "알려주었",
      "깨워",
      "찾아드렸",
    ],
  },
  {
    ability: "자기동기력",
    keywords: [
      "꾸준",
      "포기하지 않",
      "먼저 나서",
      "솔선수범",
      "지각하지 말",
      "끝까지",
      "노력",
    ],
  },
];

function classify(text) {
  if (!text) return null;
  for (const rule of ABILITY_RULES) {
    for (const kw of rule.keywords) {
      if (text.includes(kw)) return rule.ability;
    }
  }
  return null;
}

function buildCandidatesFromRitual(ritual) {
  const candidates = [];
  const days = ritual.days || [];
  for (const day of days) {
    const open = day.open || [];
    const strength = get(open, "내 강점");
    const episode = get(open, "강점이 드러난 일화");
    const insight = get(open, "그 결과·알게 된 점");
    const classifyText = [strength, episode].filter(Boolean).join(" / ");
    const ability = classify(classifyText);
    if (ability && episode) {
      candidates.push({
        ability,
        date: day.date,
        quote: episode,
        strength_label: strength || null,
        insight: insight || null,
        source: `ritual-history.json > days[date=${day.date}].open["강점이 드러난 일화"]`,
        template_paragraph: `${day.date} — ${episode}${
          insight ? ` (${insight})` : ""
        }`,
      });
    }
  }
  // 정렬: 날짜 오름차순으로 고정(결정론적 순서 보장)
  candidates.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));
  return candidates;
}

function countGratitudeMentions(ritual) {
  let count = 0;
  for (const day of ritual.days || []) {
    const close = day.close || [];
    count += countMatching(close, "내가 나눈 감사");
    count += close.filter((e) => /^동료 \d+가 나눈 감사/.test(e)).length;
    count += countMatching(close, "감사일기");
  }
  return count;
}

function daysBetween(dateFromStr, dateToStr) {
  const a = new Date(dateFromStr + "T00:00:00Z");
  const b = new Date(dateToStr + "T00:00:00Z");
  return Math.round((b - a) / (1000 * 60 * 60 * 24)) + 1;
}

function extractSevMergeCommits(submissions) {
  const item = (submissions.items || []).find((i) => i.id === "SevMerge");
  if (!item || !item.detail) return null;
  const m = item.detail.match(/커밋\s*([\d,]+)\s*개/);
  return m ? parseInt(m[1].replace(/,/g, ""), 10) : null;
}

function buildSiteData(ritual, attendance, submissions) {
  const days = ritual.days || [];
  const dates = days.map((d) => d.date).sort();
  const firstDate = dates[0];
  const lastDate = dates[dates.length - 1];
  const spanDays = firstDate && lastDate ? daysBetween(firstDate, lastDate) : 0;
  const spanWeeks = spanDays ? Math.ceil(spanDays / 7) : 0;

  const strengthEpisodes = days.filter((d) =>
    get(d.open || [], "강점이 드러난 일화")
  ).length;
  const gratitudeMentions = countGratitudeMentions(ritual);

  const completed = (submissions.items || []).filter(
    (i) => i.status === "완료"
  );
  const inProgress = (submissions.items || []).filter(
    (i) => i.status !== "완료"
  );

  return {
    generated_by: "device/generate.js",
    note: "이 파일은 device/generate.js 실행으로 자동 생성됩니다. 직접 수정하지 마세요.",
    ritual: {
      기록_일수: days.length,
      기록_기간: { 시작: firstDate, 끝: lastDate },
      달력상_경과일: spanDays,
      대략_주수: spanWeeks,
      강점_일화_수: strengthEpisodes,
      상호_감사_언급_수: gratitudeMentions,
      출처: "ritual-history.json",
    },
    attendance: {
      지각: attendance["지각"],
      조퇴: attendance["조퇴"],
      결석: attendance["결석"],
      기준일: attendance["as_of"],
      출처: attendance["출처"],
    },
    submissions: {
      완료_수: completed.length,
      진행중_수: inProgress.length,
      완료_목록: completed.map((i) => ({
        id: i.id,
        title: i.title,
        date: i.date || i.date_range || null,
      })),
      출처: "submissions.json",
    },
    sevmerge: {
      커밋_수: extractSevMergeCommits(submissions),
      개발_기간: "2026-05 ~ 2026-06 (약 4주)",
      저장소: "https://github.com/LeeHakSan/SevMerge",
    },
  };
}

function main() {
  const ritual = readJSON("ritual-history.json");
  const attendance = readJSON("attendance.json");
  const submissions = readJSON("submissions.json");

  const siteData = buildSiteData(ritual, attendance, submissions);
  const candidates = buildCandidatesFromRitual(ritual);

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.writeFileSync(
    path.join(OUTPUT_DIR, "site-data.json"),
    JSON.stringify(siteData, null, 2) + "\n",
    "utf8"
  );
  fs.writeFileSync(
    path.join(OUTPUT_DIR, "candidates.json"),
    JSON.stringify(
      {
        generated_by: "device/generate.js",
        note: "능력별 문단 후보 — 사람이 검토 후 approved/approved.json 으로 옮긴 것만 사이트에 반영됨",
        count: candidates.length,
        candidates,
      },
      null,
      2
    ) + "\n",
    "utf8"
  );

  console.log(`site-data.json 작성 완료 (기록 ${siteData.ritual.기록_일수}일)`);
  console.log(`candidates.json 작성 완료 (후보 ${candidates.length}건)`);
}

main();
