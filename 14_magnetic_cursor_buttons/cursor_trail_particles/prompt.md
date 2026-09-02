# 🤖 AI Master Prompt: Cursor Trail Particles (`cursor_trail_particles`)

> **Copy & paste this prompt into any AI agent to implement this exact animation:**

```text
Create a Cursor Trail Particles effect (`cursor_trail_particles`) using GSAP 3.

Requirements:
1. Apply `cursor: none` to body. Create a `#cursor` dot tracked with `gsap.quickTo`.
2. On `mousemove`, check the distance traveled since the last particle spawn using `Math.hypot()`. Only spawn a new particle if distance > 12px.
3. Each particle is a dynamically created `<div>` with random size (5-16px), a random color from a vibrant palette, and a box-shadow glow.
4. Position the particle at the current mouse coordinates.
5. Animate each particle `y: random(-60, -120)`, `scale: 0`, `opacity: 0` using GSAP.
6. Use `onComplete: () => p.remove()` to clean up the DOM.
7. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
