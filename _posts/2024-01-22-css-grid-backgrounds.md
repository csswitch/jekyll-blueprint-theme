---
layout: post
title: "CSS Grid Backgrounds — No Images Required"
date: 2024-01-22
tags: [css, design, tutorial, grid]
description: "How to build ISO-standard technical drawing grids entirely in CSS using repeating-linear-gradient and background-size."
---

The Blueprint Theme grid background uses zero images — just nested `repeating-linear-gradient` layers. Here's exactly how it works.

## The Four-Layer Technique

A real engineering grid has two scales: fine (small squares) and major (large squares, every 5 fine squares). We replicate this with four gradient layers:

```css
.bp-grid {
  background-image:
    /* Fine horizontal lines */
    linear-gradient(rgba(26,74,138, 0.35) 1px, transparent 1px),
    /* Fine vertical lines */
    linear-gradient(90deg, rgba(26,74,138, 0.35) 1px, transparent 1px),
    /* Major horizontal lines (every 5 cells) */
    linear-gradient(rgba(26,74,138, 0.6) 1px, transparent 1px),
    /* Major vertical lines */
    linear-gradient(90deg, rgba(26,74,138, 0.6) 1px, transparent 1px);

  background-size:
    20px 20px,   /* fine grid */
    20px 20px,
    100px 100px, /* major grid = 5 × fine */
    100px 100px;
}
```

The major grid lines are 0.6 opacity vs 0.35 for fine — matching the thick/thin line convention in ISO 128.

## Why `linear-gradient` Instead of `repeating-linear-gradient`?

`linear-gradient` with `background-size` is actually more reliable for grids:

```css
/* This gives 1px line at top of each 20px tile: */
background-image: linear-gradient(#color 1px, transparent 1px);
background-size: 20px 20px;
```

vs

```css
/* repeating-linear-gradient is equivalent but less explicit: */
background-image: repeating-linear-gradient(
  0deg, #color 0px, #color 1px, transparent 1px, transparent 20px
);
```

Both work — the `background-size` approach is cleaner.

## Fold Marks with Pure CSS

Engineering drawings have small L-shaped marks at fold lines. We simulate these with pseudo-elements:

```css
.card {
  position: relative;

  /* Top-left fold mark */
  &::before {
    content: '';
    position: absolute;
    top: -1px; left: -1px;
    width: 12px; height: 12px;
    border-top: 2px solid #4fc3f7;
    border-left: 2px solid #4fc3f7;
  }

  /* Bottom-right fold mark */
  &::after {
    content: '';
    position: absolute;
    bottom: -1px; right: -1px;
    width: 12px; height: 12px;
    border-bottom: 2px solid #4fc3f7;
    border-right: 2px solid #4fc3f7;
  }
}
```

On hover, we change the border-color to the full accent — the fold marks "activate" and frame the card.

## The Annotation Color

Orange (`#ff9800`) is the "red pencil" color in technical drawing — used for handwritten revision notes, NOT for the printed content. We use it sparingly for section markers (`§`), callout headings (`NOTE:`), and heading anchor links — things that feel annotated rather than designed.

```css
.section-title::before {
  content: '§';
  color: #ff9800; /* annotation orange */
}
```

This creates a visual hierarchy where the orange elements feel like someone marked them up after the fact.
