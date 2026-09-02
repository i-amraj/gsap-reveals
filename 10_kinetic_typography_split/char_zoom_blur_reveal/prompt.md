# 🤖 AI Master Prompt: Char Zoom Blur Reveal (`char_zoom_blur_reveal`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Char Zoom Blur Reveal effect (`char_zoom_blur_reveal`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'words, chars' })` to split the text.
4. Set `.word { perspective: 1000px; }` and `.char { display: inline-block; }` in CSS.
5. Create a GSAP ScrollTrigger to trigger the animation when the text enters the viewport (no scrub).
6. Use `gsap.from(text.chars, { z: -500, scale: 0.5, filter: "blur(10px)", opacity: 0, duration: 1.2, ease: "power3.out", stagger: 0.03, scrollTrigger: { trigger: ".split-text", start: "top 80%" } })`.
7. This gives a deep, volumetric effect where characters zoom forward into focus from the background.
8. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
