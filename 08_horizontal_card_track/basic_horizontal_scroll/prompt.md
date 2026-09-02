# 🤖 AI Master Prompt: Basic Horizontal Scroll (`basic_horizontal_scroll`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Basic Horizontal Scroll effect (`basic_horizontal_scroll`) using GSAP 3 and ScrollTrigger.

Requirements:
1. Create a layout with a spacer `100vh` above and below to allow for scrolling.
2. In the middle, create a `.horizontal-section` (`width: 100vw`, `height: 100vh`, `overflow: hidden`).
3. Inside it, a `.track` container (`display: flex`, `width: max-content`).
4. Inside the `.track`, place several `.card` elements (e.g., 5 cards, each `width: 60vw`).
5. Use GSAP ScrollTrigger to pin the `.horizontal-section` and animate the `.track` on the X-axis.
   - `x: () => -(track.scrollWidth - window.innerWidth)`
   - `ease: "none"`
   - `scrollTrigger: { trigger: ".horizontal-section", pin: true, scrub: 1, end: () => "+=" + track.scrollWidth }`
6. Provide complete HTML5, CSS3, and JS files. Ensure GSAP and ScrollTrigger CDNs are included.
```
