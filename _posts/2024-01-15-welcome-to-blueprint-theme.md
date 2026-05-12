---
layout: post
title: "Welcome to Blueprint Theme — Technical Jekyll"
date: 2024-01-15
tags: [design, documentation, getting-started]
description: "A technical drawing–inspired Jekyll theme with engineering grid, fold marks, annotation callouts, and a revision block footer."
---

Welcome to **Blueprint Theme** — a Jekyll site that looks like it was designed by an engineer on a Monday morning.

## The Design Language

Blueprint's aesthetic is lifted directly from ISO technical drawings:

- The **grid background** is a real dual-scale engineering grid — fine lines every 20px, major lines every 100px
- Every card has **fold marks** in two corners — the tiny angular brackets used to mark folding lines on A3 drawings
- **Orange annotations** are the "red pencil" callouts used by draftspeople to mark revisions
- The footer is a **revision block** — the title/author/date table found in the bottom-right corner of every engineering drawing
- Titles use **Share Tech Mono** — a monospaced font that mimics early pen plotter output

## Quick Configuration

```yaml
blueprint:
  grid: "fine"           # fine | coarse | none
  fold_marks: true       # corner tick marks on cards
  revision_block: true   # technical drawing footer
  line_weight: "normal"  # light | normal | heavy
```

## Writing Documentation

Blueprint works great for technical writing. Use blockquotes as callout notes:

```markdown
> This becomes a NOTE: callout annotation.
```

Use code blocks with language identifiers for syntax highlighting:

````markdown
```javascript
const result = compute(input);
```
````

## Tag System

Add tags in your post front matter:

```yaml
tags: [javascript, architecture, tutorial]
```

Tags are filterable on the `/tags/` page and shown as outlined chips on every card.
