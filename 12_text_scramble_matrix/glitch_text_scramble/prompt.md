# 🤖 AI Master Prompt: Glitch Text Scramble (`glitch_text_scramble`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Glitch Text Scramble effect (`glitch_text_scramble`) using GSAP 3.

Requirements:
1. Setup a container with an `h1` heading (`.scramble-text`).
2. In JS, use a custom character pool of heavy block characters: `"█▓▒░▄▀┼┤┬├─"`.
3. Add a CSS class `.glitching` that applies `text-shadow: 4px 0 #ef4444, -4px 0 #3b82f6;` and a slight transform skew for a chromatic aberration glitch effect.
4. On `mouseenter`, trigger the GSAP proxy `{ progress: 0 }` to `1` over `1` second.
5. In the tween's `onStart`, add the `.glitching` class. In `onComplete`, remove it.
6. In `onUpdate`, progressively resolve the string. Unresolved characters should rapidly cycle through the block character pool, creating a heavy, distorted cyberpunk glitch effect before snapping to the original text.
7. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
