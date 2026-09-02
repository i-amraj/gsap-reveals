# 🤖 AI Master Prompt: Split Screen Horizontal (`split_screen_horizontal`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Split Screen Horizontal effect (`split_screen_horizontal`) using GSAP 3 and ScrollTrigger's `containerAnimation`.

Requirements:
1. Setup a pinned `.split-section` containing a `.left` panel (50vw) and a `.right` panel (50vw, `overflow: hidden`).
2. The `.left` panel contains absolute positioned `.text-item` elements (stacked on top of each other).
3. The `.right` panel contains a wide `.track` of `.card` elements.
4. Animate the `.track` on the X-axis by `-(trackWidth - 50vw)` and link it to the main pinning ScrollTrigger (`trackTween`).
5. Loop through each `.card`. Create a ScrollTrigger linked via `containerAnimation: trackTween`.
6. When the card reaches the center of the `.right` panel, use `onEnter` to animate in its corresponding `.text-item` in the `.left` panel (e.g., `gsap.to(text, { opacity: 1, y: 0 })`), and hide the others.
7. Provide complete HTML5, CSS3, and JS files. Ensure GSAP and ScrollTrigger CDNs are included.
```
