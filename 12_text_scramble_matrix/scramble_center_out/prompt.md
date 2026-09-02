# 🤖 AI Master Prompt: Scramble Center Out (`scramble_center_out`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Scramble Center Out effect (`scramble_center_out`) using GSAP 3.

Requirements:
1. Setup a container with an `h1` (`.center-scramble`).
2. In JS, calculate the mathematical center of the string: `const center = originalText.length / 2`.
3. Create a GSAP `{ progress: 0 }` proxy tween triggered on `mouseenter` (duration 1.5s).
4. In `onUpdate`, loop through the string. For each character, calculate its distance from the center: `const dist = Math.abs(i - center)`.
5. If `dist < center * proxy.progress`, show the original character (it has resolved). Otherwise, scramble it with a random character.
6. This creates a mesmerizing radial decryption where the text locks in from the exact center and spreads outwards to the edges.
7. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
