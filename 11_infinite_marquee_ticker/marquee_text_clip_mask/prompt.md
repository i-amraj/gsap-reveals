# 🤖 AI Master Prompt: Marquee Text Clip Mask (`marquee_text_clip_mask`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Marquee Text Clip Mask effect (`marquee_text_clip_mask`) using GSAP 3.

Requirements:
1. Setup a `.marquee-container` that is `overflow: hidden; white-space: nowrap;` in CSS.
2. Inside, create a `.marquee-track` with `display: flex; width: max-content;`.
3. Inside the track, place two identical `.marquee-content` elements.
4. In CSS, style `.marquee-content` to act as a clipping mask for a fixed background image:
   - `background: url('...');`
   - `background-attachment: fixed;`
   - `background-size: cover;`
   - `-webkit-background-clip: text;`
   - `color: transparent;`
5. Use GSAP to animate the track infinitely: `gsap.to(".marquee-track", { xPercent: -50, ease: "none", duration: 15, repeat: -1 })`.
6. As the text moves across the screen, it reveals different portions of the stationary background image behind it.
7. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
