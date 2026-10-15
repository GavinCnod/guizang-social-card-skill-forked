# AGENTS.md

写给 OpenCode 等 agent：只记录不看就会犯错的仓库约定。产品行为看 `SKILL.md`，事实与版本历史看 `HANDOFF.md`，决策理由看 `PRODUCT.md`。

## 仓库性质

- 这是一个 **Agent Skill**，不是应用：没有构建链。入口是 `SKILL.md`（frontmatter 的 `name` / `description` 决定何时被触发），`references/*.md` 是按需读取的规则文档。
- 交付形态 = 单文件 HTML + Playwright 截图出的 PNG；**仓库级没有 render 命令**，每个任务目录自写渲染脚本。
- 上游：`op7418/guizang-social-card-skill`。本 clone 只有 `origin`（GavinCnod/guizang-social-card-skill-forked），未配置 `upstream` remote；同步上游需要先 `git remote add upstream https://github.com/op7418/guizang-social-card-skill.git`。

## 分支约定（重要）

- `main`：只用于同步上游，保持能干净 merge；**不要在这里提交自用二次开发**。
- `dev-personal-usage-gavin`：个人二次开发分支（本地创建：`git checkout dev-personal-usage-gavin`，会自动跟踪 origin）。
- dev 比 main 多出：Warm Gold「暖金中登」第三视觉系统（`assets/template-warmgold-card.html`、`style-c/` 截图底、G01-G12 版式、validator R10/R11、`.docs/` 设计文档）和 1.1.0 版本号。在 main 上找不到这些文件是正常的，先确认自己在哪个分支。
- fork 的既有惯例：新增/修改风格、版式时，同步更新 `scripts/check-skill-docs.mjs` 的钉扎字符串和 `HANDOFF.md` 版本历史（dev 上的 Warm Gold 就是这么做的）。

## 命令

```bash
npm install                       # 唯一依赖 playwright；仓库默认没有 node_modules
npx playwright install chromium   # 首次跑 validator 前执行（本机无浏览器缓存）
npm run test:docs                 # 文档约束检查（main 上 27 项）
npm run validate <task-dir>       # = node validate-social-deck.mjs，R1-R9 版式校验，FAIL 时 exit 1
node validate-social-deck.mjs <task-dir> --style=swiss   # 自动识别风格失败时手动指定
```

- 渲染：在 `local-tests/<slug>/` 里放 `index.html` + 自写 `render.mjs`（Playwright 逐 section 截图），流程见 `references/production-workflow.md`。无 GPU 环境截 WebGL 墨流背景需要 `--use-angle=swiftshader --enable-unsafe-swiftshader`（validator 已内置）。
- 本机（Ubuntu 24.04，sudo 需密码）跑 Playwright 前先装系统依赖：`sudo apt-get install -y libnspr4 libnss3 libasound2t64`；暂时无法 sudo 时用 `apt-get download` 解包到 /tmp 再设 `LD_LIBRARY_PATH` 运行（validator / render 都适用）。
- 暖金本地冒烟 fixture：`local-tests/smoke-warmgold-audit/`（G01-G12 全覆盖正样例 + R10/R11 负样例 + `render.mjs`）；重跑 `node validate-social-deck.mjs local-tests/smoke-warmgold-audit`。
- `scripts/make-video-contact-sheet.py` 依赖 `ffprobe`；`scripts/package-live-photo.py` 与 `*.swift` 辅助脚本面向 macOS/iPhone 的 `.pvt` 发布链路。

## 容易踩的坑

- `scripts/check-skill-docs.mjs` 用**精确字符串**钉住 SKILL.md、`references/*.md`、PRODUCT.md、HANDOFF.md（含 `### v0.15 · 2026-07-01` 这类版本标题；dev 上还钉 warmgold 模板与 validator 实现）。改写/精简这些内容前先同步检查脚本，改完必跑 `npm run test:docs`。
- 生成产物一律放 `local-tests/<slug>/`（已 gitignore），严禁落在 skill 根目录（`.gitignore` 也会兜底拦截 `social-card-*` / `output/` / 裸 PNG 等）。
- 不要从零写 HTML：从 `assets/template-{editorial|swiss}-card.html` 拷种子到任务目录，只改 `<!-- POSTERS_HERE -->` 区域。Editorial / Swiss /（dev 的）Warm Gold 三套 class 命名空间互不通，混用会静默塌版。
- 主题色只能用 `references/theme-presets.md` 的预设，不允许自定义 hex；同一套图不混风格。
- validator 是**按需**工具：交付默认先把图给用户看，用户要求才跑（`SKILL.md` Step 7），不要渲完自动跑。
- 3:4 画板内容必须覆盖 ≥75% 高度；标题与下方内容间距等硬规则见 `SKILL.md` Non-Negotiables，改动前先读。
- 文档分工：`HANDOFF.md` 只记事实 + 版本历史（追加条目），`PRODUCT.md` 记决策理由；两者都有文档测试钉住。
- 永远不要改上游 Guizang PPT skill；License 是 AGPL-3.0，衍生版必须保持开源。
