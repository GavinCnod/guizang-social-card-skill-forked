# Background Systems

The original Guizang PPT electronic-magazine mode uses WebGL fluid, contour, ink, and chromatic atmosphere. Static Rednote/WeChat images should preserve that feeling when the style mode is Editorial Magazine x E-ink.

Do not reduce this mode to a flat beige page with a faint grid. Do not add visible grid, dot-matrix, or drafting-paper patterns to the background.

Warm Gold uses its own layered model below — same discipline (atmosphere beats flat fill), different ingredients (gold glow + warm wash instead of ink flow).

## Layer Model

Use 3-5 layers:

1. Paper base from `theme-presets.md`.
2. Procedural paper grain.
3. Ink wash, contour field, or WebGL fluid canvas.
4. Optional hairline structure as content dividers only, not as a page-wide background grid.
5. Content layer.

Recommended CSS order:

```html
<section class="poster magazine hero">
  <canvas class="mag-bg" data-bg="ink-flow"></canvas>
  <div class="grain"></div>
  <div class="ink-vignette"></div>
  <div class="content">...</div>
</section>
```

```css
.poster { position: relative; overflow: hidden; background: var(--paper); }
.mag-bg { position:absolute; inset:0; width:100%; height:100%; z-index:0; opacity:.34; }
.poster.hero .mag-bg { opacity:.62; }
.grain {
  position:absolute; inset:0; z-index:1; pointer-events:none;
  opacity:.12; mix-blend-mode:multiply;
  background:
    linear-gradient(112deg, rgba(0,0,0,.035), transparent 26%, rgba(255,255,255,.16) 52%, transparent 82%),
    radial-gradient(circle at 18% 22%, rgba(var(--ink-rgb),.05), transparent 38%),
    radial-gradient(circle at 78% 84%, rgba(var(--accent-rgb),.045), transparent 42%);
}
.ink-vignette {
  position:absolute; inset:0; z-index:2; pointer-events:none;
  background:
    radial-gradient(circle at 18% 12%, rgba(var(--ink-rgb),.10), transparent 34%),
    radial-gradient(circle at 82% 80%, rgba(var(--accent-rgb),.10), transparent 38%);
}
.content { position:relative; z-index:3; }
```

## When To Show WebGL

Use stronger visible atmosphere for:

- Cover.
- Chapter/divider.
- Pull quote.
- Sparse thesis page.
- Closing page.

Use subtle atmosphere for:

- Screenshot pages.
- Dense ledgers.
- Checklists.
- Product evidence pages.

If screenshots are the main evidence, the background should support them rather than compete with them.

## WebGL Helper

The skill includes `assets/magazine-bg-webgl.js`, a small helper for a deterministic ink-flow background:

```html
<canvas class="mag-bg" data-seed="workbuddy"></canvas>
<script src="assets/magazine-bg-webgl.js"></script>
<script>
  document.querySelectorAll(".mag-bg").forEach((canvas, i) => {
    MagazineBg.mount(canvas, {
      ink: [26, 46, 31],
      paper: [245, 241, 232],
      accent: [46, 107, 79],
      strength: canvas.closest(".hero") ? 0.62 : 0.28,
      frozenTime: 2.4 + i * 0.37
    });
  });
</script>
```

For screenshot exports, prefer `frozenTime` so repeated renders look stable.

## 2D Fallback

If WebGL fails, create a 2D canvas with:

- Large radial ink wash.
- Several translucent contour arcs.
- Soft paper noise or uneven ink wash.
- Theme color at very low opacity.

The output should still feel like an editorial background, not a plain fill.

## Warm Gold Layer Model (暖金中登)

Warm Gold does **not** mount the ink-flow WebGL canvas. Its atmosphere is CSS-only: warm ivory paper, subtle grain, one radial gold glow behind the focal element, and hairline gold rules as content dividers. Use 3-5 layers:

1. Paper base from `theme-presets.md` (`--paper`).
2. Subtle grain (same `.grain` element, warm-tuned opacity).
3. Optional radial gold glow (`.gold-glow`) behind the focal element only — one per poster.
4. Hairline gold rules as content dividers (`.gold-rule` / `.gold-rule-thin`), never as a page-wide grid.
5. Content layer.

Recommended CSS order (3:4):

```html
<section class="poster warmgold hero" data-system="warm-gold" data-palette="warm-gold-classic">
  <div class="grain"></div>
  <div class="gold-glow" style="--gx:30%; --gy:18%"></div>
  <div class="content stack gap-4">
    <div class="issue-row">VOL. 01 · 2026.07</div>
    <div class="gold-rule"></div>
    ...
  </div>
</section>
```

```css
.poster.warmgold { position: relative; overflow: hidden; background: var(--paper); }
.poster.warmgold .grain {
  position: absolute; inset: 0; z-index: 1; pointer-events: none;
  opacity: .10; mix-blend-mode: multiply;
  background:
    linear-gradient(112deg, rgba(17,9,4,.03), transparent 28%, rgba(255,255,255,.14) 54%, transparent 84%),
    radial-gradient(circle at 20% 24%, rgba(17,9,4,.04), transparent 40%);
}
.poster.warmgold .gold-glow {
  position: absolute; inset: 0; z-index: 2; pointer-events: none;
  background: radial-gradient(42% 34% at var(--gx, 30%) var(--gy, 20%),
    rgba(184,134,11,.22), transparent 70%);
}
.poster.warmgold .gold-rule {
  height: 3px; border: 0; width: 100%;
  background: var(--gold-rule);
}
.poster.warmgold .gold-rule-thin {
  height: 1px; border: 0; width: 100%;
  background: linear-gradient(135deg, rgba(122,74,0,.55), rgba(231,159,0,.55));
}
.poster.warmgold .content { position: relative; z-index: 3; }
```

When to show the gold glow:

- Strong (α ~.22, large radius): cover, chapter/divider, pull quote, closing page.
- Subtle or absent (α ~.10 or none): screenshot pages, dense ledgers, checklists, data pages.

For `warm-gold-noir`, swap the wash per the override block in `theme-presets.md` — light-paper math does not carry over.

**Warm Gold Do Not:**

- Do not mount the ink-flow WebGL canvas — it belongs to Editorial.
- Do not pour `--gold-rule` across ≥60% of the canvas (validator **R10**).
- Do not use pure `#000` shadows with a gold glow (validator **R11**).
- Do not add page-wide grids or dot matrices.
- Do not put strong gold marks behind body text.

## Do Not

- Do not use bright gradients.
- Do not use page-wide grid, dot-matrix, graph-paper, or drafting-paper backgrounds.
- Do not use decorative blobs or circles with no relationship to the layout.
- Do not place strong background marks behind body text.
- Do not let WebGL obscure screenshots or small captions.
- Do not animate the final image sequence unless the task is video.
