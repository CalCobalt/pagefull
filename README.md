<!-- markdownlint-disable-next-line -->
<div align="center">

  <!-- markdownlint-disable-next-line -->
  # Pagefull

  CalCobalt 的个人博客 —— 基于 [Chirpy Jekyll Theme][chirpy-repo] 并定制了 **Material Design 3** 配色与组件。

  [![License](https://img.shields.io/github/license/CalCobalt/pagefull?color=goldenrod)][license]

</div>

## 快速上手

### 本地构建

```bash
# 安装 Ruby 依赖
bundle install

# 安装前端依赖（编译 SCSS/JS 用）
npm install

# 本地预览（默认 http://127.0.0.1:4000）
bundle exec jekyll serve --livereload
```

> 非生产环境（`jekyll serve`）会从 CDN 加载 Bootstrap 5.3.8 以便快速开发；
> `JEKYLL_ENV=production` 时才走本地打包的 `_sass/vendors/_bootstrap.scss`。

### 常用命令

```bash
npm run lint:scss       # 检查 SCSS 风格（stylelint）
npm run lint:fix:scss   # 自动修复
npm test                # 同 lint:scss
npm run build           # 构建 CSS + JS 产物
npm run colors          # 从头像提取 MD3 配色 → assets/colors.json
```

## 维护指南

### 架构总览

本项目在 Chirpy 主题之上做了一层 **MD3 定制**，源码都在 `_sass/` 下，以 `md3-` 前缀区分：

| 文件 | 作用 |
| --- | --- |
| `_sass/themes/_md3-colors.scss` | **唯一的配色来源**，定义全部 `--md3-*` CSS 变量（亮/暗两套） |
| `_sass/layout/_md3-layout.scss` | MD3 布局组件：按钮、卡片、抽屉、文本域、排版 |
| `_sass/pages/_md3-pages.scss` | 覆盖 Chirpy 现有类的 MD3 风格（`.post-preview`、`.pagination`、`.tag` 等） |
| `_sass/abstracts/_md3-utilities.scss` | 网格 / 间距 / 文字工具类 |
| `_sass/themes/_light.scss` / `_dark.scss` | 把 `--md3-*` 映射进 Chirpy 原有主题变量 |
| `assets/colors.json` | `npm run colors` 的参考输出（供比对，非运行时依赖） |
| `scripts/extract-md3-colors.mjs` | 用官方 HCT 从图片提取调色板的脚本 |

主题切换：`_javascript/modules/theme.js` 在 `<html>` 上写 `data-mode="light|dark"`，
`_md3-colors.scss` 按该属性（以及 `prefers-color-scheme`）切换变量。

### 配色如何再生（换头像/换主题色时）

```bash
# 1. 从新图片提取 HCT 调色板
node scripts/extract-md3-colors.mjs files/avatar/your-image.jpg assets/colors.json

# 2. 打开 assets/colors.json 查看 primary/secondary/tertiary 及其 container 角色

# 3. 把想要的角色值手抄进 _sass/themes/_md3-colors.scss 的 $md3-light-* / $md3-dark-*
```

要点：

- 生成值偏柔和，通常需要**手调**到符合品牌调性（当前是粉色 `#C86496` 系）。
- **不要直接**用生成的 `on-primary`/`on-secondary` 等 on-* 颜色对，先验对比度（见下）。
- `assets/colors.json` 只是参考快照，改 SCSS 后记得同步它（或删掉避免误导）。

### 对比度约束（重要）

亮色模式的主色 `#C86496` 上放白色只有 3.67:1，低于 MD3 的 **4.5:1**。
因此本主题亮色模式的 `on-primary/secondary/tertiary` 用深品红 `#3A0022`（实测 4.56–5.28:1）。
**任何新配色的 on-* 颜色都必须验证对比度**，可用：

```bash
node -e "
const {themeFromSourceColor,argbFromRgb,hexFromArgb}=require('@material/material-color-utilities');
// ...用 HCT 生成后自行核对对比度
"
```

### 已知约定

- 组件 hover/active 用 `color-mix(in srgb, var(--md3-primary) N%, transparent)` 生成状态层，
  **不要硬编码** `rgba(200,100,150,...)` 之类的源色字面量。
- 分割线用 `--md3-outline-variant`（暗色模式下可见），不要用 `rgba(0,0,0,...)`。
- `assets/js/dist/` 是构建产物，由 `npm run build` 重新生成；`_javascript/` 才是源码。
- `.gitignore` 已忽略 `build.log`、`*.sai2`、`*.psd` 等本地/源文件，不要提交它们。

### 常见坑

- **改了 `_javascript/` 必须跑 `npm run build`**，否则线上 `assets/js/dist/*.min.js` 不更新。
- `theme_mode` 在 `_config.yml` 中留空即可；一旦填了值，`theme.js` 会禁用切换按钮（`switchable=false`）。
- 非生产环境 Bootstrap 走 CDN（`head.html`），版本要和 `_sass/vendors/_bootstrap.scss` 保持一致（当前 5.3.8）。

## 文档

完整用法见 [Chirpy 官方 Wiki][wiki]。

## 致谢

本项目基于 [Jekyll][jekyllrb] + [Chirpy][chirpy-repo] 构建。

## License

[![License](https://img.shields.io/github/license/CalCobalt/pagefull?color=goldenrod)][license]

MIT License。

[chirpy-repo]: https://github.com/cotes2020/jekyll-theme-chirpy
[license]: https://github.com/CalCobalt/pagefull/blob/master/LICENSE
[wiki]: https://github.com/cotes2020/jekyll-theme-chirpy/wiki
[jekyllrb]: https://jekyllrb.com/
