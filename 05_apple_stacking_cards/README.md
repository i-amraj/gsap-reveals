# 🃏 Style 2.1: Apple-Style Stacking Cards (`05_apple_stacking_cards`)

---

## 🎯 Overview

Welcome to the **Apple-Style Sticky Stacking Cards** module! This is the first module of **Category 2 (Card & Grid Visual Animation Styles)**.
This effect is highly popular on product landing pages (like Apple's iPad or Mac pages) where scrolling down causes content cards to pin to the screen and stack on top of each other, usually accompanied by subtle scaling and darkening of the cards underneath to create a sense of 3D depth.

### 📂 Included Sub-Modules & AI Prompts

| # | Effect Name | Subfolder Link | AI Prompt (`prompt.md`) | Visual Description |
|---|---|---|---|---|
| 1 | 🍎 **Classic Stacking Cards** | [`classic_stacking_cards/`](classic_stacking_cards/) | [`prompt.md`](classic_stacking_cards/prompt.md) | Standard Apple-style vertical scroll card stacking with scale down. |

---

## 🧠 Core Logic Overview

### 1. ScrollTrigger Pinning
The core of this effect relies on `gsap.ScrollTrigger`. Each card container needs to be pinned to the screen while the user continues to scroll.

### 2. The Math of Stacking
When a new card arrives and pins on top of the old one, the old one must visually recede into the background. We achieve this by calculating progress and animating:
- `scale`: Reducing the scale slightly (e.g., from `1` to `0.9`).
- `brightness` / `opacity`: Adding a dark overlay or adjusting filter brightness so the card beneath looks shadowed.

```javascript
cards.forEach((card, i) => {
  ScrollTrigger.create({
    trigger: card,
    start: "top top",
    pin: true,
    pinSpacing: false
  });
  
  // Animate the previous card to scale down when this card comes up
});
```
