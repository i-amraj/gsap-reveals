# 🤖 AI Master Prompt: Vertical Marquee Columns (`vertical_marquee_columns`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Vertical Marquee Columns effect (`vertical_marquee_columns`) using GSAP 3.

Requirements:
1. Setup a full-screen `.marquee-container` that is `display: flex; justify-content: space-between; overflow: hidden; height: 100vh;` in CSS.
2. Inside, create 5 vertical columns. Each column is a `.marquee-track` with `display: flex; flex-direction: column;`.
3. Give them alternating classes: `.odd` and `.even`.
4. Inside each track, place two identical `.marquee-content` text blocks (stacked vertically with bottom padding).
5. Use GSAP to animate the `.odd` tracks moving UP infinitely: `gsap.to(".marquee-track.odd", { yPercent: -50, ease: "none", duration: 15, repeat: -1 })`.
6. Use GSAP to animate the `.even` tracks moving DOWN infinitely seamlessly: `gsap.fromTo(".marquee-track.even", { yPercent: -50 }, { yPercent: 0, ease: "none", duration: 15, repeat: -1 })`.
7. This creates a mesmerizing background pattern of opposing data streams.
8. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
