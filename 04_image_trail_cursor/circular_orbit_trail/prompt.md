# 🤖 AI Master Prompt: Orbiting Image Ring Trail (`circular_orbit_trail`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Circular Orbit Image Trail animation (`circular_orbit_trail`) using GSAP 3.

Requirements:
1. Track mouse coordinates and dynamically spawn images when moved.
2. The spawned images should immediately begin animating in a circular orbit around the current mouse position (using `Math.sin`/`cos` or GSAP's `rotation` combined with `transform-origin` offset).
3. The simplest way is to wrap each spawned image in a container div placed exactly at the mouse coordinates. The inner image is offset (e.g., `left: 100px`). Then use GSAP to rotate the container div by 360 degrees while fading it out.
4. Scale up on spawn, rotate for 1.5s, then fade out and destroy.
5. Provide complete self-contained HTML5, CSS3, and JS files.
```
