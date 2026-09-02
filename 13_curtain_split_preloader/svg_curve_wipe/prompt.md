# 🤖 AI Master Prompt: SVG Curve Wipe (`svg_curve_wipe`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create an SVG Curve Wipe preloader (`svg_curve_wipe`) using GSAP 3.

Requirements:
1. Setup a `.preloader-wrapper` (fixed, full screen).
2. Inside, add a full-screen inline SVG: `<svg class="transition-svg" viewBox="0 0 100 100" preserveAspectRatio="none">`.
3. Add a `<path id="curve" d="M 0 100 V 0 Q 50 0 100 0 V 100 z" fill="#0f172a" />`. This covers the screen as a flat rectangle.
4. Add a `.counter-text` on top.
5. In JS, run a GSAP counter to 100%. Fade out the counter text when done.
6. Create an elastic wipe by animating the `d` attribute of the SVG path.
   - First tween (stretch): `attr: { d: "M 0 100 V 50 Q 50 150 100 50 V 100 z" }` with `ease: "power2.in"`.
   - Second tween (snap): `attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" }` with `ease: "power2.out"`.
7. This creates a stunning liquid/elastic peel effect to reveal the hero section.
8. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
