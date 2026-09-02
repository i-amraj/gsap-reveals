# 🤖 AI Master Prompt: Scramble Hover Encrypt (`scramble_hover_encrypt`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Scramble Hover Encrypt effect (`scramble_hover_encrypt`) using GSAP 3.

Requirements:
1. Setup a container with an `h1` (`.encrypt-text`).
2. Unlike a standard hover where text *resolves* to readable English, this text is readable by default and **encrypts** when hovered.
3. In JS, setup a `{ progress: 0 }` proxy. On `mouseenter`, tween to `1`. On `mouseleave`, tween back to `0`.
4. In `onUpdate`:
   - Calculate how many characters should be encrypted based on `progress`.
   - If `i < length * progress`, output a random character from the pool.
   - Otherwise, output the actual original character.
5. This creates a left-to-right sweeping encryption that hides sensitive data (e.g. "CONFIDENTIAL FILE") when the user tries to hover over it.
6. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
