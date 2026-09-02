# 🤖 AI Master Prompt: Perspective 3D Marquee (`perspective_3d_marquee`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Perspective 3D Marquee effect (`perspective_3d_marquee`) using GSAP 3.

Requirements:
1. Setup a `.marquee-container` that is `overflow: hidden; white-space: nowrap;` in CSS. Wrap it in a `.marquee-wrapper` or `.marquee-section` with `perspective: 1000px;`.
2. Apply `transform: rotateX(45deg) rotateZ(-5deg); transform-style: preserve-3d;` to the `.marquee-container` to tile it back in 3D space.
3. Inside, create a `.marquee-track` with `display: flex; width: max-content;`.
4. Inside the track, place two identical `.marquee-content` elements containing the exact same long string of text.
5. Use GSAP to animate the track infinitely: `gsap.to(".marquee-track", { xPercent: -50, ease: "none", duration: 15, repeat: -1 })`.
6. This causes the text to loop infinitely along a 3D plane, receding into the background.
7. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
