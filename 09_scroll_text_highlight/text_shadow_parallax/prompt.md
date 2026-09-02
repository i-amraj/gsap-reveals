# 🤖 AI Master Prompt: Text Shadow Parallax (`text_shadow_parallax`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Text Shadow Parallax effect (`text_shadow_parallax`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'words' })` to split the text.
4. Set `.word { color: #fff; }` initially in CSS, with no text shadow.
5. Create a GSAP ScrollTrigger (`start: "top 80%"`, `end: "bottom 20%"`, `scrub: true`).
6. Use `gsap.fromTo(text.words, { textShadow: "0px -20px 0px rgba(0,0,0,0)" }, { textShadow: "0px 30px 15px rgba(0,0,0,0.8)", stagger: 0.1, scrollTrigger: { scrub: true } })`.
7. This gives the illusion that a light source is moving above the text as the user scrolls, casting a deep shadow downwards.
8. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
