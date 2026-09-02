# 🤖 AI Master Prompt: Hero Title Morph (`hero_title_morph`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Hero Title Morph effect (`hero_title_morph`) using GSAP 3.

Requirements:
1. Setup a container with an `h1` (`.morph-text`).
2. In JS, define an array of phrases: `["CREATIVE DEVELOPER", "INTERACTIVE DESIGNER", "MOTION ENGINEER"]`.
3. Create a recursive `morphToNext()` function using a GSAP `{ progress: 0 }` proxy tween.
4. Calculate `maxLength = Math.max(currentText.length, nextText.length)`.
5. In `onUpdate`, loop through `maxLength`. Create a sweeping wave of scrambling left-to-right using: `const charProgress = proxy.progress * maxLength - i;`.
   - If `charProgress > 1`, show the new character.
   - If `charProgress > 0`, show a random character.
   - If `charProgress <= 0`, show the old character.
6. This creates a stunning typographic transition that morphs smoothly between phrases of completely different lengths.
7. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
