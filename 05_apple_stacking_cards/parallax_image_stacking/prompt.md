# 🤖 AI Master Prompt: Parallax Image Stacking (`parallax_image_stacking`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Parallax Image Stacking Cards effect (`parallax_image_stacking`) using GSAP 3 and ScrollTrigger.

Requirements:
1. Create a vertical scrolling container with 4-5 full-width cards.
2. Each card is pinned when it reaches the top of the viewport.
3. Each card contains a background image element that is larger than the card itself (e.g. `height: 130%`).
4. While the card is pinned, use GSAP ScrollTrigger with `scrub: true` to animate the background image's `yPercent` (e.g., from `0` to `-20`), creating an intense parallax effect *inside* the pinned card.
5. As the next card scrolls up, the current pinned card scales down and darkens.
6. Provide complete HTML5, CSS3, and JS files.
```
