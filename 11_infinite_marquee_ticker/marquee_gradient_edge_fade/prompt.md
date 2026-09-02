# 🤖 AI Master Prompt: Marquee Gradient Edge Fade (`marquee_gradient_edge_fade`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Marquee Gradient Edge Fade effect (`marquee_gradient_edge_fade`) using GSAP 3.

Requirements:
1. Setup a `.marquee-container` that is `overflow: hidden; white-space: nowrap;` in CSS.
2. Apply a CSS mask to `.marquee-container` to fade out the left and right edges:
   `-webkit-mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);`
   `mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);`
3. Inside, create a `.marquee-track` with `display: flex; width: max-content;`.
4. Inside the track, place two identical `.marquee-content` elements.
5. Use GSAP to animate the track infinitely: `gsap.to(".marquee-track", { xPercent: -50, ease: "none", duration: 15, repeat: -1 })`.
6. This creates a cylindrical "ticker tape" effect where the text appears from the shadows on the right and disappears into the shadows on the left.
7. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
