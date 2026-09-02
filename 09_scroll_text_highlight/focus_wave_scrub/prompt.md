# 🤖 AI Master Prompt: Focus Wave Scrub (`focus_wave_scrub`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Focus Wave Scrub effect (`focus_wave_scrub`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'words' })` to split the text.
4. Set `.word { filter: blur(4px); opacity: 0.2; display: inline-block; }` initially in CSS.
5. Create a GSAP ScrollTrigger (`start: "top 80%"`, `end: "bottom 20%"`, `scrub: true`).
6. Use `gsap.to(text.words, { filter: "blur(0px)", opacity: 1, scale: 1.1, stagger: { amount: 1, yoyo: true, repeat: 1 }, scrollTrigger: { scrub: true } })`.
7. This creates a traveling wave of focus. Words light up and scale up as they are hit by the wave, and then blur out again as the wave passes them.
8. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
