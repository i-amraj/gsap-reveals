# 🤖 AI Master Prompt: Vertical Text Scramble (`vertical_text_scramble`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Vertical Text Scramble effect (`vertical_text_scramble`) using GSAP 3.

Requirements:
1. Setup a container with an `h1` (`.vertical-scramble`).
2. Use CSS to make the text run vertically down the screen: `writing-mode: vertical-rl; text-orientation: upright; letter-spacing: 0.5rem;`.
3. In JS, use our GSAP proxy object technique (`{ progress: 0 }` to `1`) triggered on `mouseenter`.
4. The `onUpdate` should resolve characters from top to bottom (since it's vertical) while unresolved characters scramble through random matrix symbols.
5. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
