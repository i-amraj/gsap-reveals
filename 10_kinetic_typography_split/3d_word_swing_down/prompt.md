# 🤖 AI Master Prompt: 3D Word Swing Down (`3d_word_swing_down`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a 3D Word Swing Down effect (`3d_word_swing_down`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'lines, words' })` to split the text.
4. Set `.split-text { perspective: 1000px; }` and `.word { display: inline-block; transform-origin: top center; transform-style: preserve-3d; }` in CSS to hinge the words from their top edge.
5. Create a GSAP ScrollTrigger to trigger the animation when the text enters the viewport (no scrub).
6. Use `gsap.from(text.words, { rotateX: -90, opacity: 0, duration: 1.2, ease: "bounce.out", stagger: 0.05, scrollTrigger: { trigger: ".split-text", start: "top 80%" } })`.
7. Words start rotated upwards and invisible, swinging heavily down into place and bouncing on the hinge.
8. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
