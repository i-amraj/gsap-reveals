# 🤖 AI Master Prompt: Slice & Slide Reveal (`slice_and_slide_reveal`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Slice & Slide Reveal preloader (`slice_and_slide_reveal`) using GSAP 3.

Requirements:
1. Setup a `.preloader-wrapper` (fixed, full screen).
2. Inside, create 3 horizontal slices: `.slice-top`, `.slice-middle`, and `.slice-bottom`. Make each take exactly 33.333% of the height and 100vw of the width.
3. Place a `.counter-container` with text centered on the screen (z-index above slices).
4. Run a GSAP counter to 100%. Fade it out when complete.
5. Animate the slices divergently:
   - `.slice-top` goes `yPercent: -100` (up).
   - `.slice-middle` goes `xPercent: 100` (slide right).
   - `.slice-bottom` goes `yPercent: 100` (down).
6. Use `ease: "power4.inOut"` and run them synchronously. This creates a highly complex mechanical sliding wipe effect.
7. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
