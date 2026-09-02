# 🤖 AI Master Prompt: Random Pixel Dissolve (`random_pixel_dissolve`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Random Pixel Dissolve preloader (`random_pixel_dissolve`) using GSAP 3.

Requirements:
1. Setup a `.preloader-wrapper` (fixed, full screen, dark background).
2. Inside, create a `.pixel-container` covering the screen. Use CSS Grid (`grid-template-columns: repeat(15, 1fr)`) to make a 15x15 grid (225 pixels).
3. In JS, generate 225 `.pixel` elements and append them to the container.
4. Place a `.counter-text` dead center (z-index above pixels).
5. Run a GSAP counter to 100%. Fade it out when complete.
6. Animate all 225 `.pixel` elements `opacity: 0` and `scale: 0` using GSAP's random stagger: `stagger: { amount: 1.5, from: "random" }`.
7. This creates a noisy, digital dissolve effect that reveals the hero section behind it.
8. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
