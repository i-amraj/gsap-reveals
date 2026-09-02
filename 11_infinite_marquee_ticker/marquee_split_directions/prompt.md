# 🤖 AI Master Prompt: Marquee Split Directions (`marquee_split_directions`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Marquee Split Directions effect (`marquee_split_directions`) using GSAP 3.

Requirements:
1. Setup a relative `.marquee-wrapper` that is `overflow: hidden; white-space: nowrap; height: 10rem;`.
2. Inside, create two absolute tracks stacked exactly on top of each other: `.track-top` and `.track-bottom`.
3. Inside each track, place two identical `.marquee-content` blocks with the exact same large text.
4. Use CSS `clip-path` to split them horizontally:
   - `.track-top`: `clip-path: inset(0 0 50% 0);`
   - `.track-bottom`: `clip-path: inset(50% 0 0 0);`
5. Use GSAP to animate `.track-top` infinitely to the left (`xPercent: -50`).
6. Use GSAP to animate `.track-bottom` infinitely to the right (`fromTo xPercent: -50 to 0`).
7. This causes a single line of typography to look like it has been sliced in half, with the top and bottom halves moving in opposite directions.
8. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
