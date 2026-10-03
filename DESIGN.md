---
name: 이학산 포트폴리오 · 논문 체험 앱
description: A Seoul-subway line map and station signage as one design language for a portfolio site and a paper-experience app.
colors:
  ground: "#f3f6f8"
  paper: "#ffffff"
  ink: "#0f1a2b"
  ink-2: "#2a3a52"
  muted: "#536075"
  rule: "#d3dce5"
  rule-strong: "#9fb0c2"
  story: "#0a8f4d"
  story-ink: "#08733d"
  exp: "#1f5fbf"
  out: "#e06a12"
  out-hover: "#f07b22"
  out-ink: "#b4520a"
  sign: "#0f2745"
  sign-muted: "#b8c6d8"
  sha: "#5b6b82"
typography:
  display:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, Apple SD Gothic Neo, Malgun Gothic, system-ui, sans-serif"
    fontSize: "clamp(56px, 8vw, 96px)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, Apple SD Gothic Neo, Malgun Gothic, system-ui, sans-serif"
    fontSize: "clamp(32px, 4vw, 44px)"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, Apple SD Gothic Neo, Malgun Gothic, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, Apple SD Gothic Neo, Malgun Gothic, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: "normal"
    fontFeature: "tabular-nums"
  label:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, Apple SD Gothic Neo, Malgun Gothic, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.04em"
rounded:
  xs: "4px"
  chip: "6px"
  md: "8px"
  lg: "12px"
  pill: "999px"
  full: "50%"
spacing:
  s1: "4px"
  s2: "8px"
  s3: "16px"
  s4: "24px"
  s5: "32px"
  s6: "48px"
  s7: "64px"
  s8: "96px"
  s9: "128px"
components:
  button-primary:
    backgroundColor: "{colors.out}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.md}"
    padding: "16px 24px"
  button-primary-hover:
    backgroundColor: "{colors.out-hover}"
    textColor: "{colors.ink}"
  button-run:
    backgroundColor: "{colors.out}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0 24px"
    height: "56px"
  button-run-disabled:
    backgroundColor: "{colors.rule}"
    textColor: "{colors.muted}"
  sign-panel:
    backgroundColor: "{colors.sign}"
    textColor: "{colors.paper}"
    rounded: "{rounded.lg}"
    padding: "48px 32px"
  line-bullet:
    backgroundColor: "{colors.story}"
    textColor: "{colors.paper}"
    rounded: "{rounded.full}"
    size: "44px"
  segmented-item:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "6px 12px"
  segmented-item-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  verdict-pass:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.chip}"
    height: "34px"
  verdict-fail:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.chip}"
    height: "34px"
  exit-row:
    textColor: "{colors.ink}"
    padding: "24px 8px"
  exit-row-hover:
    backgroundColor: "{colors.paper}"
---

# Design System: 이학산 포트폴리오 · 논문 체험 앱

## Overview

**Creative North Star: "The Line Map" (노선도)**

The whole system is a Seoul-subway-style diagram and its station signage. A visitor reads the site as a map before they read it as a document: the story line (이야기선, green) and the experiment line (실험선, blue) meet at a transfer station (대표작) and continue as the submission line (제출선, orange) to the terminal exits. The app borrows the same rules, so the two surfaces read as one network. Lines are 14px, bend only at 45 degrees; stations are white circles with a heavy ink outline; the interchange is a larger capsule.

The voice is calm, exact and trustworthy. Wayfinding replaces decoration: every graphic element names a place or a state, and the hierarchy follows station signs (big Korean name, small English beneath, tabular numerals). Ink on cool paper carries almost everything; line colors appear as fills on bullets, rails and tracks, and orange is reserved for the one action a visitor should take.

Anything that looks AI-default is rejected by the owner: a cream ground with a red accent, dot grids, same-size rounded card grids, a centered hero with a gradient, three-color decorative stripes, glass.

**Key Characteristics:**
- Cool white ground, navy-leaning ink, three line colors used as fills.
- One navy sign panel per screen, at most.
- Station-sign type hierarchy in a single family, Pretendard Variable.
- Flat surfaces; depth from 1px and 2px rules and fill contrast.
- One authored motion moment (the map drawing in) plus the pinned numbers ride.

## Colors

A cool, near-monochrome ink-on-paper base with three saturated line colors that are used as areas (bullets, rails, tracks, fills), never as decoration.

### Primary
- **Story Line Green** (#0a8f4d, oklch(57.1% 0.144 153)): the story line, line bullet 1, the story rail and the numbers ride fill. **Story Text Green** (#08733d) is the darker variant for small text on paper (dates, line names).

### Secondary
- **Experiment Line Blue** (#1f5fbf, oklch(50.2% 0.164 259)): the experiment line, line bullet 2, summary labels, document links and list dots. It is also the focus-ring color on paper.

### Tertiary
- **Submission Line Orange** (#e06a12, oklch(65.6% 0.170 49)): the submission line and the only filled action button; text on it is always ink. **Orange Pressed Light** (#f07b22) is its hover fill. **Orange Text** (#b4520a) is the darker variant for small orange text (exit numbers).

### Neutral
- **Cool Paper** (#f3f6f8): page ground and nav background.
- **Sign White** (#ffffff): station circles, cards on hover, canvas, selected-state text.
- **Platform Ink** (#0f1a2b): text, station outlines, 2px frames, selected fills.
- **Body Ink** (#2a3a52): running text.
- **Muted Slate** (#536075): English sub-lines, captions, sources.
- **Hairline** (#d3dce5) and **Strong Rule** (#9fb0c2): 1px dividers and section borders; the strong rule marks lists that end in actions.
- **Sign Panel Navy** (#0f2745) with **Sign Muted Blue** (#b8c6d8): the single signage panel and its secondary text.
- **Reference Slate** (#5b6b82): the SHA-256 control sequence in the app, the only non-line series color.

### Named Rules
**The Fill-Only Rule.** Line colors appear as fills and strokes of map elements, never as text color on paper except through their darker `-ink` variants.
**The One Action Rule.** Orange is the single accent action. Ink text on orange, never white. If a second orange control appears on a screen, one of them is wrong.
**The One Sign Rule.** The navy sign panel appears at most once per screen.

## Typography

**Display Font:** Pretendard Variable (with Pretendard, -apple-system, Apple SD Gothic Neo, Malgun Gothic, system-ui)
**Body Font:** the same family
**Label/Mono Font:** none; numbers use tabular numerals (`font-variant-numeric: tabular-nums` on body)

**Character:** Korean-first, one family at weights 400 to 800. Hierarchy comes from weight and size, as on a station sign: a heavy Korean name with a small, tracked English line beneath. Headings balance their wrap; Korean text uses `word-break: keep-all`.

### Hierarchy
- **Display** (800, clamp(56px, 8vw, 96px), 1, -0.035em): the station name 이학산 and the numbers-ride values.
- **Headline** (800, clamp(32px, 4vw, 44px), 1.25, -0.02em): section signs; the app title is clamp(30px, 4vw, 44px) at -0.03em.
- **Title** (700 to 800, 18px to 28px, 1.25 to 1.4): story stop headings (24px, 700), exit names (clamp(22px, 3vw, 30px), 700), sequence names (18px, 800), button labels (18px, 800).
- **Body** (400, 17px on the site, 16px in the app, 1.8 / 1.75): running text, in Body Ink, capped around 40em on the story line and 46em in notes.
- **Label** (600 to 700, 13px to 15px, 0.02em to 0.06em): English sub-lines (14px, 500, 0.06em), dates, route nav (14px, 600), table heads (13px), chips.

### Named Rules
**The Station Sign Rule.** Every named place carries a big Korean name and, beneath it, a small English line in Muted Slate. English never sits above the name.
**The One Family Rule.** Pretendard Variable only; no second face for display.

## Layout

Content sits in a 1200px wrapper with a fluid gutter of clamp(20px, 4vw, 48px). Spacing is a 4px-based scale (4, 8, 16, 24, 32, 48, 64, 96, 128); sections use 96px vertical padding (64px on small screens) and are divided by a 1px Hairline. The nav is a sticky 56px bar whose bottom edge doubles as a 4px scroll-progress track in the current line's color.

The hero pairs the station name with a full-width horizontal line map (SVG viewBox 1200 by 336). Content grids are asymmetric (300px sign beside a 40em story line; 7fr beside 5fr for work; 5fr beside 7fr in the app and in numbers), never equal-width card grids. The story line is a vertical 6px green rail with a ringed station at each entry.

Responsive behavior:
- At 960px and below the app workspace, intro and conclusion stack to one column; the site's hero, story and work grids stack and the navy panel moves above the paper.
- At 720px and below the map swaps to a vertical diagram (viewBox 360 by 708, 360px max width) with labels to the right of stations, and exit rows regroup into three columns.
- Below 721px, or under reduced motion, the numbers section is an ordinary stacked list; at 721px and above it pins for 600vh and plays as a ride.
- At 560px and below the app controls and sequence rows collapse; the value strip drops to six columns.

## Elevation & Depth

Flat by default. There are no ambient or card shadows. Depth comes from rules (1px Hairline, 1px Strong Rule, 2px Platform Ink frames and top borders) and from fill contrast (paper on ground, navy panel on ground, ink fills for selected states). The build carries one 2px hard-offset shadow under the orange train marker; it is recorded under Not Canonized, not as a system shadow. The p-value marker uses a 2px ink spread ring over a 3px white border, not a shadow.

### Named Rules
**The Rules-Not-Shadows Rule.** To separate or raise something, use a rule or a fill change. Do not add blur shadows.

## Shapes

Geometry is circles, capsules and straight lines. Stations and bullets are circles (50%); the interchange is a capsule (80 by 36, rx 18). Lines are 14px strokes, 45-degree bends only, round joins. Containers are modestly rounded: 12px for the signage panel, 8px for buttons, segmented control and the canvas frame, 6px for the verdict chip, 4px for value cells, 999px for the ability pill. Station circles carry a heavy outline (4px to 5px Platform Ink) and fill to ink on hover or focus.

## Components

### Buttons
- **Shape:** gently rounded (8px).
- **Primary (button-primary, run):** Submission Line Orange fill (#e06a12), Platform Ink text, 800 weight at 18px; padding 16px 24px on the site, 56px minimum height in the app.
- **Hover / Focus:** hover lightens to #f07b22 and the trailing arrow nudges 4px right; press moves it down 1px; focus-visible draws a 3px outline (Experiment Blue on paper, white on the navy panel) at 3px offset.
- **Disabled (run):** Hairline fill, Muted Slate text, progress cursor.

### Station Sign Panel
The one navy panel (Sign Panel Navy, 12px radius, 48px by 32px padding on the site; 48px all round in the app intro). White heading, Sign Muted Blue body, one orange action. It is the only dark block on a screen.

### Section Sign
A 44px line-colored bullet carrying the line number, a heavy Korean heading and a small English line beneath. Orange bullets take ink numerals; green and blue take white. Two bullets can overlap as a pair with an 8px negative margin.

### Navigation
A route strip: each stop is a 14px white circle with a 4px ring in its line color (Strong Rule when neutral), joined by 20px by 4px track segments. The current stop fills with its line color and scales 1.25. Labels are 14px, 600, Muted Slate, turning ink on hover and when current. The scroll-progress bar below recolors to the current line.

### Segmented Control
A 2px Platform Ink frame with 2px dividers and an 8px radius. Each segment stacks a 17px, 800 value over a 12px Muted caption. Hover fills with Cool Paper; the selected segment inverts to ink with white text.

### Sequence Row (app)
A 44px numbered bullet in the sequence color, a name (18px, 800) with a 13px sub-line, a verdict chip, a 12-cell value strip and a p-value track. The track is an 8px Hairline bar whose first 5% is the fail zone (Body Ink at 40%) with a 0.05 tick below; the marker is a 16px circle in the sequence color. Verdict chips are 34px tall with a 2px ink border: idle is dashed and muted, running pulses, pass is a filled ink chip, fail is white with a wavy underline.

### Exit Row
A full-width link row with an orange number, a large Korean name, a muted description and an arrow, separated by 1px Strong Rules. Hover fills the row white, shifts the name 8px and the arrow 4px.

### Station Map (signature)
Three 14px lines, round-joined, with white circle stations (r 14, 5px ink outline) and one capsule interchange; names are 18px 700 Korean over 13px English. Stations are links; hover and focus fill them ink. The map draws in once on load over 1.4s with exponential ease-out (cubic-bezier(0.16, 1, 0.3, 1)), the orange line delayed 0.7s; stations and labels fade in at 0.9s.

### Numbers Ride
Values appear one at a time as a pinned scroll sequence: each slide opens with a 2px ink rule, a display-size value and a 22px label. Slides cross-fade in 0.5s opacity and 0.6s translate (16px), while a 32 by 18px orange train marker slides along a 6px track with green fill and 16px stops (0.6s). Reduced motion removes both the map draw and the ride.

## Do's and Don'ts

### Do:
- **Do** let line color be a fill on bullets, rails, tracks and strokes; use the `-ink` variants for any small colored text.
- **Do** use ink text on orange (#e06a12) for the single accent action per screen.
- **Do** use 14px lines with 45-degree bends only, white circle stations with a heavy ink outline, and a larger capsule for interchanges.
- **Do** put the Korean name first and big, with a small Muted English line beneath.
- **Do** build depth from 1px and 2px rules and fill changes.
- **Do** keep numerals tabular and body text on `word-break: keep-all`.
- **Do** honor reduced motion: the map appears already drawn and the numbers become a stacked list.

### Don't:
- **Don't** use a cream ground with a red accent, dot grids, same-size rounded card grids, a centered hero with a gradient, three-color decorative stripes, or glass.
- **Don't** place the navy sign panel more than once per screen.
- **Don't** put a label or eyebrow above a heading; a sub-line may sit beneath it.
- **Don't** add blur or ambient shadows, or a second display typeface.
- **Don't** use white text on orange, or orange as text color on paper.
- **Don't** introduce bends other than 45 degrees or line widths other than 14px on the map.

## Not Canonized

Defects the build carries that future surfaces should not inherit: the 2px hard-offset shadow under the train marker and the `-3px 0 0` separator shadow between overlapping bullets (both are hard offsets outside the flat rule above); the app and site each duplicate the `:root` tokens in separate files (the app names series colors `--c-pend5`, `--c-pend170`, `--c-counter` for the same hex values as `--story`, `--exp`, `--out`); the focus ring is blue on paper and white on navy only for the primary button, other controls on the navy panel fall back to blue.
