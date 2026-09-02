# 🤖 AI Master Prompt: Vertical Infinite Marquee (`vertical_infinite_marquee`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Vertical Infinite Marquee effect (`vertical_infinite_marquee`) using GSAP 3.

Requirements:
1. Setup a `.marquee-container` that has a set height (e.g. `100vh`) and `overflow: hidden;` in CSS.
2. Inside, create a `.marquee-track` with `display: flex; flex-direction: column; height: max-content;`.
3. Inside the track, place two identical `.marquee-content` elements containing a tall stack of text blocks.
4. Add `padding-bottom` to `.marquee-content` instead of padding-right.
5. Use GSAP to animate the track vertically: `gsap.to(".marquee-track", { yPercent: -50, ease: "none", duration: 15, repeat: -1 })`.
6. This applies the exact same `-50%` trick as horizontal marquees, but moving up the Y-axis to create an infinite vertical scrolling ribbon (like movie credits).
7. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
