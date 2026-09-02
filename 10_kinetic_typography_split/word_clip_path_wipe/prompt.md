# 🤖 AI Master Prompt: Word Clip Path Wipe (`word_clip_path_wipe`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Word Clip Path Wipe effect (`word_clip_path_wipe`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'words' })` to split the text.
4. Set `.word { display: inline-block; clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }` in CSS to establish a full clipping boundary.
5. Create a GSAP ScrollTrigger to trigger the animation when the text enters the viewport (no scrub).
6. Use `gsap.from(text.words, { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", opacity: 0, x: -20, duration: 0.8, ease: "power3.out", stagger: 0.05, scrollTrigger: { trigger: ".split-text", start: "top 80%" } })`.
7. This elegantly wipes each word in from left to right while slightly sliding it, without causing adjacent words to overlap each other.
8. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
