# 🤖 AI Master Prompt: Marquee Blend Mode (`marquee_blend_mode`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Marquee Blend Mode effect (`marquee_blend_mode`) using GSAP 3.

Requirements:
1. Setup a full-screen `.page-wrapper` that has a visually rich background image.
2. Inside, put a `.marquee-container` (`overflow: hidden; white-space: nowrap;`).
3. Inside that, create a `.marquee-track` containing two identical `.marquee-content` blocks.
4. Style `.marquee-content` with white text and apply `mix-blend-mode: difference;`. This causes the marquee text to perfectly invert the colors of the background image as it scrolls over it.
5. Use GSAP to animate the track infinitely: `gsap.to(".marquee-track", { xPercent: -50, ease: "none", duration: 20, repeat: -1 })`.
6. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
