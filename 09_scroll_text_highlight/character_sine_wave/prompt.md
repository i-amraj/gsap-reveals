# 🤖 AI Master Prompt: Character Sine Wave (`character_sine_wave`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Character Sine Wave effect (`character_sine_wave`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'chars' })` to split the text.
4. Create a GSAP ScrollTrigger (`start: "top 80%"`, `end: "bottom 20%"`, `scrub: true`).
5. Use `gsap.to(text.chars, { y: -40, color: "#38bdf8", stagger: { amount: 1, yoyo: true, repeat: 1 }, scrollTrigger: { scrub: true } })`.
6. This creates a Mexican wave effect! The characters lift up and return back to normal sequentially as you scroll.
7. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
