# 🤖 AI Master Prompt: Oil Paint Swirl (`oil_paint_swirl`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create an Art Gallery style Oil Paint Swirl animation (`oil_paint_swirl`) using SVG Filters and GSAP 3.

Requirements:
1. Image filtered with an SVG `<feTurbulence>` (set `numOctaves` high, e.g., 5, to create complex texture) and `<feDisplacementMap>`.
2. Apply a CSS filter like `contrast(1.2) saturate(1.2)` to give the image a painted look.
3. On mouseenter, GSAP increases the displacement map `scale` and slowly animates the turbulence `baseFrequency` to create a thick, swirling, smudging effect resembling Van Gogh's oil paintings.
4. On mouseleave, smoothly resolve back to the original state.
5. Provide complete self-contained HTML5, CSS3, and JS files.
```
