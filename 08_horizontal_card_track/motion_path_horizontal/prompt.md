# 🤖 AI Master Prompt: Motion Path Horizontal (`motion_path_horizontal`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Motion Path Horizontal effect (`motion_path_horizontal`) using GSAP 3, ScrollTrigger, and the MotionPath plugin.

Requirements:
1. Setup a pinned `.horizontal-section`.
2. Inside, draw a massive SVG `<path>` that curves up and down while moving from left to right across the screen. Give it an ID `#snake-path`.
3. Create several small `.card` elements positioned absolutely in the section.
4. Use GSAP's `motionPath` property to animate the cards along the `#snake-path`.
5. Set `autoRotate: true` so the cards physically rotate to match the curves of the path.
6. Link this animation to ScrollTrigger (`scrub: 1`) so that scrolling down drives the cards along the path. Stagger the cards so they follow each other like a train.
7. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and MotionPathPlugin CDNs are included.
```
