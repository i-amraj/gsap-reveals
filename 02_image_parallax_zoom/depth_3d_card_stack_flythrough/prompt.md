# 🤖 AI Master Prompt: Depth 3D Card Stack Fly-Through (`depth_3d_card_stack_flythrough`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create an Apple Keynote style Depth 3D Card Stack Fly-Through animation (`depth_3d_card_stack_flythrough`) using GSAP 3 and ScrollTrigger.

Requirements:
1. Viewport container set with `perspective: 1000px` and `transform-style: preserve-3d`.
2. Multiple cards stacked in 3D Z-space. Scroll animates top card from `scale: 1` to `scale: 3.5`, `translateZ: 800px` and `opacity: 0` to fly past camera lens.
3. Card behind scales smoothly into main focus position (`scale: 1`, `translateZ: 0px`).
4. ScrollTrigger configured with `pin: true`, `start: 'top top'`, `end: '+=2500'`, and `scrub: 1`.
5. Provide complete self-contained HTML5, CSS3, and JS files.
```
