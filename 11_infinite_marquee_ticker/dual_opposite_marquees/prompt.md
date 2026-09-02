# 🤖 AI Master Prompt: Dual Opposite Marquees (`dual_opposite_marquees`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Dual Opposite Marquees effect (`dual_opposite_marquees`) using GSAP 3.

Requirements:
1. Setup a `.marquee-container` that is `overflow: hidden; white-space: nowrap;` in CSS.
2. Inside, create TWO `.marquee-track` elements (`.track-1` and `.track-2`), each with `display: flex; width: max-content;`.
3. Inside each track, place two identical `.marquee-content` elements.
4. Style `.track-1` with solid text, and `.track-2` with outlined text (`-webkit-text-stroke`).
5. Use GSAP to animate `.track-1` left: `gsap.to(".track-1", { xPercent: -50, ease: "none", duration: 15, repeat: -1 })`.
6. Use GSAP to animate `.track-2` right seamlessly: `gsap.fromTo(".track-2", { xPercent: -50 }, { xPercent: 0, ease: "none", duration: 15, repeat: -1 })`.
7. This creates two interlocking belts of text sliding infinitely in opposite directions.
8. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
