# 🤖 AI Master Prompt: Font Weight Shift (`font_weight_shift`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Font Weight Shift effect (`font_weight_shift`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Load a variable font like Inter from Google Fonts (`<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">`).
2. Setup a large paragraph of text `.split-text` centered on the screen.
3. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
4. Use `new SplitType('.split-text', { types: 'words' })` to split the text.
5. Set `.split-text { font-weight: 200; }` in CSS.
6. Create a GSAP ScrollTrigger (`start: "top 80%"`, `end: "bottom 30%"`, `scrub: true`).
7. Use `gsap.to(text.words, { fontWeight: 900, stagger: 0.1, scrollTrigger: { scrub: true } })`.
8. Because it's a variable font, the `fontWeight` natively tweens through all intermediate weights seamlessly!
9. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
