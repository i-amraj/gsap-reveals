# 🤖 AI Master Prompt: Scroll Direction Marquee (`scroll_direction_marquee`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Scroll Direction Marquee effect (`scroll_direction_marquee`) using GSAP 3 and ScrollTrigger.

Requirements:
1. Setup a `.marquee-container` that is `overflow: hidden; white-space: nowrap;` in CSS.
2. Inside, create a `.marquee-track` with `display: flex; width: max-content;`.
3. Inside the track, place two identical `.marquee-content` elements containing the exact same long string of text.
4. Use GSAP to animate the track infinitely: `let tween = gsap.to(".marquee-track", { xPercent: -50, ease: "none", duration: 15, repeat: -1 })`.
5. Create a `ScrollTrigger` spanning the entire page (`start: 0, end: "max"`).
6. In the `onUpdate` callback, capture the user's scroll direction using `self.direction` (returns 1 for down, -1 for up).
7. Smoothly animate the tween's `timeScale` to match the scroll direction: `gsap.to(tween, { timeScale: self.direction, duration: 0.5, overwrite: true })`.
8. This causes the marquee to seamlessly reverse its flow depending on which way the user is scrolling.
9. Provide complete HTML5, CSS3, and JS files. Ensure GSAP and ScrollTrigger CDNs are included.
```
