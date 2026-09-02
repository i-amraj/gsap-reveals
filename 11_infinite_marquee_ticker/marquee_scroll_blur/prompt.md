# 🤖 AI Master Prompt: Marquee Scroll Blur (`marquee_scroll_blur`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Marquee Scroll Blur effect (`marquee_scroll_blur`) using GSAP 3 and ScrollTrigger.

Requirements:
1. Setup a `.marquee-container` that is `overflow: hidden; white-space: nowrap;` in CSS.
2. Inside, create a `.marquee-track` with `display: flex; width: max-content;`.
3. Inside the track, place two identical `.marquee-content` elements.
4. Use GSAP to animate the track infinitely: `gsap.to(".marquee-track", { xPercent: -50, ease: "none", duration: 15, repeat: -1 })`.
5. Create a `ScrollTrigger` spanning the entire page (`start: 0, end: "max"`).
6. In the `onUpdate` callback, capture the user's scroll velocity using `self.getVelocity()`.
7. Animate the `.marquee-track`'s CSS `filter: blur(Xpx)` based on the absolute speed, maxing out around 15px.
8. This simulates a camera motion blur when the user scrolls rapidly past the marquee. Return blur to 0 when scrolling stops.
9. Provide complete HTML5, CSS3, and JS files. Ensure GSAP and ScrollTrigger CDNs are included.
```
