# 🤖 AI Prompt: macOS Magnetic Dock Magnification (Gaussian Proximity Physics)

Copy and paste this prompt into your AI assistant to replicate or adapt this effect in your project:

```markdown
Create an authentic macOS-style floating dock magnification bar using Vanilla JavaScript and GSAP.

### Requirements:
1. **Dock Styling**:
   - Floating horizontal bar with glassmorphic backdrop-filter (`backdrop-filter: blur(24px)`).
   - Standard app icon items with subtle specular border and high-contrast emojis or SVGs.
   - Hover tooltips positioned above each app item.

2. **Gaussian/Cosine Proximity Magnification (The Core Formula)**:
   - On `mousemove` over the dock:
     * Measure horizontal distance from cursor `clientX` to center of each icon (`itemCenterX`).
     * Apply a cosine/Gaussian bell-curve formula inside the `influenceRadius` (160px):
       ```javascript
       const norm = distance / influenceRadius;
       const scale = 1 + (maxScale - 1) * Math.cos(norm * (Math.PI / 2));
       gsap.to(item, { scale: scale, duration: 0.15, ease: "power2.out", overwrite: "auto" });
       ```
     * Outside the radius, interpolate smoothly back to `scale: 1`.
   - On `mouseleave`: smoothly animate all icons back to `scale: 1`.

3. **App Launch Jump Bounce**:
   - On clicking any app icon, trigger a multi-stage physical jump bounce:
     `to(item, { y: -26, duration: 0.22, ease: "power2.out" }).to(item, { y: 0, duration: 0.35, ease: "bounce.out" })`
```
