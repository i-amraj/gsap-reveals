# 🤖 AI Master Prompt: Char Random Decode Fade (`char_random_decode_fade`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Char Random Decode Fade effect (`char_random_decode_fade`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'chars' })` to split the text.
4. Set `.char { display: inline-block; }` in CSS.
5. Create a GSAP ScrollTrigger to trigger the animation when the text enters the viewport (no scrub).
6. Use `gsap.from(text.chars, { opacity: 0, duration: 1.5, ease: "power2.inOut", stagger: { amount: 1, from: "random" }, scrollTrigger: { trigger: ".split-text", start: "top 80%" } })`.
7. This removes any directional flow from the text, randomly fading characters into existence like a decoding terminal.
8. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
