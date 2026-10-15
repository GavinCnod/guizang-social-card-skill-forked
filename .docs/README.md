# guizang-social-card-skill 理解与说明文档集

这是一套针对本仓库（`guizang-social-card-skill`）的中文说明文档，目标是让接手的人在不读完全部源码的情况下，回答四个问题：**这个 skill 能做什么、按什么流程做、靠哪些文件和工具做、做到什么程度算合格**。

| 项目 | 情况 |
| --- | --- |
| 仓库本体 | `guizang-social-card-skill`（Claude Code / Codex 等 Agent 环境的 Skill） |
| 上游 | `op7418/guizang-social-card-skill` |
| 本仓库 remote | `GavinCnod/guizang-social-card-skill-forked`（fork） |
| 定制内容 | **暖金中登（Warm Gold）第三视觉系统**——本 fork 自定制，上游原版没有 |
| 当前版本 | v0.16（2026-07-22，第三套视觉系统 Warm Gold 暖金中登） |
| 许可 | AGPL-3.0，另见 `COMMERCIAL_LICENSING.md` |
| 文档定位 | 只描述仓库里真实存在的内容，不引入未实现的能力 |

---

## 一、这个 skill 是什么

把一篇**已有的内容**（文章、脚本、产品笔记、字幕、截图、照片、用户视频）变成**一组可直接发布的社交图片**，视觉目标是"像一本被偏爱的杂志"，而不是套模板。

它不画图、不做设计自由发挥，而是把"怎样的图文才不显 AI 感"沉淀成硬规则：三套视觉系统、40 个版式骨架、16 套主题预设、11 条自动校验规则，以及一份必须遵守的交付流程。

一句话：

> 输入一篇文章或一段视频素材，输出小红书 3:4 组图 / 公众号 21:9 + 1:1 封面对 / Live Photo 动态卡。

---

## 二、四类可交付产物

| 产物 | 画板 | 像素 | 说明 |
| --- | --- | --- | --- |
| 小红书 / Rednote 组图 | `.poster.xhs` | 1080×1440（3:4） | 封面 + 内容页，常见 5-9 张 |
| 公众号 21:9 主封面 | `.poster.wide` | 2100×900 | 完整或近完整标题 + 一个强视觉关系 |
| 公众号 1:1 分享卡 | `.poster.square` | 1080×1080 | 由长标题推导的短标题，默认不放图 |
| Live Photo 动态卡 | 复用上述比例 | 1080×1440 等 | 输出 `JPG + MOV`，打包为 `.pvt` 供 iPhone 发布 |

21:9 与 1:1 必须在同一个 HTML 里成对构建，并附带合并预览区，方便检查两者的视觉关系；禁止把 21:9 直接裁成 1:1。

---

## 三、能力速览

**做得了的**

- 小红书 3:4 图文组图、公众号封面对、文章封面、产品更新卡、截图说明图、教程拆页
- 三套互斥的视觉系统：Editorial 电子杂志风（6 套主题）/ Swiss 瑞士国际主义（4 套锚点色）/ Warm Gold 暖金中登（6 套色票）
- 40 个版式骨架：Editorial `M01-M16` + Swiss `S01-S12` + Warm Gold `G01-G12`
- Live Photo：单视频动态卡、二宫格 / 三宫格 / 四宫格 material-first 拼图、三连拼图、长视频低成本诊断
- 用户自带截图 / 照片的包装处理（`.frame-shot` / `.device-browser` / `.device-phone` + 13 张真实材质底）
- 无图时的取图链路：Pexels / Unsplash / Flickr CC / Wallhaven / 直接搜索，落本地并写 `SOURCES.md`
- 渲后自动校验：`validate-social-deck.mjs` 的 R1-R11 十一条规则，基于 Playwright 真实 DOM 测量

**做不了的（产品边界，不是技术缺口）**

- 横向翻页 PPT / 网页演示（用上游的 PPT skill）
- 长视频正片剪辑（本 skill 只做短时长的动态卡）
- 无版式诉求的纯图片修图、纯文字编辑
- OOTD 日常自拍、菜品大片摆盘、梦核 / Y2K / kawaii 等与三套视觉系统正面冲突的赛道
- 自定义主题色：只允许从 16 套预设里选，不允许传 hex

---

## 四、文档地图

| 文档 | 回答什么问题 | 主要依据 |
| --- | --- | --- |
| 本文件 | 全局定位与导航 | `README.md`、`HANDOFF.md` |
| [`01-能力与适用边界.md`](./01-能力与适用边界.md) | 能做什么、不能做什么、触发方式、产出效果 | `SKILL.md`、`PRODUCT.md`、`category-cookbook.md` |
| [`02-工作流程.md`](./02-工作流程.md) | 7 步主流程每步做什么、分支怎么走、交付节奏 | `SKILL.md` |
| [`03-视觉系统与主题.md`](./03-视觉系统与主题.md) | 三套视觉系统的规则、16 套主题 token、组件与背景、种子模板结构 | `style-system.md`、`theme-presets.md`、`components.md`、`assets/template-*.html` |
| [`04-内容策划与版式骨架.md`](./04-内容策划与版式骨架.md) | 写什么、分几页、40 个骨架怎么选、QA 清单 | `content-planning.md`、`layout-recipes.md`、`platform-specs.md`、`qa-checklist.md` |
| [`05-实况照片与视频分支.md`](./05-实况照片与视频分支.md) | Live Photo 的信息预算、拼图版式、长视频诊断、打包与发布 | `live-photo-production.md`、`scripts/` |
| [`06-工具链与脚本.md`](./06-工具链与脚本.md) | 校验脚本逐条规则、npm 脚本、依赖、仓库边界 | `validate-social-deck.mjs`、`scripts/check-skill-docs.mjs`、`package.json` |
| [`07-目录结构与文件清单.md`](./07-目录结构与文件清单.md) | 每个文件干什么、何时被读取、谁引用谁 | 全仓库 |
| [`08-实现效果与验收标准.md`](./08-实现效果与验收标准.md) | 做出来是什么样、改版前后差在哪、怎样算合格 | `HANDOFF.md` 版本历史、`qa-checklist.md`、`style-system.md` |

阅读顺序建议：先 `01` → `02`，理解能力与流程；再按任务类型挑 `03` / `04` / `05`；`06` / `07` / `08` 当字典与验收标准查。

---

## 五、30 秒上手

安装（三选一）：

```bash
# 方式一：skills 包管理器
npx skills add https://github.com/op7418/guizang-social-card-skill --skill guizang-social-card-skill

# 方式二：直接 clone 到 Claude skills 目录
git clone https://github.com/op7418/guizang-social-card-skill.git ~/.claude/skills/guizang-social-card-skill
```

安装后直接对 Agent 说人话即可触发：

```text
帮我基于这篇文章做一套瑞士风小红书图文，5 张，IKB 蓝。
基于这份产品测评做一套小红书 3:4，标题用电子杂志风。
帮我把这篇文章做成公众号封面对：21:9 头图 + 1:1 分享卡，视觉保持一致。
我有一段咖啡视频，帮我做成小红书 5 秒 Live Photo 卡片，文字压在安静区域。
把这三个游戏片段做成三连 Live Photo 拼图，用 Swiss 风介绍攻略要点。
```

触发关键词包括：小红书图文 / Rednote 卡片 / social cards / 3:4 封面 / Live Photo / 实况照片 / 三连实况拼图 / 微信公众号封面 / Swiss Style / 杂志风社交图片。

---

## 六、仓库全景（简化树）

```text
guizang-social-card-skill-forked/
├── SKILL.md                      # 主入口：7 步工作流 + 不可协商规则
├── README.md / README.en.md      # 用户向说明（中英）
├── HANDOFF.md                    # 事实版交接：结构 + 版本历史 + 验证方法
├── PRODUCT.md                    # 产品思考：为什么这样做 + roadmap
├── COMMERCIAL_LICENSING.md       # 商用授权说明
├── LICENSE                       # AGPL-3.0
├── AGENT.md                      # Agent 工作约定与产物放置规则
├── validate-social-deck.mjs      # R1-R11 渲染后校验器
├── package.json                  # npm scripts + playwright 依赖
├── agents/openai.yaml            # 子代理 / 平台元数据
├── assets/
│   ├── template-editorial-card.html   # Editorial 种子模板（838 行）
│   ├── template-swiss-card.html       # Swiss 种子模板（943 行）
│   ├── template-warmgold-card.html    # Warm Gold 种子模板（1095 行）
│   ├── magazine-bg-webgl.js           # WebGL 墨流背景
│   └── screenshot-backgrounds/        # 13 张截图舞台材质底（style-a 5 / style-b 4 / style-c 4）
├── references/                   # 16 份子规范，按需读取（合计约 4500 行）
└── scripts/                      # 文档自检 + Live Photo 打包 / 抽帧 / 元数据
```

`local-tests/`、`outputs/`、`output/`、根目录的 `*.png` / `*.mov` / `*.pvt` 等全部在 `.gitignore` 中：**任何生成物都不允许留在 skill 根目录**，默认落到 `local-tests/<slug>/`。

---

## 七、必须记住的硬约束

规则原文在 `SKILL.md` 末尾的 Non-Negotiables，这里只列最容易翻车的十条：

1. **产物必须在任务文件夹**：默认 `local-tests/<slug>/`，禁止在 skill 根目录生成 `social-card-*` / `livephoto-*` / `wechat-*` / `output/`。
2. **不许从零写 HTML**：必须从 `assets/template-*.html` 拷种子，替换 `<!-- POSTERS_HERE -->` 区域。
3. **不许混用三套类系统**：Editorial 用 serif + ledger/marginalia，Swiss 用 Inter + card-fill/matrix，Warm Gold 用混排 + gold-rule/plate，跨用会静默塌版。
4. **三级字号对比是纪律**：Swiss 大标题"越大越细"，禁止 80-120px 配 weight 700-900；禁止在 display 标题上写 inline `font-size` + `font-weight`。
5. **3:4 卡必须吃满画布**：内容覆盖 ≥75% 画布高度，>15% 的纯空白带需要留白理由，禁止用空 `<div style="flex:1">` 上下夹击。
6. **标题不许贴下一块内容**：主标题下方至少留 28px，局部标题至少 16px（校验器 R9）。
7. **文字压图先选图**：满铺图必须先过 quiet-zone 与 light 测试，先不加遮罩构图，只在其后加局部、取自图片色调的 tint；主体映射必须写进 HTML 注释。
8. **每张图都要 inline 写 `object-position`**：模板默认值只是 fallback，不是推荐值。
9. **不许编数据**：版本号、报价、百分比一律真实。
10. **画面文案不许出现制作术语**：`3s`、`5s`、`Live Photo`、`三连拼图`、`信息量`、`长视频处理`、`倍速` 等只能出现在计划、文件名、QA 与交付说明里。

---

## 八、规模数据

| 维度 | 数量 |
| --- | --- |
| 工作流步骤 | 7 步（另有 Step 4.5 拷贝种子模板） |
| 视觉系统 | 3 套（Editorial Magazine × E-ink / Swiss International / Warm Gold 中登） |
| 主题预设 | 16 套（Editorial 6 + Swiss 4 + Warm Gold 6） |
| 版式骨架 | 40 个（`M01-M16` + `S01-S12` + `G01-G12`） |
| 画板尺寸 | 3 种（3:4 / 21:9 / 1:1），Live Photo 复用 |
| 校验规则 | 11 条（R1-R11） |
| 子规范文档 | `references/` 下 16 份 |
| 截图舞台材质 | 13 张 WebP（约 2.6 MB 含 style-c） |
| Live Photo 时长 | 小红书 5s / 微信公众号文章内 3s |
| 小红书品类覆盖 | 11 个中 3 个端到端强势、7 个需用户供图、若干明确不接 |

---

## 九、相关文件

- [`SKILL.md`](../SKILL.md) — 主入口与全部硬规则
- [`README.md`](../README.md) / [`README.en.md`](../README.en.md) — 用户向说明
- [`HANDOFF.md`](../HANDOFF.md) — 事实版交接与版本历史（v0.3 → v0.16）
- [`PRODUCT.md`](../PRODUCT.md) — 产品决策与 roadmap
- [`AGENT.md`](../AGENT.md) — Agent 工作约定
