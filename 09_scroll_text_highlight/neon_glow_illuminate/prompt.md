# 🤖 AI Master Prompt: Neon Glow Illuminate (`neon_glow_illuminate`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Neon Glow Illuminate effect (`neon_glow_illuminate`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'words' })` to split the text.
4. Set the initial CSS color of `.word` elements to a dark slate (`#334155`).
5. Create a GSAP ScrollTrigger (`start: "top 80%"`, `end: "bottom 30%"`, `scrub: true`).
6. Use `gsap.to(text.words, { color: "#fff", textShadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 40px #38bdf8", stagger: 0.1, scrollTrigger: { scrub: true } })`.
7. This physically "turns on" the words like neon lights as the user scrolls.
8. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
