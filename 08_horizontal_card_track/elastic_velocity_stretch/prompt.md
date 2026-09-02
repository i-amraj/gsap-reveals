# 🤖 AI Master Prompt: Elastic Velocity Stretch (`elastic_velocity_stretch`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create an Elastic Velocity Stretch effect (`elastic_velocity_stretch`) using GSAP 3 and ScrollTrigger.

Requirements:
1. Setup a pinned `.horizontal-section` that translates a `.track` left on scroll.
2. Inside the `.track`, place several `.card` elements.
3. In the ScrollTrigger `onUpdate` callback, read the current scroll velocity using `self.getVelocity()`.
4. Map the velocity to a `scaleX` value (e.g., `1 + Math.abs(velocity) / 2000`).
5. Also, skew the cards slightly based on the raw velocity (`skewX: velocity / -200`).
6. Apply these properties to all `.card` elements using a fast `gsap.to(cards, { ... })` proxy to create a rubber-band elastic stretching effect when the user scrolls fast.
7. Provide complete HTML5, CSS3, and JS files. Ensure GSAP and ScrollTrigger CDNs are included.
```
