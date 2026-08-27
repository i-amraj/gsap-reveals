# 🤖 AI Master Prompt: Scroll Velocity Zoom & Inertia Skew (`scroll_velocity_zoom_inertia`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Balenciaga/Streetwear style Scroll Velocity Zoom & Inertia Skew animation (`scroll_velocity_zoom_inertia`) using GSAP 3 and ScrollTrigger.

Requirements:
1. Track scroll velocity using `ScrollTrigger.create({ onUpdate: (self) => self.getVelocity() })`.
2. Dynamically clamp velocity value to convert to `skewY` angle (up to 8deg) and `scaleY` stretch (up to 1.25).
3. Use GSAP quickTo or smooth quickSetter to interpolate skew with smooth inertia return on scroll stop.
4. Provide complete self-contained HTML5, CSS3, and JS files.
```
