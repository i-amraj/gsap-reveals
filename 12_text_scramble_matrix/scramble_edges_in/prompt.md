# 🤖 AI Master Prompt: Scramble Edges In (`scramble_edges_in`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Scramble Edges In effect (`scramble_edges_in`) using GSAP 3.

Requirements:
1. Setup a container with an `h1` (`.edges-scramble`).
2. In JS, calculate the mathematical center of the string: `const center = originalText.length / 2`.
3. Create a GSAP `{ progress: 0 }` proxy tween triggered on `mouseenter` (duration 1.5s).
4. In `onUpdate`, loop through the string. For each character, calculate its distance from the center: `const dist = Math.abs(i - center)`.
5. If `dist > center * (1 - proxy.progress)`, show the original character. Otherwise, scramble it with a random character.
6. This creates a converging decryption effect where the outer edges of the text lock in first, and the decryption wave meets in the exact center of the string.
7. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
