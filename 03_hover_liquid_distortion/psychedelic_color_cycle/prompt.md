# 🤖 AI Master Prompt: Psychedelic Color Cycle (`psychedelic_color_cycle`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Psychedelic style Color Cycle Liquid animation (`psychedelic_color_cycle`) using SVG Filters and GSAP 3.

Requirements:
1. Image filtered with an SVG containing `<feColorMatrix type="hueRotate" values="0">`, followed by `<feTurbulence>` and `<feDisplacementMap>`.
2. On mouseenter, GSAP animates BOTH the displacement map `scale` (e.g., to 40) AND the `<feColorMatrix>` `values` attribute from 0 to 360 over a loop, creating a continuous rainbow color-shifting wave effect.
3. On mouseleave, pause/reverse the rotation and return displacement to 0.
4. Provide complete self-contained HTML5, CSS3, and JS files.
```
