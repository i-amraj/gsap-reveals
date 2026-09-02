# 🤖 AI Master Prompt: 3D Char Swing Door (`3d_char_swing_door`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a 3D Char Swing Door effect (`3d_char_swing_door`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'words, chars' })` to split the text.
4. Set `.word { perspective: 1000px; }` and `.char { transform-origin: left center; }` in CSS to establish a hinge at the left edge of each character.
5. Create a GSAP ScrollTrigger to trigger the animation when the text enters the viewport (no scrub).
6. Use `gsap.from(text.chars, { rotateY: 90, opacity: 0, duration: 0.8, stagger: 0.03, ease: "power3.out", scrollTrigger: { trigger: ".split-text", start: "top 80%" } })`.
7. This gives the illusion of characters swinging open like physical doors.
8. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
