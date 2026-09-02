# 🤖 AI Master Prompt: Skewed Velocity Scroll (`skewed_velocity_scroll`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Skewed Velocity Scroll effect (`skewed_velocity_scroll`) using GSAP 3 and ScrollTrigger.

Requirements:
1. Setup a pinned horizontal scroll section (similar to basic horizontal scroll).
2. Use ScrollTrigger's `onUpdate` callback to get the scroll velocity via `self.getVelocity()`.
3. Map the velocity to a `skewX` property (e.g., `skew = clamp(-20, 20, velocity / -100)`).
4. Use `gsap.to('.card', { skewX: skew, overwrite: "auto", duration: 0.3 })` to apply the skew dynamically as the user scrolls.
5. When scrolling stops (velocity is 0), the cards should spring back to `skewX: 0`.
6. Provide complete HTML5, CSS3, and JS files. Ensure GSAP and ScrollTrigger CDNs are included.
```
