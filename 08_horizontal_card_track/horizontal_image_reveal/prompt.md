# 🤖 AI Master Prompt: Horizontal Image Reveal (`horizontal_image_reveal`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Horizontal Image Reveal effect (`horizontal_image_reveal`) using GSAP 3 and ScrollTrigger's `containerAnimation`.

Requirements:
1. Setup a pinned horizontal scroll `.track`. Save the horizontal tween as `trackTween`.
2. Inside each `.card`, place an `.img-container` and apply a CSS clip-path to hide it entirely (e.g., `clip-path: inset(0 100% 0 0)` — hidden from the right).
3. Loop through each `.card`.
4. Create a ScrollTrigger animation using `containerAnimation: trackTween`.
5. Animate the `.img-container` to `clip-path: inset(0 0% 0 0)` as the card enters the viewport.
   - `start: "left 90%"` (when the card just enters)
   - `end: "center center"` (fully revealed by the center)
   - `scrub: true`
6. As the user scrolls horizontally, the images inside the cards elegantly "wipe" into view.
7. Provide complete HTML5, CSS3, and JS files. Ensure GSAP and ScrollTrigger CDNs are included.
```
