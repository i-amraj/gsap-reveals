# 🤖 AI Master Prompt: CRT VHS Scanline Glitch (`crt_scanline_glitch`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Retro Cyberpunk style CRT VHS Scanline Glitch animation (`crt_scanline_glitch`) using SVG Filters and GSAP 3.

Requirements:
1. Image filtered with `<feTurbulence>` (high Y frequency for horizontal bands, e.g., `baseFrequency="0.001 0.3"`) and `<feDisplacementMap>`.
2. Add a CSS pseudo-element over the image to generate retro CRT horizontal scanlines using a repeating linear gradient.
3. On mouseenter, GSAP triggers a rapid timeline that randomly spikes the displacement map `scale` (X-axis) and quickly resets it to create a jagged TV signal glitch.
4. Provide complete self-contained HTML5, CSS3, and JS files.
```
