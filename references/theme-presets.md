# Theme Presets

Use one theme for one image package. Do not mix palettes across pages unless the user explicitly asks for a deliberate multi-chapter system.

## Editorial Magazine x E-ink Palettes

These are adapted from the Guizang PPT electronic-magazine mode for static Rednote and WeChat images.

### Ink Classic

Use for business commentary, AI essays, product thinking, and neutral editorial posts.

```css
:root {
  --paper: #f3f0e8;
  --paper-2: #ebe6da;
  --ink: #0a0a0b;
  --muted: #68625a;
  --line: rgba(10,10,11,.22);
  --accent: #111111;
  --accent-soft: #d8d2c6;
}
```

### Indigo Porcelain

Use for technology, research, data, AI infrastructure, and calm analytical writing.

```css
:root {
  --paper: #f2f4f5;
  --paper-2: #e5ebef;
  --ink: #0a1f3d;
  --muted: #5f6d78;
  --line: rgba(10,31,61,.20);
  --accent: #315d93;
  --accent-soft: #d7e1ec;
}
```

### Forest Ink

Use for hiking, outdoor, nature, sustainability, personal field notes, and grounded lifestyle posts.

```css
:root {
  --paper: #f5f1e8;
  --paper-2: #e8dfcf;
  --ink: #16251b;
  --muted: #5d665d;
  --line: rgba(22,37,27,.22);
  --accent: #2e6b4f;
  --accent-soft: #d4dfd2;
}
```

### Kraft Paper

Use for memory, craft, personal essays, old objects, creator notes, and warm low-tech topics.

```css
:root {
  --paper: #eedfc7;
  --paper-2: #dfc9a8;
  --ink: #2a1e13;
  --muted: #755f49;
  --line: rgba(42,30,19,.24);
  --accent: #9b5a2e;
  --accent-soft: #d5b58f;
}
```

### Dune

Use for design, object studies, portfolio-like covers, gallery tone, and restrained aesthetic posts.

```css
:root {
  --paper: #f0e6d2;
  --paper-2: #ded0b7;
  --ink: #1f1a14;
  --muted: #6f6557;
  --line: rgba(31,26,20,.22);
  --accent: #8f7650;
  --accent-soft: #d4c2a4;
}
```

### Midnight Ink

The **only** official dark Editorial palette. Use for game key art, night photography, cinematic covers, dark-themed cultural pieces — content whose source imagery is already dark and would be diminished by paper backgrounds. Do not improvise other dark palettes; if Midnight Ink does not fit, pick a different mode (Editorial dark is not a universal switch).

```css
:root {
  --paper: #0e0d0c;
  --paper-2: #1a1714;
  --ink: #ece2cf;
  --muted: #9a8c75;
  --line: rgba(236,226,207,.22);
  --accent: #d4a04a;
  --accent-soft: #3a2a14;
}
```

Midnight Ink **must** also override two background layers — light-paper math does not carry over:

```css
[data-theme="midnight-ink"] .grain {
  opacity: .26;
  mix-blend-mode: screen;
  background-image: radial-gradient(rgba(255,244,214,.10) 1px, transparent 1px);
}
[data-theme="midnight-ink"] .paper-wash {
  background:
    radial-gradient(80% 50% at 28% 16%, rgba(212,160,74,.12), transparent 64%),
    radial-gradient(70% 60% at 80% 86%, rgba(60,40,20,.20), transparent 72%),
    linear-gradient(180deg, rgba(236,226,207,.02), rgba(0,0,0,.32));
}
[data-theme="midnight-ink"] .frame-img {
  background: #18120f;
  box-shadow: 0 0 0 1px rgba(236,226,207,.10);
}
```

The seed `template-editorial-card.html` ships these overrides — just switch `data-theme` and they apply automatically.

Magazine palette rules:

- Use `--paper` as the main background and `--ink` as primary type.
- Use `--accent` sparingly: section marker, page number, pull quote rule, or one highlighted phrase.
- `--paper-2` can support photo wells, issue strips, or checklist bands.
- Light palettes (the first five): do not turn into beige-on-beige. Maintain real contrast.
- Midnight Ink: do not stack opaque cards or fills on the page. Dark Editorial relies on photo bleeds + warm gilt accent for hierarchy, not background blocks.

## Swiss International Palettes

These are adapted from the Guizang PPT Swiss mode.

### IKB Blue

Default for AI, technology, product updates, design, and engineering topics.

```css
:root {
  --paper: #fafaf8;
  --ink: #0a0a0a;
  --grey-1: #f0f0ee;
  --grey-2: #d4d4d2;
  --grey-3: #737373;
  --accent: #002FA7;
  --accent-on: #ffffff;
}
```

### Lemon Yellow

Use for young, consumer, active, retail, sporty, or playful information.

```css
:root {
  --paper: #fafaf8;
  --ink: #0a0a0a;
  --grey-1: #f0f0ee;
  --grey-2: #d4d4d2;
  --grey-3: #737373;
  --accent: #FFD500;
  --accent-on: #0a0a0a;
}
```

### Lemon Green

Use for ecology, future, emerging tech, health, and highlighter-like contemporary topics.

```css
:root {
  --paper: #fafaf8;
  --ink: #0a0a0a;
  --grey-1: #f0f0ee;
  --grey-2: #d4d4d2;
  --grey-3: #737373;
  --accent: #C5E803;
  --accent-on: #0a0a0a;
}
```

### Safety Orange

Use for industrial, warning, urgency, risk, decision points, and sharp corrections.

```css
:root {
  --paper: #fafaf8;
  --ink: #0a0a0a;
  --grey-1: #f0f0ee;
  --grey-2: #d4d4d2;
  --grey-3: #737373;
  --accent: #FF6B35;
  --accent-on: #ffffff;
}
```

Swiss palette rules:

- Use exactly one `--accent`.
- Do not use gradients, shadows, glass, or mixed accent colors.
- If the accent is yellow or green, text on accent must use `--accent-on: #0a0a0a`.
- Prefer pure blocks, hairline rules, and grid rhythm.

## Warm Gold Palettes (暖金中登)

These are adapted from the light-mode black-and-gold scheme (OKLCH 60°/85° dual-axis). All values are fixed here — do not invent new gold hexes. `data-system="warm-gold"` + `data-palette="<slug>"` on the root.

Shared tokens every Warm Gold palette carries (do not drop them):

```css
--gold-deep: #7A4A00;   /* deep bronze gold — gradient stop 1, hairlines on dark */
--gold-mid:  #C18200;   /* mid gold — gradient stop 2 */
--gold:      #E79F00;   /* bright amber gold — gradient stop 3, focal accents */
--gold-glow: #B8860B;   /* radial glow only */
--gold-rule: linear-gradient(135deg, #7A4A00 0%, #C18200 50%, #E79F00 100%);
--gold-shadow: 0 2px 12px rgba(122,74,0,.18);
--ink-shadow: 0 2px 8px rgba(17,9,4,.10);   /* neutral warm-black — never #000 */
```

### Warm Gold Classic (default)

Use for brand launches, annual reports, membership programs, heritage brands, premium announcements.

```css
:root[data-system="warm-gold"][data-palette="warm-gold-classic"] {
  --paper: #FBF8F5;
  --paper-2: #FDFBFA;
  --ink: #110904;
  --muted: #4A3625;
  --line: #E2D5CB;
  --accent: #E79F00;
  --accent-deep: #7A4A00;
  --accent-soft: #F4EDE8;
  --input: #ECE2DB;
}
```

### Warm Gold Champagne

Use for soft luxury, beauty, wellness, wedding / lifestyle, light product drops.

```css
:root[data-system="warm-gold"][data-palette="warm-gold-champagne"] {
  --paper: #FDFAF6;
  --paper-2: #FBF5EE;
  --ink: #1A1208;
  --muted: #5A4630;
  --line: #EAD9C8;
  --accent: #E8B563;
  --accent-deep: #9A6A1E;
  --accent-soft: #F7EFE4;
  --input: #F0E4D6;
}
```

### Warm Gold Bronze

Use for craft, leather / whiskey / coffee, workshop stories, rugged premium, metal and material topics.

```css
:root[data-system="warm-gold"][data-palette="warm-gold-bronze"] {
  --paper: #F9F4EC;
  --paper-2: #F5EDE2;
  --ink: #140C05;
  --muted: #4E3A24;
  --line: #DCCBB4;
  --accent: #C18200;
  --accent-deep: #6B4200;
  --accent-soft: #EFE4D2;
  --input: #E8DCC8;
}
```

### Warm Gold Rose

Use for fashion, jewelry-adjacent, feminine premium, gift guides, editorial lifestyle.

```css
:root[data-system="warm-gold"][data-palette="warm-gold-rose"] {
  --paper: #FCF7F4;
  --paper-2: #FAF1EC;
  --ink: #170D0A;
  --muted: #563B33;
  --line: #EBD8D0;
  --accent: #DFA05A;
  --accent-deep: #8A4E28;
  --accent-soft: #F6EBE4;
  --input: #F0E2DA;
}
```

### Warm Gold Espresso

Use for finance milestones, dark-roast premium, board-level reports, understated authority pieces.

```css
:root[data-system="warm-gold"][data-palette="warm-gold-espresso"] {
  --paper: #F7F2EA;
  --paper-2: #F1EADD;
  --ink: #0E0805;
  --muted: #453221;
  --line: #D4C3AB;
  --accent: #B8860B;
  --accent-deep: #5C3D00;
  --accent-soft: #EBE0CE;
  --input: #E2D5C0;
}
```

### Warm Gold Noir (only dark variant)

The **only** official dark Warm Gold palette. Use for night events, black-tie photography, dark product shots, cinematic award coverage — content whose source imagery is already dark. Do not improvise other dark Warm Gold palettes; if Noir does not fit, pick a different mode.

```css
:root[data-system="warm-gold"][data-palette="warm-gold-noir"] {
  --paper: #14100B;
  --paper-2: #1C1711;
  --ink: #F5EDDF;
  --muted: #A8967A;
  --line: rgba(245,237,223,.18);
  --accent: #E79F00;
  --accent-deep: #C18200;
  --accent-soft: #2A2118;
  --input: #241D15;
}
```

Warm Gold Noir **must** also override the background layers — light-paper math does not carry over:

```css
[data-palette="warm-gold-noir"] .grain {
  opacity: .22;
  mix-blend-mode: screen;
  background-image: radial-gradient(rgba(245,237,223,.08) 1px, transparent 1px);
}
[data-palette="warm-gold-noir"] .paper-wash {
  background:
    radial-gradient(70% 50% at 30% 18%, rgba(231,159,0,.10), transparent 62%),
    radial-gradient(60% 55% at 82% 88%, rgba(60,40,16,.28), transparent 70%),
    linear-gradient(180deg, rgba(245,237,223,.02), rgba(0,0,0,.35));
}
[data-palette="warm-gold-noir"] .frame-img {
  background: #0F0C08;
  box-shadow: 0 0 0 1px rgba(231,159,0,.22);
}
[data-palette="warm-gold-noir"] .gold-rule {
  box-shadow: 0 0 18px rgba(231,159,0,.35);
}
```

Warm Gold palette rules:

- Use `--paper` as the main background and `--ink` as primary type.
- Gold (`--accent` / `--gold-rule`) is for rules, hairlines, focal phrases, numerals, and one badge max — never a canvas-wide fill (see R10 in `components.md`).
- `--accent-deep` anchors gradients and small solid plates; `--accent-soft` / `--input` support wells and chips.
- Light palettes (the first five): maintain real ink-on-ivory contrast; do not let the page become gold-on-beige mush.
- Warm Gold Noir: do not stack opaque light cards. Dark Warm Gold relies on photo bleeds + gold hairlines + glow for hierarchy.
- Exactly one palette per package. Never mix two Warm Gold palettes.
