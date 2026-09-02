# 🤖 AI Master Prompt: Character Rotation Flip (`character_rotation_flip`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Character Rotation Flip effect (`character_rotation_flip`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'words, chars' })` to split the text.
4. Set `.word { perspective: 1000px; }` in CSS to establish a 3D context for the characters.
5. Create a GSAP ScrollTrigger (`start: "top 80%"`, `end: "bottom 30%"`, `scrub: true`).
6. Use `gsap.from(text.chars, { rotateX: -90, opacity: 0, stagger: 0.05, scrollTrigger: { scrub: true } })`. This causes characters to flip down like a mechanical departure board as you scroll.
7. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
