# 🤖 AI Master Prompt: Checkerboard Split (`checkerboard_split`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Checkerboard Split preloader (`checkerboard_split`) using GSAP 3.

Requirements:
1. Setup a `.preloader-wrapper` (fixed, full screen).
2. Inside, create a `.grid-container` covering the screen. Use CSS Grid (`grid-template-columns: repeat(10, 1fr)` and `grid-template-rows: repeat(10, 1fr)`) to make a 10x10 grid (100 blocks).
3. In JS, generate 100 `.grid-block` elements and append them.
4. Place a `.counter-container` with text dead center (z-index above grid).
5. Run a GSAP counter to 100%. Fade it out when complete.
6. Animate the `.grid-block` elements: `scale: 0`, `rotation: 90`, and `borderRadius: "50%"` using `stagger: { grid: [10, 10], from: "edges", amount: 1.5 }` and `ease: "power2.inOut"`.
7. This creates a mesmerizing checkerboard disintegration that peels away from the edges inwards to reveal the hero section.
8. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
