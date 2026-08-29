# 🤖 AI Master Prompt: Molten Lava Drip (`molten_lava_drip`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create an Action style Molten Lava Drip animation (`molten_lava_drip`) using SVG Filters and GSAP 3.

Requirements:
1. Apply an SVG filter chain starting with `<feColorMatrix>` (initially neutral, identity matrix) followed by `<feTurbulence>` (high X frequency, low Y frequency for vertical dripping) and `<feDisplacementMap>`.
2. On mouseenter, GSAP animates the `<feColorMatrix>` values to a heavily red/orange tinted matrix (simulating heat/lava).
3. Simultaneously animate the displacement `scale` up to 80 on the Y axis, creating a thick downward dripping melt.
4. On mouseleave, smoothly animate the color matrix back to identity (1 0 0 0 0 ...) and displacement to 0.
5. Provide complete self-contained HTML5, CSS3, and JS files.
```
