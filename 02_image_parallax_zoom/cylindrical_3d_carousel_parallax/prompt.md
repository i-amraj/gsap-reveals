# 🤖 AI Master Prompt: Cylindrical 3D Carousel Parallax (`cylindrical_3d_carousel_parallax`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a 3D Brand Showroom style Cylindrical 3D Carousel Parallax animation (`cylindrical_3d_carousel_parallax`) using GSAP 3 and ScrollTrigger.

Requirements:
1. Container stage set with `perspective: 1200px` and `transform-style: preserve-3d`.
2. Ring of cards positioned in a 3D circle: `transform: rotateY(angle) translateZ(450px)`.
3. GSAP ScrollTrigger timeline animates the central cylinder rotation (`rotateY: 180deg`).
4. Cards counter-scale smoothly as they reach front-facing camera orientation.
5. ScrollTrigger configured with `pin: true`, `start: 'top top'`, `end: '+=2500'`, and `scrub: 1`.
6. Provide complete self-contained HTML5, CSS3, and JS files.
```
