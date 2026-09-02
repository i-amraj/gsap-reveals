# 🤖 AI Master Prompt: Marquee Hover Pause (`marquee_hover_pause`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Marquee Hover Pause effect (`marquee_hover_pause`) using GSAP 3.

Requirements:
1. Setup a `.marquee-container` that is `overflow: hidden; white-space: nowrap; cursor: pointer;` in CSS.
2. Inside, create a `.marquee-track` with `display: flex; width: max-content;`.
3. Inside the track, place two identical `.marquee-content` elements.
4. Use GSAP to animate the track infinitely: `let tween = gsap.to(".marquee-track", { xPercent: -50, ease: "none", duration: 15, repeat: -1 })`.
5. Add event listeners to `.marquee-container`. On `mouseenter`, use `gsap.to(tween, { timeScale: 0, duration: 0.5, ease: "power2.out", overwrite: true })` to smoothly decelerate the marquee to a stop.
6. On `mouseleave`, use `gsap.to(tween, { timeScale: 1, duration: 0.5, ease: "power2.in", overwrite: true })` to smoothly accelerate it back to full speed.
7. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
