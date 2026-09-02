# 🤖 AI Master Prompt: Scrub Only Marquee (`scrub_only_marquee`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Scrub Only Marquee effect (`scrub_only_marquee`) using GSAP 3 and ScrollTrigger.

Requirements:
1. Setup a `.marquee-container` that is `overflow: hidden; white-space: nowrap;` in CSS.
2. Inside, create a `.marquee-track` with `display: flex; width: max-content;`.
3. Inside the track, place two identical `.marquee-content` elements.
4. Instead of an infinite time-based loop, bind the marquee directly to the user's scroll bar.
5. Use GSAP: `gsap.to(".marquee-track", { xPercent: -50, ease: "none", scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 1 } })`.
6. This ensures the text ONLY moves when the user scrolls the page, with a 1-second smoothing effect (`scrub: 1`).
7. Provide complete HTML5, CSS3, and JS files. Ensure GSAP and ScrollTrigger CDNs are included.
```
