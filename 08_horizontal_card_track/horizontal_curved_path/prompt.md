# 🤖 AI Master Prompt: Horizontal Curved Path (`horizontal_curved_path`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Horizontal Curved Path effect (`horizontal_curved_path`) using GSAP 3 and ScrollTrigger's `containerAnimation` property.

Requirements:
1. Setup a pinned horizontal scroll section where a `.track` translates on the X-axis based on vertical scroll. Save this main tween as `trackTween`.
2. Place several `.card` elements inside the `.track`. Initially set them lower with CSS (e.g., `transform: translateY(150px)`).
3. Loop through each `.card` and create a ScrollTrigger animation using `containerAnimation: trackTween`.
4. The animation should move the card up (`y: -150px`) when it reaches the center of the viewport, and then back down as it exits.
   - Set `start: "left center"` and `end: "right center"`.
   - Set `yoyo: true, repeat: 1` to create the up-and-down arc.
5. As you scroll, the cards will travel horizontally while following a perfect curved arc across the screen.
6. Provide complete HTML5, CSS3, and JS files. Ensure GSAP and ScrollTrigger CDNs are included.
```
