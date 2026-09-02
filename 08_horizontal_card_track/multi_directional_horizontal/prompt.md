# 🤖 AI Master Prompt: Multi Directional Horizontal (`multi_directional_horizontal`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Multi Directional Horizontal effect (`multi_directional_horizontal`) using GSAP 3 and ScrollTrigger.

Requirements:
1. Setup a pinned `.horizontal-section`.
2. Inside, create two separate tracks stacked vertically: `.track-top` and `.track-bottom`.
3. In a single ScrollTrigger timeline (`scrub: 1`):
   - Animate `.track-top` to the left: `x: () => -(trackTop.scrollWidth - window.innerWidth)`
   - Set `.track-bottom` to initially stick out to the left (e.g., in CSS `transform: translateX(-...)` or via GSAP `.fromTo`).
   - Animate `.track-bottom` to the right: `x: 0` (assuming it starts far left).
4. The result is two rows of cards crossing each other in opposite directions seamlessly as the user scrolls down.
5. Provide complete HTML5, CSS3, and JS files. Ensure GSAP and ScrollTrigger CDNs are included.
```
