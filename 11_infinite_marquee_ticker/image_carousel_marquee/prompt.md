# 🤖 AI Master Prompt: Image Carousel Marquee (`image_carousel_marquee`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create an Image Carousel Marquee effect (`image_carousel_marquee`) using GSAP 3.

Requirements:
1. Setup a `.marquee-container` that is `overflow: hidden; white-space: nowrap;` in CSS.
2. Inside, create a `.marquee-track` with `display: flex; width: max-content;`.
3. Inside the track, place two identical `.marquee-content` elements.
4. Instead of text, each `.marquee-content` should contain 4 to 5 `img` elements (use Unsplash placeholders).
5. In CSS, use `display: flex; gap: 2rem; padding-right: 2rem;` on `.marquee-content` to space the images correctly.
6. Give images a fixed height (e.g. `250px`) and `border-radius: 1rem; object-fit: cover;`.
7. Use GSAP to animate the track infinitely: `gsap.to(".marquee-track", { xPercent: -50, ease: "none", duration: 25, repeat: -1 })`.
8. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
