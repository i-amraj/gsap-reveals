# 🤖 AI Master Prompt: Word Slide From Left (`word_slide_from_left`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Word Slide From Left effect (`word_slide_from_left`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'words' })` to split the text.
4. Set `.word { display: inline-block; }` in CSS to allow transforms.
5. Create a GSAP ScrollTrigger (`start: "top 80%"`, `end: "bottom 30%"`, `scrub: true`).
6. Use `gsap.from(text.words, { x: -50, opacity: 0, stagger: 0.1, scrollTrigger: { scrub: true } })`. This makes the words smoothly drift in from the left as they fade in on scroll.
7. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
