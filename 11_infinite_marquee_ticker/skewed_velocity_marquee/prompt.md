# 🤖 AI Master Prompt: Skewed Velocity Marquee (`skewed_velocity_marquee`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Skewed Velocity Marquee effect (`skewed_velocity_marquee`) using GSAP 3 and ScrollTrigger.

Requirements:
1. Setup a `.marquee-container` that is `overflow: hidden; white-space: nowrap;` in CSS.
2. Inside, create a `.marquee-track` with `display: flex; width: max-content;`.
3. Inside the track, place two identical `.marquee-content` elements containing the exact same long string of text.
4. Use GSAP to animate the track infinitely: `let tween = gsap.to(".marquee-track", { xPercent: -50, ease: "none", duration: 15, repeat: -1 })`.
5. Create a `ScrollTrigger` spanning the entire page (`start: 0, end: "max"`).
6. In the `onUpdate` callback, capture the user's scroll velocity using `self.getVelocity()`.
7. Animate the tween's `timeScale` based on the absolute speed, and simultaneously animate the `.marquee-track`'s `skewX` property based on the raw velocity (direction).
8. This causes the marquee to speed up and physically lean (skew) into the scroll direction, creating a high-speed motion blur effect. Return skew to 0 and timeScale to 1 when scrolling stops.
9. Provide complete HTML5, CSS3, and JS files. Ensure GSAP and ScrollTrigger CDNs are included.
```
