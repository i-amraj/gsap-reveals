# 🤖 AI Master Prompt: Pixelate Resolve Trail (`pixelate_resolve_trail`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Pixelate Resolve Image Trail (`pixelate_resolve_trail`) using GSAP 3 and SVG `<feMorphology>`.

Requirements:
1. Define an SVG filter in HTML with `<feMorphology operator="dilate" radius="10" id="pixelate">`.
2. Track mouse coordinates and dynamically spawn images.
3. Spawn each image with the `url(#pixelate)` filter applied.
4. Animate the `radius` of the SVG filter from 10 down to 0, making the image resolve from a chunky 8-bit mosaic into a sharp photo.
5. Fade the image out to opacity 0 after resolving, then remove the DOM element.
6. Provide complete HTML5, CSS3, and JS files.
```
