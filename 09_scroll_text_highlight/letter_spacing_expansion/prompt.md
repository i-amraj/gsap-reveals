# 🤖 AI Master Prompt: Letter Spacing Expansion (`letter_spacing_expansion`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Letter Spacing Expansion effect (`letter_spacing_expansion`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'lines' })` to split the text into lines.
4. Set `.line { letter-spacing: -10px; opacity: 0; }` initially in CSS so the text is tightly squished and invisible.
5. Create a GSAP ScrollTrigger (`start: "top 80%"`, `end: "bottom 30%"`, `scrub: true`).
6. Use `gsap.to(text.lines, { letterSpacing: "0px", opacity: 1, stagger: 0.1, scrollTrigger: { scrub: true } })`.
7. This causes the lines of text to seamlessly decompress and expand horizontally as they fade in, line by line.
8. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
