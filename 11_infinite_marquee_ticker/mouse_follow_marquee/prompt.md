# 🤖 AI Master Prompt: Mouse Follow Marquee (`mouse_follow_marquee`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Mouse Follow Marquee effect (`mouse_follow_marquee`) using GSAP 3.

Requirements:
1. Setup a `.marquee-container` that is `overflow: hidden; white-space: nowrap;` in CSS.
2. Inside, create a `.marquee-track` with `display: flex; width: max-content;`.
3. Inside the track, place two identical `.marquee-content` elements.
4. Use GSAP to animate the track infinitely: `let tween = gsap.to(".marquee-track", { xPercent: -50, ease: "none", duration: 15, repeat: -1 })`.
5. Add a `mousemove` event listener to the `window`.
6. Calculate the mouse's X position as a ratio from 0 to 1 (`e.clientX / window.innerWidth`).
7. Map this ratio to a `timeScale` multiplier from `-3` to `3` (e.g., `(ratio - 0.5) * 6`). Add a small deadzone around the center where `speed = 0` so the user can pause it.
8. Use `gsap.to(tween, { timeScale: speed, duration: 0.5, overwrite: true })` to smoothly animate the marquee's speed and direction based on the mouse.
9. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
