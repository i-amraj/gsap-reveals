# 🤖 AI Master Prompt: Scramble Typewriter (`scramble_typewriter`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Scramble Typewriter effect (`scramble_typewriter`) using GSAP 3.

Requirements:
1. Setup a container with an empty `h1` (`.typewriter-text`).
2. In JS, define a target string (`"ESTABLISHING SECURE CONNECTION..."`).
3. Create a GSAP proxy tween (`{ progress: 0 }` to `1` over `4` seconds with `ease: "none"`).
4. In `onUpdate`:
   - Calculate `currentLength = Math.floor(originalText.length * proxy.progress)`.
   - Rebuild the string up to `currentLength`.
   - If the character index is within the last 3 characters of `currentLength` (e.g. `i > currentLength - 4`), output a random character from a pool (`!@#$%^&*`).
   - Otherwise, output the actual character.
5. This simulates a computer Terminal calculating and decrypting characters in real-time as it types them out.
6. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
