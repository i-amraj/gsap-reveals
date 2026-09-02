# 🤖 AI Master Prompt: Fade Blur Edges (`fade_blur_edges`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Fade Blur Edges effect (`fade_blur_edges`) using GSAP 3 and ScrollTrigger's `containerAnimation`.

Requirements:
1. Setup a pinned horizontal scroll section with a translating `.track` (saved as `trackTween`).
2. Inside the track, place `.card` elements. Initially set them to `opacity: 0.2` and `filter: blur(10px)` via CSS.
3. Loop through the `.card` elements and apply a ScrollTrigger using `containerAnimation: trackTween`.
4. As each card moves toward the center of the viewport (e.g., `start: "center 85%"` to `end: "center center"`), animate its `opacity` to `1` and `filter` to `blur(0px)`.
5. Set `yoyo: true` and `repeat: 1` so that as the card passes the center and exits to the left, it smoothly blurs and fades out again.
6. Provide complete HTML5, CSS3, and JS files. Ensure GSAP and ScrollTrigger CDNs are included.
```
