# 🤖 AI Master Prompt: Scramble Binary Clock (`scramble_binary_clock`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Scramble Binary Clock effect (`scramble_binary_clock`) using GSAP 3.

Requirements:
1. Setup a container with an `h1` (`.clock-text`).
2. In JS, use `setInterval` to run every 1000ms.
3. Inside the interval, calculate the current time formatted as `HH:MM:SS`.
4. Instead of just setting the text, create a GSAP proxy tween (`duration: 0.5`) on every tick.
5. In the `onUpdate` of the tween, progressively resolve the new `timeString`. Unresolved characters should scramble using a binary pool (`"01"`).
6. This creates a mesmerizing cyberpunk clock where every passing second doesn't just tick, it rapidly decrypts into existence.
7. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
