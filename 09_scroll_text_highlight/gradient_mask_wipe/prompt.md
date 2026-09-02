# 🤖 AI Master Prompt: Gradient Mask Wipe (`gradient_mask_wipe`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Gradient Mask Wipe effect (`gradient_mask_wipe`) using GSAP 3 and ScrollTrigger (No SplitType needed!).

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. In CSS, style `.split-text` with a linear gradient background: `background: linear-gradient(90deg, #fff 50%, #334155 50%);`.
3. Set `background-size: 200% 100%;`, `background-position: 100% 0;`.
4. Apply `-webkit-background-clip: text; color: transparent;`. This creates a text mask where the right side is grey, and the left side is white (hidden initially).
5. Create a GSAP ScrollTrigger (`start: "top 80%"`, `end: "bottom 20%"`, `scrub: true`).
6. Use `gsap.to('.split-text', { backgroundPosition: "0% 0", ease: "none", scrollTrigger: { scrub: true } })`.
7. This smoothly drags the gradient across the text as you scroll, creating a flawless Apple-style wipe without splitting any DOM elements.
8. Provide complete HTML5, CSS3, and JS files. Ensure GSAP and ScrollTrigger CDNs are included.
```
