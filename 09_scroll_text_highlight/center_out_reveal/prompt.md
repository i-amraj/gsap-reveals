# 🤖 AI Master Prompt: Center Out Reveal (`center_out_reveal`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Center Out Reveal effect (`center_out_reveal`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'words' })` to split the text.
4. Set `.word { display: inline-block; opacity: 0; }` initially in CSS.
5. Create a GSAP ScrollTrigger (`start: "top 80%"`, `end: "bottom 30%"`, `scrub: true`).
6. Use `gsap.to(text.words, { opacity: 1, scale: 1, stagger: { amount: 1, from: "center" }, scrollTrigger: { scrub: true } })`. By setting `from: "center"`, the text animation originates in the absolute middle of the paragraph and ripples outwards!
7. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
