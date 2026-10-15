#!/usr/bin/env node
import fs from "node:fs";

const checks = [];

function fileText(file) {
  return fs.readFileSync(file, "utf8");
}

function mustInclude(file, needle, label) {
  checks.push(() => {
    const ok = fileText(file).includes(needle);
    return {
      ok,
      label,
      detail: ok ? `${file} includes "${needle}"` : `${file} must include "${needle}"`,
    };
  });
}

function mustNotMatch(file, pattern, label) {
  checks.push(() => {
    const ok = !pattern.test(fileText(file));
    return {
      ok,
      label,
      detail: ok ? `${file} does not match ${pattern}` : `${file} must not match ${pattern}`,
    };
  });
}

mustInclude(
  "SKILL.md",
  "Generated work must live in a task folder, not in the skill root.",
  "root output guardrail in SKILL.md",
);
mustInclude(
  "SKILL.md",
  "local-tests/<slug>/",
  "default task folder in SKILL.md",
);
mustInclude(
  "SKILL.md",
  "Triple Live Photo",
  "triple Live Photo capability in SKILL.md",
);
mustInclude(
  "SKILL.md",
  "material-first Live Photo puzzle layouts",
  "material-first puzzle capability in SKILL.md",
);
mustInclude(
  "SKILL.md",
  "use the M16 Image-Led Cover / text-on-image rules",
  "single-video text uses M16 overlay rules",
);
mustInclude(
  "SKILL.md",
  "Do not invent extra kicker, meta, hairlines",
  "single-video text must not invent extra overlay copy",
);
mustInclude(
  "SKILL.md",
  "platform limits (`5s` Xiaohongshu, `3s` WeChat Official Account)",
  "platform publishing reminder in SKILL.md",
);
mustInclude(
  "SKILL.md",
  "Audience-facing copy must describe the user's actual scene",
  "audience-facing copy guardrail in SKILL.md",
);
mustInclude(
  "SKILL.md",
  "Do not add non-template ornaments just to satisfy an automated density warning",
  "non-template ornament guardrail in SKILL.md",
);
mustNotMatch(
  "SKILL.md",
  /Create a task folder in the current workspace/,
  "no root-level task-folder instruction in SKILL.md",
);

mustInclude(
  "references/production-workflow.md",
  "Create a task folder under `local-tests/` by default",
  "production workflow uses local-tests",
);
mustInclude(
  "references/production-workflow.md",
  "Do not create generated task folders or rendered assets in the skill root",
  "production workflow forbids skill-root outputs",
);

mustInclude(
  "references/live-photo-production.md",
  "## Live Photo Information Budget",
  "Live Photo information budget section",
);
mustInclude(
  "references/live-photo-production.md",
  "## Triple Live Photo Collage",
  "triple collage section",
);
mustInclude(
  "references/live-photo-production.md",
  "## Material-First Puzzle Layouts",
  "material-first puzzle section",
);
mustInclude(
  "references/live-photo-production.md",
  "Do not render single-video text as generic subtitles.",
  "single-video text is not subtitle-style",
);
mustInclude(
  "references/live-photo-production.md",
  "Do not invent extra kicker, meta, hairlines",
  "single-video overlay must not invent extra copy",
);
mustInclude(
  "references/live-photo-production.md",
  "Four-grid",
  "four-grid puzzle guidance",
);
mustInclude(
  "references/live-photo-production.md",
  "## Long Video Intake",
  "long video intake section",
);
mustInclude(
  "references/live-photo-production.md",
  "Web-sourced free videos are only for making our own demo/promo cases",
  "user-supplied video is the normal path",
);
mustInclude(
  "references/live-photo-production.md",
  "Audience-facing copy should name the real scene in the video.",
  "Live Photo visible-copy guardrail",
);

mustInclude(
  "references/category-cookbook.md",
  "## Live Photo Scene Library",
  "category scene library section",
);
mustInclude(
  "references/category-cookbook.md",
  "This is not a fixed template list.",
  "category library stays heuristic",
);

mustInclude(
  "PRODUCT.md",
  "## 10. Live Photo 复盘（2026-07-01）",
  "product doc records Live Photo retrospective",
);
mustInclude(
  "PRODUCT.md",
  "把内部制作要求写成观众可见文案",
  "product doc records visible-copy failure mode",
);
mustInclude(
  "HANDOFF.md",
  "### v0.16 · 2026-07-22",
  "HANDOFF.md records the Warm Gold v0.16 release entry",
);
mustInclude(
  "HANDOFF.md",
  "### v0.15 · 2026-07-01",
  "handoff records Live Photo version history",
);
mustInclude(
  "HANDOFF.md",
  "不要把制作要求当成观众可见内容",
  "handoff records Live Photo execution pitfall",
);

// ---- Warm Gold (third visual system) — appended 2026-07-22 ----
mustInclude(
  "SKILL.md",
  "### 3. Choose Style Mode",
  "style mode step exists for mode routing",
);
mustInclude(
  "references/style-system.md",
  "## Mode C: Warm Gold (暖金中登)",
  "style-system.md declares Mode C Warm Gold",
);
mustInclude(
  "references/style-system.md",
  "### Warm Gold identity test",
  "style-system.md declares Warm Gold Identity Test",
);
mustInclude(
  "references/style-system.md",
  "The three modes below are **visual stances, not content categories**",
  "style-system.md declares three modes (not two)",
);
mustInclude(
  "references/layout-recipes.md",
  "### G12 Closing Question",
  "layout-recipes.md declares G12 (G01-G12 range complete)",
);
mustInclude(
  "references/theme-presets.md",
  "warm-gold-noir",
  "theme-presets.md declares the only dark Warm Gold palette",
);
mustInclude(
  "references/theme-presets.md",
  "## Warm Gold Palettes (暖金中登)",
  "theme-presets.md declares Warm Gold palette section",
);
mustInclude(
  "references/components.md",
  "R10",
  "components.md declares R10 gold-gradient discipline",
);
mustInclude(
  "references/components.md",
  "R11",
  "components.md declares R11 shadow discipline",
);
mustInclude(
  "SKILL.md",
  "Do not mix the three visual systems inside the same image set",
  "SKILL.md forbids mixing the three visual systems",
);
mustInclude(
  "SKILL.md",
  "Warm Gold 暖金中登 → copy `assets/template-warmgold-card.html`",
  "SKILL.md routes Warm Gold to its seed template",
);
mustInclude(
  "SKILL.md",
  "Run the Warm Gold Identity Test",
  "SKILL.md points at Warm Gold Identity Test",
);
mustInclude(
  "assets/template-warmgold-card.html",
  'data-system="warm-gold"',
  "warmgold seed carries data-system root attribute",
);
mustInclude(
  "assets/template-warmgold-card.html",
  "warm-gold-noir",
  "warmgold seed ships the noir dark palette",
);
mustInclude(
  "validate-social-deck.mjs",
  'html.dataset.system === "warm-gold"',
  "validator probes data-system before theme/accent",
);
mustInclude(
  "validate-social-deck.mjs",
  'rule: "R10"',
  "validator implements R10",
);
mustInclude(
  "validate-social-deck.mjs",
  'rule: "R11"',
  "validator implements R11",
);

// ---- README fork-custom statements — appended 2026-10-15 ----
mustInclude(
  "README.md",
  "本仓库是个人 fork,不是上游原版",
  "README.md marks this repo as a personal fork",
);
mustInclude(
  "README.md",
  "暖金中登(Warm Gold)是本 fork 定制、上游原版没有的第三套系统",
  "README.md marks Warm Gold as fork-custom",
);
mustInclude(
  "README.md",
  "git clone -b dev-personal-usage-gavin https://github.com/GavinCnod/guizang-social-card-skill-forked.git",
  "README.md points at the fork install command",
);
mustInclude(
  "README.en.md",
  "This repository is a personal fork, not the upstream original",
  "README.en.md marks this repo as a personal fork",
);
mustInclude(
  "README.en.md",
  "does not exist upstream",
  "README.en.md marks Warm Gold as fork-custom",
);
mustInclude(
  "README.en.md",
  "### Warm Gold (6)",
  "README.en.md declares the Warm Gold palette table",
);
mustInclude(
  ".docs/README.md",
  "本 fork 自定制，上游原版没有",
  ".docs README marks Warm Gold as fork-custom",
);

// ---- Template asset paths + CJK mono fallback pins — appended 2026-10-15 ----
mustInclude(
  "assets/template-editorial-card.html",
  'url("../../assets/screenshot-backgrounds/',
  "editorial template uses the local-tests-safe asset path",
);
mustInclude(
  "assets/template-swiss-card.html",
  'url("../../assets/screenshot-backgrounds/',
  "swiss template uses the local-tests-safe asset path",
);
mustInclude(
  "assets/template-warmgold-card.html",
  'url("../../assets/screenshot-backgrounds/',
  "warmgold template uses the local-tests-safe asset path",
);
mustNotMatch(
  "assets/template-editorial-card.html",
  /url\("\.\.\/assets\//,
  "editorial template has no repo-root-relative bg-asset path",
);
mustNotMatch(
  "assets/template-swiss-card.html",
  /url\("\.\.\/assets\//,
  "swiss template has no repo-root-relative bg-asset path",
);
mustNotMatch(
  "assets/template-warmgold-card.html",
  /url\("\.\.\/assets\//,
  "warmgold template has no repo-root-relative bg-asset path",
);
mustInclude(
  "assets/template-editorial-card.html",
  '"IBM Plex Mono", "Noto Sans SC"',
  "editorial mono stack carries a CJK fallback",
);
mustInclude(
  "assets/template-swiss-card.html",
  '"IBM Plex Mono", "Noto Sans SC"',
  "swiss mono stack carries a CJK fallback",
);
mustInclude(
  "assets/template-warmgold-card.html",
  '"IBM Plex Mono", "Noto Sans SC"',
  "warmgold mono stack carries a CJK fallback",
);
mustInclude(
  "references/qa-checklist.md",
  "Warm Gold identity test",
  "qa checklist covers the Warm Gold identity test",
);
mustInclude(
  "references/qa-checklist.md",
  "R10",
  "qa checklist lists the Warm Gold validator rules",
);
mustInclude(
  ".docs/08-实现效果与验收标准.md",
  "R10",
  "docs 08 lists the Warm Gold validator rules",
);
mustInclude(
  "assets/template-warmgold-card.html",
  ".cs-col.dark .h-md",
  "warmgold dark split columns remap serif headings to paper",
);
mustInclude(
  "references/layout-recipes.md",
  "R2 full-bleed skip",
  "layout-recipes G08 documents the R2 full-bleed pattern",
);
mustInclude(
  "validate-social-deck.mjs",
  "pathToFileURL(htmlPath).href",
  "validator builds cross-platform file URLs",
);

let failed = 0;
for (const run of checks) {
  const result = run();
  const marker = result.ok ? "PASS" : "FAIL";
  console.log(`${marker} ${result.label}`);
  if (!result.ok) {
    failed += 1;
    console.log(`  ${result.detail}`);
  }
}

if (failed > 0) {
  console.error(`\n${failed} skill doc check(s) failed.`);
  process.exit(1);
}

console.log(`\n${checks.length} skill doc checks passed.`);
