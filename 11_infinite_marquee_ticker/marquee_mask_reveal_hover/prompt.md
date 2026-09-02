# 🤖 AI Master Prompt: Marquee Mask Reveal Hover (`marquee_mask_reveal_hover`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Marquee Mask Reveal Hover effect (`marquee_mask_reveal_hover`) using GSAP 3.

Requirements:
1. Setup a `.page-wrapper` that fills the screen. Inside, put a `.base-layer` with standard centered text (e.g., "HOVER TO REVEAL").
2. Place a `.reveal-layer` strictly stacked over the `.base-layer`. This layer contains the infinite marquee `.marquee-container`.
3. In CSS, style `.reveal-layer` with a dark background and bright marquee text. Apply a CSS clip-path to it: `clip-path: circle(200px at var(--x, 50%) var(--y, 50%));`.
4. Use GSAP to animate the marquee infinitely: `gsap.to(".marquee-track", { xPercent: -50, ease: "none", duration: 15, repeat: -1 })`.
5. Add a `mousemove` event listener to the window. In the callback, update the `--x` and `--y` CSS variables on `.reveal-layer` to match `e.clientX` and `e.clientY`.
6. This creates a magic flashlight effect where the user's cursor physically cuts through the page to reveal a dynamic, looping marquee track underneath.
7. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
