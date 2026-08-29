# 🤖 AI Master Prompt: Geometric Mosaic Pixelation (`geometric_mosaic_pixelation`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Web3 style Geometric Mosaic Pixelation animation (`geometric_mosaic_pixelation`) using SVG Filters and GSAP 3.

Requirements:
1. Apply an SVG filter using `<feMorphology operator="dilate" radius="0">`. This will simulate a blocky, chunky pixelation effect when the radius increases.
2. (Optional) Chain it with a slight turbulence/displacement if needed, but morphology handles the chunky blocks well.
3. On mouseenter, GSAP animates the `<feMorphology>` `radius` attribute from 0 to 10 (or higher), causing the image to instantly break down into a geometric chunky mosaic grid.
4. On mouseleave, smoothly animate the radius back to 0.
5. Provide complete self-contained HTML5, CSS3, and JS files.
```
