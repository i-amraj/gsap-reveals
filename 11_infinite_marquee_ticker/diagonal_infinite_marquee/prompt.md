# 🤖 AI Master Prompt: Diagonal Infinite Marquee (`diagonal_infinite_marquee`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Diagonal Infinite Marquee effect (`diagonal_infinite_marquee`) using GSAP 3.

Requirements:
1. Setup a full-screen `.page-wrapper` that is `overflow: hidden; display: flex; align-items: center; justify-content: center; height: 100vh;` in CSS.
2. Inside, create a `.marquee-wrapper`. Apply `transform: rotate(-10deg) scale(1.2); width: 110vw;` to skew it diagonally across the screen like caution tape.
3. Inside that, build a standard `.marquee-container` (`overflow: hidden; white-space: nowrap;`) containing a `.marquee-track` and two identical `.marquee-content` text blocks.
4. Use GSAP to animate the track infinitely: `gsap.to(".marquee-track", { xPercent: -50, ease: "none", duration: 15, repeat: -1 })`.
5. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
