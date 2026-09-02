# 🤖 AI Master Prompt: Parallax Image Track (`parallax_image_track`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Parallax Image Track effect (`parallax_image_track`) using GSAP 3 and ScrollTrigger.

Requirements:
1. Setup a pinned horizontal scroll section (similar to basic horizontal scroll).
2. Inside each `.card` container, place an image element (`.parallax-img`) that is wider than the card itself (e.g., `width: 130%; height: 100%; object-fit: cover;`).
3. Set `.card` to `overflow: hidden`.
4. Create a ScrollTrigger animation that pins the main section and moves the `.track` on the X-axis.
5. In the same timeline, animate all `.parallax-img` elements to move in the opposite direction (e.g., `xPercent: -30`) so that as the track moves left, the images slide slightly to the right inside their containers.
6. Provide complete HTML5, CSS3, and JS files. Ensure GSAP and ScrollTrigger CDNs are included.
```
