# Blueprint Theme — Technical Drawing Jekyll Theme

[![License: csswitch Commercial](https://img.shields.io/badge/license-csswitch%20commercial-blue.svg)](./LICENSE)
[![Buy on Gumroad](https://img.shields.io/badge/Buy-%2449-brightgreen.svg)](https://csswitch.gumroad.com/l/csswitch-blueprint)
[![Live Demo](https://img.shields.io/badge/demo-live-orange.svg)](https://csswitch.github.io/jekyll-blueprint-theme/)

> **⚠️ License notice:** This theme is source-available but **not free to use**.  
> Viewing and learning from the code is welcome. Deploying it on any live site requires a [paid license](https://csswitch.gumroad.com/l/csswitch-blueprint).  
> See [LICENSE](./LICENSE) for full terms.

[![MIT License](https://img.shields.io/badge/license-MIT-4fc3f7.svg)](LICENSE)
[![Jekyll](https://img.shields.io/badge/jekyll-4.3-4fc3f7.svg)](https://jekyllrb.com)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-compatible-4fc3f7.svg)](https://pages.github.com)

> A technical drawing–inspired Jekyll theme with engineering grid backgrounds, fold marks, annotation callouts, TOC scrollspy, and a revision block footer.

**[Live Demo →](https://csswitch.github.io/jekyll-blueprint-theme)**

---

## ✨ Features

- 📐 **Engineering grid** — dual-scale ISO technical drawing grid (CSS only, zero images)
- 🔧 **Fold marks** — every card has angular corner tick marks from engineering drawings
- 📋 **Revision block footer** — title/author/date table like a real technical drawing
- 📍 **TOC scrollspy** — active heading tracking on posts
- 🖊️ **Annotation callouts** — orange "red pencil" style `NOTE:` blockquotes
- 🏷️ **Tag system** — outlined chip tags + per-tag archive + tag cloud
- 📱 **Fully responsive** — spec card grid (1–3 cols)
- ⚡ **Zero dependencies** — vanilla JS only
- 🐙 **GitHub Pages compatible**

## 🚀 Quick Start

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_BLOG.git
cd YOUR_BLOG
bundle install
bundle exec jekyll serve --livereload
```

## ⚙️ Configuration

```yaml
blueprint:
  grid: "fine"           # fine | coarse | none
  fold_marks: true       # L-shaped corner marks on cards
  revision_block: true   # technical drawing footer block
  line_weight: "normal"  # light | normal | heavy
```

## 📁 Structure

```
jekyll-blueprint-theme/
├── _config.yml
├── _layouts/
│   ├── default.html   ← grid + nav + revision-block footer
│   ├── home.html      ← featured spec card + grid
│   ├── post.html      ← TOC scrollspy + post body
│   └── page.html
├── _sass/
│   ├── _variables.scss
│   ├── _base.scss
│   ├── _layout.scss   ← grid, fold marks, nav, footer
│   └── _components.scss
├── assets/
│   ├── css/main.scss
│   └── js/blueprint.js
└── _posts/
```

## 📄 License

MIT © [csswitch](https://github.com/csswitch)

---

Made with 💙 by [csswitch](https://github.com/csswitch) — distinctive Jekyll themes for developers.
