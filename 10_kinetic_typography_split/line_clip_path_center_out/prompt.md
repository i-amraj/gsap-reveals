# 🤖 AI Master Prompt: Line Clip Path Center Out (`line_clip_path_center_out`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Line Clip Path Center Out effect (`line_clip_path_center_out`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'lines' })` to split the text.
4. Set `.line { clip-path: polygon(50% 0, 50% 0, 50% 100%, 50% 100%); }` in CSS so the text is entirely hidden in the center of the line.
5. Create a GSAP ScrollTrigger to trigger the animation when the text enters the viewport (no scrub).
6. Use `gsap.to(text.lines, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1.2, ease: "power3.inOut", stagger: 0.2, scrollTrigger: { trigger: ".split-text", start: "top 80%" } })`.
7. This reveals the lines from the center expanding outwards smoothly.
8. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
