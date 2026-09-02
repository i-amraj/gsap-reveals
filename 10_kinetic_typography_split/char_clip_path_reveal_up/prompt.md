# 🤖 AI Master Prompt: Char Clip Path Reveal Up (`char_clip_path_reveal_up`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Char Clip Path Reveal Up effect (`char_clip_path_reveal_up`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'chars' })` to split the text.
4. Set `.char { clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%); display: inline-block; }` in CSS to hide the text natively using a bottom-clamped polygon.
5. Create a GSAP ScrollTrigger to trigger the animation when the text enters the viewport (no scrub).
6. Use `gsap.to(text.chars, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 0.8, ease: "power3.out", stagger: 0.03, scrollTrigger: { trigger: ".split-text", start: "top 80%" } })`.
7. This physically "wipes" the characters upward into existence without moving them in layout space.
8. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
