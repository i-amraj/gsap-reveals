# 🤖 AI Master Prompt: 3D Line Tilt Reveal (`3d_line_tilt_reveal`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a 3D Line Tilt Reveal effect (`3d_line_tilt_reveal`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'lines' })` to split the text.
4. Set `.split-text { perspective: 1000px; }` and `.line { transform-origin: top center; }` in CSS.
5. Create a GSAP ScrollTrigger (`start: "top 80%"`, `end: "bottom 30%"`, `scrub: true`).
6. Use `gsap.from(text.lines, { rotateX: -90, z: -200, opacity: 0, stagger: 0.1, scrollTrigger: { scrub: true } })`.
7. This gives the illusion of text lines swinging down like a drawbridge into focus.
8. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
