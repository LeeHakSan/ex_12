---
version: 1
slug: "site-index-html"
primary_target: "site/index.html"
related_targets: ["site/resume.html","site/cover-letter.html","site/career.html","site/style.css","site/scroll.js"]
---

# Surface Brief — 포트폴리오 사이트 (site/)

Mode: Experience. Targets: site/index.html (+ resume.html, cover-letter.html, career.html, style.css, scroll.js).
세계: 서울 지하철 노선도 · 역 안내 사인. 앱(app/index.html)과 같은 규칙을 쓴다.

## Direction contract

THESIS: 사이트 전체가 한 장의 노선도다. 이야기선(초록)과 실험선(파랑)이 '대표작' 환승역에서 만나 이력서 종착역으로 간다. 카드 그리드와 큰 히어로 문구로 시작하는 개발자 포트폴리오 기본형을 거부한다.

OWN-WORLD: 차가운 흰 바탕(#f3f6f8), 남색에 가까운 잉크(#0f1a2b), 노선색 초록·파랑·주황(채움으로만), 역명판 남색 패널은 사이트에서 앱 카드 한 곳에만. 선은 굵기 14px 45도 꺾임만 쓰고, 역은 흰 원+굵은 테두리, 환승역은 더 큰 원. 한글 큰 이름 아래 영문 작게(역명판 규칙). Pretendard 한 가지, 숫자는 tabular. 점 격자·크림·빨강 포인트는 쓰지 않는다. 글자 아래 소제목은 허용, 제목 위 라벨은 금지.

STORY: 처음 온 사람이 지도 한 장으로 사이트 구조를 읽고, 이야기선을 따라 내려가며 사람을 믿고, 숫자 구간에서 열차가 정차할 때마다 근거를 확인하고, 환승역에서 논문과 앱을 직접 열어 본다.

FIRST VIEWPORT: 위에 노선 진행 바(정차 4곳 + 스크롤 진행 선, 현재 노선 색). 왼쪽 열: 큰 '이학산'(역명판 위계)과 영문, 그 아래 기존 한 줄 소개. 오른쪽/아래 폭 전체: 가로 노선도 SVG(이야기선·실험선·환승 '대표작'·종착 '이력서'), 각 역은 해당 구역으로 이동하는 링크. 주 행동은 '대표작' 환승역.

FORM: 서울 지하철 노선도. 내 후보 목록 3번째. 씨드 키 f58f57e7.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
