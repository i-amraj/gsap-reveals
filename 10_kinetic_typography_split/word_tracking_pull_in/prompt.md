# 🤖 AI Master Prompt: Word Tracking Pull In (`word_tracking_pull_in`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Word Tracking Pull In effect (`word_tracking_pull_in`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'words' })` to split the text.
4. Create a GSAP ScrollTrigger to trigger the animation when the text enters the viewport (no scrub).
5. Use `gsap.from(text.words, { letterSpacing: "20px", filter: "blur(5px)", opacity: 0, duration: 1.2, ease: "power3.out", stagger: 0.1, scrollTrigger: { trigger: ".split-text", start: "top 80%" } })`.
6. This animates the CSS `letter-spacing` property on the word wrappers, causing the characters inside each word to be pulled together magnet-style as the word fades in.
7. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
