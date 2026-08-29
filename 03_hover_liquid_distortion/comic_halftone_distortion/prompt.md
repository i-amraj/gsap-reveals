# 🤖 AI Master Prompt: Comic Halftone Distortion (`comic_halftone_distortion`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Pop-Art style Comic Halftone Distortion animation (`comic_halftone_distortion`) using SVG Filters and GSAP 3.

Requirements:
1. Apply an SVG filter chain that converts the image into a halftone dot pattern. This can be achieved by using `<feColorMatrix>` for thresholding/posterization blended with a repeating SVG `<pattern>` of circles (dots).
2. Follow this with `<feTurbulence>` and `<feDisplacementMap>`.
3. On mouseenter, GSAP should animate the displacement map `scale` from 0 to 20, causing the halftone dots to warp and wave like a liquid comic book page.
4. On mouseleave, return to 0.
5. Provide complete self-contained HTML5, CSS3, and JS files.
```
