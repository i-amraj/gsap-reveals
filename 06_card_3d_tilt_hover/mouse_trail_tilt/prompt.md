# 🤖 AI Master Prompt: Mouse Trail Tilt (`mouse_trail_tilt`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Mouse Trail Tilt Hover effect (`mouse_trail_tilt`) using GSAP 3.

Requirements:
1. Create a 3D tilt card setup.
2. Inside the card (`preserve-3d`), listen for the `mousemove` event.
3. On every mouse move, dynamically spawn a small `.particle` div at the exact X/Y coordinate of the mouse *inside* the card.
4. Give the `.particle` a slight `translateZ(20px)` so it floats just above the card surface.
5. Use GSAP to immediately animate the particle's `opacity` to 0, `scale` to 0, and slightly move its `y` down over 0.5s, then remove it from the DOM (`onComplete`).
6. This creates a magical 3D trailing effect on the card surface as you tilt it.
7. Provide complete HTML5, CSS3, and JS files.
```
