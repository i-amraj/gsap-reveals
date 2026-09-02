# 🤖 AI Master Prompt: Basic Horizontal Marquee (`basic_horizontal_marquee`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Basic Horizontal Marquee effect (`basic_horizontal_marquee`) using GSAP 3.

Requirements:
1. Setup a `.marquee-container` that is `overflow: hidden; white-space: nowrap;` in CSS.
2. Inside, create a `.marquee-track` with `display: flex; width: max-content;`.
3. Inside the track, place two identical `.marquee-content` elements containing the exact same long string of text. (e.g. `KINETIC TYPOGRAPHY • INFINITE LOOP • SEAMLESS ANIMATION •`).
4. Apply a large font size (e.g. `8rem`) and some `padding-right` to `.marquee-content`.
5. Use GSAP to animate the track: `gsap.to(".marquee-track", { xPercent: -50, ease: "none", duration: 15, repeat: -1 })`.
6. Because the track contains two identical halves, moving it by exactly -50% visually matches the starting state, creating a seamless infinite loop.
7. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
