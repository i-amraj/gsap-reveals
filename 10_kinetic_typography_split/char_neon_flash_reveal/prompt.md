# 🤖 AI Master Prompt: Char Neon Flash Reveal (`char_neon_flash_reveal`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Char Neon Flash Reveal effect (`char_neon_flash_reveal`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'chars' })` to split the text.
4. Set `.char { display: inline-block; }` in CSS.
5. Create a GSAP ScrollTrigger to trigger the animation when the text enters the viewport (no scrub).
6. Use `gsap.fromTo(text.chars, { color: "#38bdf8", textShadow: "0 0 15px #38bdf8, 0 0 30px #38bdf8", opacity: 0, y: 50 }, { color: "#ffffff", textShadow: "0 0 0px #38bdf8, 0 0 0px #38bdf8", opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.03, scrollTrigger: { trigger: ".split-text", start: "top 80%" } })`.
7. Characters spark into existence with a bright cyan neon glow, shifting to pure white text as they slide up.
8. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
