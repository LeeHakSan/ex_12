---
version: 1
slug: "app-index-html"
primary_target: "app/index.html"
related_targets: []
---

# Surface Brief — 논문 체험 앱 (app/)

Mode: Operate (사이트와 같은 세계 안의 도구 화면). Target: app/index.html (단일 파일, 포트폴리오와 독립 실행).
세계: 서울 지하철 노선도 · 역 안내 사인 (사이트와 동일 토큰).

## Direction contract

THESIS: 앱은 '탑승 3단계'로 읽힌다: 진자를 고르고, 실험을 돌리고, 카운터와 비교한다. 숫자가 아니라 '처음 12개 값'을 먼저 보여 줘서 외울 수 있는 수열이 눈에 보이게 한다. χ²·p값 표부터 시작하는 대시보드 기본형을 거부한다.

OWN-WORLD: 사이트와 같은 토큰(#f3f6f8 바탕, #0f1a2b 잉크, 초록·파랑·주황·슬레이트 4개 수열 색). 수열 한 줄 = 노선 한 줄(색 원 + 이름 + 값 띠 + 판정). 역명판 남색 패널은 헤더 한 곳에만, 결론은 종이 위 잉크와 굵은 규칙선, 바깥 패널 테두리 없음. 진자 궤적은 선택된 수열의 노선색. 숫자는 tabular, p값은 0~1 눈금 위에 표시. 그라데이션·글로우·카드 중첩 금지.

STORY: 방문자는 첫 화면에서 앱 이름, 논문 제목, 한 문장(누구를 어떻게 돕는지)을 읽고, 탑승 3단계를 본다. 실험을 누르면 값 띠가 채워지고 판정이 나오며, 카운터의 '통과'를 보고 "이것도 통과?"를 직접 경험한다. 마지막 결론 패널이 논문 결과를 한 문장으로 닫는다.

FIRST VIEWPORT: 위에 포트폴리오로 돌아가는 링크. 남색 역명판 헤더: 앱 이름, 논문 제목, 한 문장. 그 아래 탑승 3단계 띠. 아래 두 열: 왼쪽 진자 캔버스+진폭 선택+실험 시작+수집 진행선, 오른쪽 4개 수열 줄(카운터는 시작 전부터 첫 12개 값이 보임). 주 행동 '실험 시작'은 왼쪽 열 하단.

FORM: 서울 지하철 노선도 (사이트와 동일 세계, 도구 화면으로 번역). 내 후보 목록 3번째. 씨드 키 f58f57e7.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
