<!-- markdownlint-disable-next-line -->
<div align="center">

  <!-- markdownlint-disable-next-line -->
  # CalCobalt 的个人博客

  基于 Jekyll Theme Chirpy，使用 MD3 HCT 色彩系统重构的个人站点。

  [![GitHub license](https://img.shields.io/github/license/CalCobalt/pagefull?color=goldenrod)][license]&nbsp;
  [![Website](https://img.shields.io/website?url=https%3A%2F%2Fcalcobalt.icu)][site]

  [**访问站点** →][site]

</div>

## 关于本仓库

本仓库是 [CalCobalt][github] 的个人博客站点，托管于 [calcobalt.icu][site]。

原项目 fork 自 [jekyll-theme-chirpy][chirpy]，已进行大幅重构，引入 **Material Design 3（MD3）HCT 色彩系统**，整体配色与样式体系已与原主题有较大差异。

## 重构亮点

### MD3 HCT 色彩系统

- 主色提取自站点头像（`files/avatar/donkomon.jpg`），源色为 `#C86496`
- 使用 HCT（Hue-Chroma-Tone）色彩空间生成完整的 MD3 配色方案
- 支持亮色 / 暗色双主题，色彩 token 通过 CSS 变量注入
- 色彩数据以 `assets/md3-colors.json` 和 `_sass/themes/_md3-colors.scss` 形式存储，方便维护

### 样式重构

- 亮色与暗色主题（`_sass/themes/_light.scss` / `_dark.scss`）全面切换为 MD3 色彩 token
- 新增 `_sass/abstracts/_md3-utilities.scss`，提供 MD3 风格的响应式栅格、Flexbox、间距与文字工具类
- 字体切换为 Roboto + Noto Sans SC + Microsoft Yahei，适配中文排版

## 功能特性

- 深色 / 亮色主题（跟随系统或手动切换）
- MD3 HCT 动态配色
- 中文本地化界面（zh-CN）
- 文章目录（TOC）、置顶、分类、标签
- 代码语法高亮
- 数学公式渲染（KaTeX）
- Mermaid 图表
- [Giscus][giscus] 评论系统
- 内置全文搜索
- Atom 订阅
- PWA 离线支持
- SEO 优化

## 致谢

本站基于 [jekyll-theme-chirpy][chirpy] 构建，感谢原作者 [Cotes Chung][cotes] 的出色工作。

## 许可证

本项目采用 [MIT License][license] 发布。

[site]: https://calcobalt.icu
[github]: https://github.com/CalCobalt
[license]: https://github.com/CalCobalt/pagefull/blob/main/LICENSE
[chirpy]: https://github.com/cotes2020/jekyll-theme-chirpy
[cotes]: https://github.com/cotes2020
[giscus]: https://giscus.app
