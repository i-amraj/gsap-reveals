# 🤖 AI Master Prompt: Text Reveal on Scroll (`text_reveal_on_scroll`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Text Reveal on Scroll effect (`text_reveal_on_scroll`) using GSAP 3 and ScrollTrigger's `containerAnimation`.

Requirements:
1. Setup a pinned horizontal scroll `.track` translating left. Save as `trackTween`.
2. Inside each `.card`, place a title wrapped inside a mask container (`overflow: hidden`). The inner text (`.reveal-text`) is initially set to `transform: translateY(100%)`.
3. Loop through each `.card`. Create a ScrollTrigger linked via `containerAnimation: trackTween`.
4. As the card approaches the center of the viewport (`start: "left 70%"`), animate `.reveal-text` to `y: 0` using `gsap.to()`.
5. Set `scrub: 1` so the text reveal is perfectly synced to the user's scroll position, wiping up smoothly.
6. Provide complete HTML5, CSS3, and JS files. Ensure GSAP and ScrollTrigger CDNs are included.
```
