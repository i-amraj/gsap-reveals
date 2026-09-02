# 🤖 AI Master Prompt: Horizontal Card Flip (`horizontal_card_flip`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Horizontal Card Flip effect (`horizontal_card_flip`) using GSAP 3 and ScrollTrigger's `containerAnimation`.

Requirements:
1. Setup a pinned horizontal scroll `.track` translating left. Save as `trackTween`. Apply `perspective: 1200px` to the container.
2. Inside `.track`, create flip cards containing `.card-inner` (which preserves 3D), `.card-front`, and `.card-back`. Use `backface-visibility: hidden`.
3. Set the initial state of `.card-inner` to `transform: rotateY(180deg)` (showing the back of the card).
4. Loop through each `.card` and create a ScrollTrigger linked via `containerAnimation: trackTween`.
5. Animate `.card-inner` to `rotateY(0deg)` when the card reaches the center of the viewport (`start: "center 70%"` to `end: "center center"`).
6. Set `yoyo: true` and `repeat: 1` so it flips back over as it leaves the center.
7. Provide complete HTML5, CSS3, and JS files. Ensure GSAP and ScrollTrigger CDNs are included.
```
