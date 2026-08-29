# 🤖 AI Master Prompt: Classic Stacking Cards (`classic_stacking_cards`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create an Apple-Style Classic Stacking Cards effect (`classic_stacking_cards`) using GSAP 3 and ScrollTrigger.

Requirements:
1. Create a vertical scrolling container with 4-5 large content cards.
2. Each card should take up roughly `100vh` or slightly less, centered on the screen.
3. As the user scrolls down, when a card reaches the top of the viewport (`top top`), it should pin using `ScrollTrigger` with `pinSpacing: false`.
4. As the *next* card scrolls up and covers the current pinned card, the current pinned card should animate:
   - `scale` down to `0.9` or `0.95`.
   - `brightness` down (or an overlay opacity goes up) to simulate a shadow being cast by the card above it.
5. Provide complete HTML5, CSS3, and JS files. Ensure the design feels premium (rounded corners, smooth gradients/images).
```
