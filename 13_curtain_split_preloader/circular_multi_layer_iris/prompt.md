# 🤖 AI Master Prompt: Circular Multi-Layer Iris (`circular_multi_layer_iris`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Circular Multi-Layer Iris preloader (`circular_multi_layer_iris`) using GSAP 3.

Requirements:
1. Setup a `.preloader-wrapper` (fixed, full screen).
2. Inside, create 3 `.layer` elements. Make them absolute, covering the screen, with 3 different theme colors. Set their `z-index` so `layer-1` is on top.
3. Apply `clip-path: circle(150% at 50% 50%)` to all layers.
4. Place a `.counter-container` dead center above everything.
5. In JS, run a GSAP counter to 100%. Fade it out when complete.
6. Animate the 3 `.layer` elements' `clipPath` to `circle(0% at 50% 50%)`.
7. Use `stagger: 0.2`, `ease: "power4.inOut"`, and `duration: 1.5`.
8. This creates an incredibly smooth, multi-colored camera shutter effect closing to reveal the site.
9. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
