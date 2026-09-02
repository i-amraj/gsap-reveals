# 🤖 AI Master Prompt: Scramble Blur Glitch (`scramble_blur_glitch`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Scramble Blur Glitch effect (`scramble_blur_glitch`) using GSAP 3.

Requirements:
1. Setup a container with an `h1` (`.blur-scramble`).
2. In JS, create a GSAP `{ progress: 0 }` proxy tween triggered on `mouseenter` (duration 1s).
3. In `onUpdate`:
   - Rebuild the string left-to-right (resolved chars vs scrambled chars).
   - Apply a dynamic CSS `filter: blur()` to the element that peaks at `progress = 0.5` and returns to `0` at `progress = 1`.
   - Use `Math.sin(proxy.progress * Math.PI) * 15` to calculate the blur amount (max 15px).
4. This creates a highly realistic camera/lens refocus glitch where the text scrambles while losing focus, and snaps back sharply as it resolves.
5. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
