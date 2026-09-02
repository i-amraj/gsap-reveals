# 🤖 AI Master Prompt: Scale on Center Scroll (`scale_on_center_scroll`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Scale on Center Scroll effect (`scale_on_center_scroll`) using GSAP 3 and ScrollTrigger's `containerAnimation` property.

Requirements:
1. Setup a pinned horizontal scroll section where a `.track` translates on the X-axis. Save this main tween as `trackTween`.
2. Place several `.card` elements inside the `.track`. Initially set them to `scale: 0.7` and `opacity: 0.5` in CSS.
3. Loop through each `.card` and create a ScrollTrigger animation using `containerAnimation: trackTween`.
4. When the card reaches the center of the viewport, it should scale up to `1` and opacity `1`. As it leaves the center, it scales back down.
   - Use a tween to `scale: 1, opacity: 1` with `yoyo: true, repeat: 1`.
   - Set `start: "center 90%"` and `end: "center center"`.
5. The result is a beautiful carousel effect where the center card is highlighted and the side cards fade back.
6. Provide complete HTML5, CSS3, and JS files. Ensure GSAP and ScrollTrigger CDNs are included.
```
