# 🤖 AI Master Prompt: Scale Up Reveal Stacking (`scale_up_reveal_stacking`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Scale Up Reveal Stacking Cards effect (`scale_up_reveal_stacking`) using GSAP 3 and ScrollTrigger.

Requirements:
1. Create a vertical scrolling container with 4 cards.
2. Ensure the cards are positioned absolutely on top of each other inside a single pinned container (not sliding up from the bottom natively).
3. The first card is visible. The subsequent cards start at `scale: 0` and `opacity: 0` in the center of the screen.
4. As the user scrolls, use `gsap.to` with `scrollTrigger` scrub to animate the next card scaling up to `1` and opacity to `1`, effectively growing from the center to cover the previous card.
5. Provide complete HTML5, CSS3, and JS files.
```
