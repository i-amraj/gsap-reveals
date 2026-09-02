# 🤖 AI Master Prompt: Character 3D Fall (`character_3d_fall`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Character 3D Fall effect (`character_3d_fall`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'words, chars' })` to split the text into both.
4. Set `.word { perspective: 1000px; transform-style: preserve-3d; }` in CSS.
5. Create a GSAP ScrollTrigger (`start: "top 80%"`, `end: "bottom 30%"`, `scrub: true`).
6. Use `gsap.from(text.chars, { y: -200, z: 200, rotateX: 90, opacity: 0, stagger: 0.05, scrollTrigger: { scrub: true } })`.
7. This gives the illusion of characters physically falling from above the screen and slotting into place on the Z-axis.
8. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
