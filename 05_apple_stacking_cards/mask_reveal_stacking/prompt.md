# 🤖 AI Master Prompt: Mask Reveal Stacking (`mask_reveal_stacking`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Mask Reveal Stacking Cards effect (`mask_reveal_stacking`) using GSAP 3 and ScrollTrigger.

Requirements:
1. Create a vertical scrolling container with 4 cards.
2. The cards do not slide up from the bottom! They are already positioned directly on top of each other using `position: absolute` inside a single pinned container.
3. The top cards are hidden initially using `clip-path: circle(0% at 50% 50%)`.
4. As the user scrolls, use `gsap.to` with `scrollTrigger` scrub to animate the `clip-path` of the next card to `circle(150% at 50% 50%)`, revealing it in an expanding circular mask over the previous card.
5. Provide complete HTML5, CSS3, and JS files.
```
