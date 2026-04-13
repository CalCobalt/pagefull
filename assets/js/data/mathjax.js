---
layout: compress
# WARNING: Don't use '//' to comment out code, use '{% comment %}' and '{% endcomment %}' instead.
---

{%- comment -%} 中文注释：该文件为站点生成前端配置脚本，请保持模板语法与输出结构一致。 {%- endcomment -%}


{%- comment -%}
  See: <https://docs.mathjax.org/en/latest/options/input/tex.html#tex-options>
{%- endcomment -%}

MathJax = {
  tex: {
    {%- comment -%} start/end delimiter pairs for in-line math {%- endcomment -%}
    inlineMath: [
      ['$', '$'],
      ['\\(', '\\)']
    ],
    {%- comment -%} start/end delimiter pairs for display math {%- endcomment -%}
    displayMath: [
      ['$$', '$$'],
      ['\\[', '\\]']
    ],
    {%- comment -%} equation numbering {%- endcomment -%}
    tags: 'ams'
  }
};
