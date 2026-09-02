# 🤖 AI Master Prompt: SVG TextPath Marquee (`svg_textPath_marquee`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create an SVG TextPath Marquee effect (`svg_textPath_marquee`) using GSAP 3.

Requirements:
1. Setup a `.marquee-container` that centers an `<svg>` element on the screen.
2. Inside the SVG, define a `<path id="circlePath">` that forms a complete circle. Do NOT fill or stroke the path.
3. Add a `<text>` element, and inside it, a `<textPath href="#circlePath" class="svg-marquee-text" startOffset="0%">`.
4. Place a long string of text inside the `textPath`. Ensure the string is repeated enough times to fully wrap around the path.
5. Use GSAP's `attr` plugin to animate the `startOffset`: `gsap.to(".svg-marquee-text", { attr: { startOffset: "-50%" }, ease: "none", duration: 15, repeat: -1 })`.
6. This applies the exact same -50% seamless loop trick, but wrapped along an SVG vector path instead of a straight DOM container.
7. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
