# 🤖 AI Master Prompt: Concentric Rings Reveal (`concentric_rings_reveal`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Concentric Rings Reveal preloader (`concentric_rings_reveal`) using GSAP 3.

Requirements:
1. Setup a `.preloader-wrapper` (fixed, full screen).
2. Inside, create 4 `.ring` elements.
3. CSS for `.ring`: absolute positioning at `top: 50%; left: 50%`, `transform: translate(-50%, -50%)`, `border-radius: 50%`. Make their default size `150vw` (large enough to cover screen corners). Give them alternating or gradient-based colors.
4. Place a `.counter-container` with text dead center on top.
5. In JS, run a GSAP counter to 100%.
6. Once complete, fade out the counter text.
7. Animate the `.ring` elements `scale: 0` using a stagger (`stagger: 0.2`). This creates an effect of rings collapsing into a singularity, revealing the hero section perfectly.
8. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
