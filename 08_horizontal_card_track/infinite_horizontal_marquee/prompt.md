# 🤖 AI Master Prompt: Infinite Horizontal Marquee (`infinite_horizontal_marquee`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create an Infinite Horizontal Marquee effect (`infinite_horizontal_marquee`) using GSAP 3 and ScrollTrigger.

Requirements:
1. Create a full-width `.marquee-container` with `overflow: hidden`.
2. Inside, create a `.track` containing a set of `.card` elements. Duplicate the set of cards inside the `.track` so there are two identical sets side-by-side to allow seamless looping.
3. The track should be `display: flex; width: max-content;`.
4. Use GSAP to animate the `.track` infinitely: `gsap.to(track, { xPercent: -50, repeat: -1, duration: 20, ease: "none" });`. This creates an auto-playing marquee.
5. Enhance this with ScrollTrigger: use `onUpdate` to read the scroll velocity (`self.getVelocity()`) and temporarily increase the `timeScale()` of the infinite tween, making the marquee speed up rapidly when the user scrolls, and settle back to normal speed when they stop.
6. Provide complete HTML5, CSS3, and JS files. Ensure GSAP and ScrollTrigger CDNs are included.
```
