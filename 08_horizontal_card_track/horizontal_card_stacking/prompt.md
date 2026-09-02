# 🤖 AI Master Prompt: Horizontal Card Stacking (`horizontal_card_stacking`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Horizontal Card Stacking effect (`horizontal_card_stacking`) using GSAP 3 and ScrollTrigger.

Requirements:
1. Setup a pinned vertical scroll section (`height: 100vh`, `overflow: hidden`).
2. Inside, use `position: absolute` for a deck of `.card` elements, all overlapping exactly in the center of the screen, but offset initially to the right off-screen (e.g., `transform: translateX(100vw)`).
3. Use a GSAP Timeline linked to ScrollTrigger with `scrub: true`.
4. Stagger the animation of the cards so they fly in from the right one by one, stopping in the center.
5. As the next card arrives, the previous cards should slightly scale down (`scale: 0.9`) and shift slightly to the left (`x: -20`) to create a stacked "deck" effect.
6. Provide complete HTML5, CSS3, and JS files. Ensure GSAP and ScrollTrigger CDNs are included.
```
