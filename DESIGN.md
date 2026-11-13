---
name: Vida saludable en la adolescencia
description: A health blog for teenagers built as a sticker album (álbum de láminas) you fill by reading.
colors:
  album-green: "#164E45"
  album-green-page: "#1D5C52"
  ink: "#0E2F2A"
  ink-soft: "#3F5C56"
  turquoise: "#55BFA6"
  turquoise-wash: "#DDF1EA"
  leaf-white: "#F5F8F2"
  paper: "#FFFFFF"
  coral: "#FF806F"
  coral-wash: "#FFE3DD"
  coral-ink: "#A8402D"
  hairline: "#D5E1DA"
typography:
  display:
    fontFamily: "Anybody, 'Arial Narrow', sans-serif"
    fontSize: "min(6rem, 13cqi)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 88"
  headline:
    fontFamily: "Anybody, 'Arial Narrow', sans-serif"
    fontSize: "min(4.6rem, 12.5cqi)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 112"
  title:
    fontFamily: "Anybody, 'Arial Narrow', sans-serif"
    fontSize: "clamp(1.35rem, 1.15rem + .6vw, 1.7rem)"
    fontWeight: 900
    lineHeight: 1.15
    fontVariation: "'wdth' 108"
  lead:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "clamp(1.1rem, 1rem + .35vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Anybody, 'Arial Narrow', sans-serif"
    fontSize: "0.78rem"
    fontWeight: 800
    lineHeight: 1.4
    letterSpacing: "0.1em"
    fontVariation: "'wdth' 130"
  button:
    fontFamily: "Anybody, 'Arial Narrow', sans-serif"
    fontSize: "1rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.04em"
    fontVariation: "'wdth' 120"
  sticker-caption:
    fontFamily: "Anybody, 'Arial Narrow', sans-serif"
    fontSize: "clamp(.62rem, .5rem + .35vw, .82rem)"
    fontWeight: 900
    lineHeight: 1.1
    fontVariation: "'wdth' 115"
rounded:
  mark: "3px"
  art: "6px"
  sticker: "10px"
  option: "12px"
  card: "14px"
  panel: "16px"
  page: "18px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  2xl: "40px"
  gutter: "16px"
  container: "1200px"
  section: "clamp(48px, 7vw, 88px)"
components:
  button-primary:
    backgroundColor: "{colors.coral}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "52px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.album-green}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "46px"
  button-ghost-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.leaf-white}"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.leaf-white}"
    rounded: "{rounded.pill}"
    padding: "8px 12px"
  nav-link-current:
    backgroundColor: "{colors.leaf-white}"
    textColor: "{colors.album-green}"
  album-page:
    backgroundColor: "{colors.album-green-page}"
    rounded: "{rounded.page}"
    padding: "clamp(18px, 2.4vw, 28px)"
  slot-empty:
    backgroundColor: "transparent"
    textColor: "{colors.leaf-white}"
    rounded: "{rounded.sticker}"
    padding: "8px"
  sticker:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.sticker-caption}"
    rounded: "{rounded.sticker}"
    padding: "7px"
  sticker-special-art:
    backgroundColor: "{colors.album-green}"
    rounded: "{rounded.art}"
  ficha:
    backgroundColor: "{colors.leaf-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "16px 20px"
    width: "560px"
  quiz-panel:
    backgroundColor: "{colors.album-green}"
    textColor: "{colors.leaf-white}"
    rounded: "{rounded.panel}"
    padding: "24px"
  quiz-option:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.option}"
    padding: "12px 14px"
---

# Design System: Vida saludable en la adolescencia

## Overview

**Creative North Star: "El Álbum de Láminas"**

The whole site is a sticker album. Deep album-green pages own the frame (the cover, each topic opener, the quiz panels), and the reading happens on calm leaf-white paper between them. Every healthy habit is a numbered lámina: an empty dashed slot with a faint ghost of its art until the reader answers the topic's question, then a white-bordered sticker, slightly rotated, pressed into place with a small physical "paste" motion. Completing all five earns a flat-printed special sticker (coral star, 5/5).

The voice is youthful but not childish: wide, heavy uppercase display (Anybody) does the shouting in short bursts, and a friendly humanist sans (Figtree) carries long, comfortable paragraphs. Colour lives in the frame and on the stickers; prose stays quiet. Progress is shown by marks and objects (slot vs sticker vs special sticker), never by a hue change alone.

Density is generous: one 68ch reading column per topic, a sticky quiz beside it on desktop, stacked on mobile. Nothing competes with the text while reading.

**Key Characteristics:**
- Album-green frame, leaf-white reading paper, coral as the single hot accent.
- Numbered dashed slots and rotated white-bordered stickers as the signature objects.
- Wide uppercase Anybody display over Figtree body.
- State as a mark, not a hue; every sticker prints its fact and source.
- Pill buttons, softly rounded paper, one soft drop shadow reserved for stickers and the ficha.

## Colors

A pinned four-colour palette (album green, turquoise, leaf white, coral) extended only with darker inks and pale washes derived from it.

### Primary
- **Album Green** (album-green): the album's cover and page colour. Cover band, sticky top bar, alternating topic openers, quiz panels, h3 subheads in the reading column, ghost button text on the closing page.
- **Album Page Green** (album-green-page): a half-step lighter green for the album page that sits on the cover and for every other topic opener, so consecutive green bands read as separate pages.

### Secondary
- **Coral** (coral): the one hot accent. Primary buttons, the second line of the cover title, the logo's sticker, pasted-topic badges in the nav, idea-list marks, focus ring, selection, sticker art. Always with ink text on top, never as text on light grounds.
- **Coral Ink** (coral-ink): coral darkened for legibility; the only coral used as text on light grounds (ficha labels, sticker numbers).
- **Coral Wash** (coral-wash): the closing page (contraportada) background, the "wrong answer" message tint on green, and a sticker art ground.

### Tertiary
- **Turquoise** (turquoise): fills and borders only: quiz option hover border, scrollbar thumb, sticker art ground and illustration leaves.
- **Turquoise Wash** (turquoise-wash): album count text and "correct" message on green, sticker art ground.

### Neutral
- **Ink** (ink): body text on light grounds and the footer background.
- **Ink Soft** (ink-soft): sticker source line and the quiz radio ring.
- **Leaf White** (leaf-white): page background, text on green, the ficha card.
- **Paper** (paper): pure white reserved for sticker bodies and quiz option tiles, so they read as printed objects on top of the leaf-white page.
- **Hairline** (hairline): dashed dividers inside the ficha.

### Named Rules
**The Frame Owns the Colour Rule.** Saturated fields (green bands, coral wash) belong to the frame: cover, openers, quiz panels, closing page, footer. The reading column stays on leaf white with colour limited to album-green subheads and small coral idea marks.

**The Coral Is a Fill Rule.** Coral (#FF806F) carries ink text and is never itself text on leaf white or paper; use coral ink for that. Turquoise likewise is a fill or border, never text on a light ground.

## Typography

**Display Font:** Anybody (with Arial Narrow, sans-serif), variable width and weight 600–900.
**Body Font:** Figtree (with system-ui, sans-serif), 400/600/700 and italic.

**Character:** Anybody's width axis is the instrument: condensed (88%) for the long cover title, wide (112–130%) for openers, labels and buttons, always heavy and uppercase, like the printing on a collectible album. Figtree is plain and friendly, so long health explanations read easily for 13–15 year olds.

### Hierarchy
- **Display** (900, min(6rem, 13cqi), 0.9, width 88%, uppercase): cover title only. Sized from its container so the longest word («ADOLESCENCIA») always fits.
- **Headline** (900, min(4.6rem, 12.5cqi), 0.92, width 112%, uppercase): topic opener titles; the closing title uses the same voice at clamp(2rem, 1.2rem + 3vw, 3.8rem).
- **Title** (900, clamp 1.35–1.7rem, 1.15, width 108%, album green, sentence case): subheads inside the reading column.
- **Lead** (400, clamp 1.1–1.3rem, 1.5, max 44ch): the one-line intro under cover and opener titles.
- **Body** (400, 1.125rem, 1.7, column max 68ch): all prose, quiz options at 1rem.
- **Label** (800, 0.78rem, 0.1em tracking, width 130%, uppercase): term labels of definition lists (ficha, footer credits) and the album count.
- **Button** (800, 1rem, 0.04em, width 120%, uppercase): every button.
- **Sticker caption** (900, clamp 0.62–0.82rem, width 115%, uppercase): sticker names and numbers; slot numbers use the same face at clamp(2rem, …, 3.4rem).

### Named Rules
**The Fit-the-Longest-Word Rule.** Big uppercase titles are sized by container query (cqi) against the column so the longest Spanish word never breaks or overflows; `text-wrap: balance` on every heading.

**The Short-Bursts Rule.** Anybody is for titles, labels, buttons and sticker print only. Paragraphs, legends and messages are always Figtree.

## Layout

A centred container of min(1200px, 100% − 32px) (16px side gutter on phones). The page is a sequence of full-bleed bands: green cover, then per topic a green opener (alternating album green / album page green) followed by a leaf-white body, then the coral-wash closing page and the ink footer. Band padding scales with clamp() (openers 48–88px, bodies 48–80px top and 64–112px bottom).

- **Cover:** two columns 1.3fr / 0.7fr (copy, album page with a 3×2 slot grid); stacks below 900px with the album capped at 520px.
- **Topic opener:** a slot column clamp(120px, 14vw, 176px) beside the title; stacks below 520px with a 112px slot.
- **Topic body:** reading column minmax(0, 68ch) and a 280–360px quiz that sticks at 92px from the top; stacks below 900px with the quiz capped at 560px.
- **Closing page:** two equal columns (text, full album grid up to 480px); stacks below 760px.
- **Top bar:** 68px, sticky; below 860px the numbered nav collapses behind a two-line toggle and reveals with a clip-path wipe.
- Anchor scrolling is smooth with an 84px scroll padding for the bar.

## Elevation & Depth

Mostly flat colour fields; depth is reserved for physical objects that sit on the page. One soft drop shadow lifts stickers and the team ficha off the paper; everything else (bands, quiz panels, album page) is flat, with the album page separated by a faint inset hairline rather than a shadow. Rotation (±2°, −4° for the special) adds the "hand-pasted" depth cue.

### Shadow Vocabulary
- **Sticker lift** (`box-shadow: 0 10px 22px -10px rgb(0 0 0 / .45)`): stickers and the ficha card at rest.
- **Button hover lift** (`box-shadow: 0 10px 20px -12px rgb(14 47 42 / .6)`): primary buttons on hover, with a 2px rise.
- **Album page inset** (`box-shadow: inset 0 0 0 1px rgb(245 248 242 / .08)`): the green album page on the green cover.

### Named Rules
**The Only Objects Cast Shadows Rule.** A shadow means "this is a thing stuck onto the page" (sticker, ficha). Panels and bands never get one.

## Shapes

Soft, friendly corners scaled to object size: 3px idea marks, 6px sticker art window, 10px stickers and slots, 12px quiz options, 14px ficha, 16px quiz panel, 18px album page, full pills for buttons and nav links. Slots are 3:4 portrait rectangles with a 2.5px dashed border; nav number badges are 24px squares with a 1.5px dashed border that turns solid coral once that sticker is pasted. Idea-list marks are small coral squares rotated −8°, echoing the stickers.

## Components

### Buttons
Chunky, printed and confident.
- **Shape:** full pill (999px), min-height 52px, 0 28px padding, 2px transparent border.
- **Primary:** coral fill, ink text, uppercase wide Anybody.
- **Hover / Focus:** rises 2px with the button hover lift over 0.4s on the expo-out ease; focus is a 3px coral outline offset 3px.
- **Ghost:** transparent with a currentColor 2px border (album green on the closing page, 46px tall); hover fills ink with leaf-white text. Disabled at 45% opacity with no lift.

### Navigation
Sticky album-green bar: logo (a green album with a tilted coral sticker) at left, five numbered pill links at right. Each link carries a dashed number badge; a pasted topic turns its badge solid coral; the topic currently in view inverts to a leaf-white pill with green text. On mobile the list drops below the bar as a full-width green sheet.

### Album page and slots (signature)
A album-page-green panel holding a 3-column grid of 3:4 slots (five topics plus one special). An empty slot is a dashed outline at 55% opacity with a large slot number, the topic name in small caps print and a 14%-opacity grayscale ghost of the sticker's art. Hover brightens it to 90%. Each slot links to its topic.

### Sticker (signature)
A paper-white card, 7px padding, 10px corners, sticker lift shadow, rotated −2° (even slots and opener slots +2°). Inside: a rounded art window on its own palette ground with a simple two-colour SVG, a caption row (name left, coral-ink number right) and a tiny source line «dato · fuente» in ink soft. Newly pasted stickers play the 0.9s "pegar" motion: dropping from above, larger and tilted, overshooting slightly before settling. The **special sticker** is the same card at −4° with an album-green art window and a coral star, captioned «Completo 5/5».

### Ficha (team card)
A leaf-white card (14px corners, sticker lift) on the cover, two columns split by a dashed hairline, each with a coral-ink uppercase label over plain Figtree lines. Stacks to one column below 520px.

### Quiz panel
An album-green panel (16px corners, 24px padding) holding one question as a fieldset legend, three paper-white option tiles (12px corners) with custom round radios, a full-width coral button «Comprobar y pegar» and a live status line (turquoise wash when right, coral wash when wrong). Option hover borders turn turquoise; the checked option gets an album-green border. A wrong answer shakes the panel horizontally; a right one locks the panel, dims unchosen options to 50% and relabels the button «Lámina pegada».

### Idea list
Plain Figtree list items with a small coral square, rotated −8°, as the marker.

## Do's and Don'ts

### Do:
- **Do** show progress as a change of object (dashed numbered slot → rotated paper sticker → special sticker), not as a recolour.
- **Do** print the fact and its source on every sticker («400 g de frutas y verduras al día · OMS»), and keep the full fact in the prose.
- **Do** keep reading columns on leaf white at max 68ch, Figtree 1.125rem/1.7.
- **Do** use coral ink (#A8402D) whenever coral must be text on a light ground.
- **Do** alternate album green and album page green between consecutive green bands.
- **Do** size big uppercase titles by container query so the longest word fits.
- **Do** honour reduced motion: the paste, shake and menu wipe all collapse to instant.

### Don't:
- **Don't** use a photo hero or a card grid of topics; the album is the structure.
- **Don't** put facts in stat panels or big-number callouts; they live in the prose and on the sticker.
- **Don't** let the album take over the reading column; it lives on the cover, the topic openers and the closing page.
- **Don't** set turquoise or plain coral as text on leaf white or paper.
- **Don't** give flat panels or bands a drop shadow; only pasted objects cast one.
- **Don't** set paragraphs, legends or messages in Anybody.
