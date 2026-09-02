# 🤖 AI Master Prompt: Marquee Scramble Ticker (`marquee_scramble_ticker`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Marquee Scramble Ticker effect (`marquee_scramble_ticker`) using GSAP 3.

Requirements:
1. Setup a standard infinite marquee `.marquee-container` with an `overflow: hidden` wrapper.
2. Inside, create `.marquee-track` moving infinitely left (`xPercent: -50`) using GSAP.
3. Place `.marquee-content` blocks inside the track.
4. In JS, define an array of phrases (`["SCROLLING INFINITELY", "CONTINUOUS DATA FLOW", "NEVER STOP MOVING"]`).
5. Use `setInterval` to trigger a text morph every 3 seconds while the marquee is running.
6. The morph function should use a GSAP `{ progress: 0 }` proxy tween over `1` second. In `onUpdate`, it calculates a sweeping scramble wave (`charProgress`) across the maximum length of the old and new phrase.
7. This results in a marquee that is continuously scrolling left, but its content glitches and morphs into new phrases periodically without breaking the seamless loop.
8. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
