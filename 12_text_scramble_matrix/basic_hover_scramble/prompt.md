# 🤖 AI Master Prompt: Basic Hover Scramble (`basic_hover_scramble`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Basic Hover Scramble effect (`basic_hover_scramble`) using GSAP 3.

Requirements:
1. Setup a centered container with an `h1` heading (`.scramble-text`).
2. Do NOT use the premium `ScrambleTextPlugin`. We will build this using free GSAP core.
3. In JS, store the original string and define a pool of random characters (`!<>-_\\/[]{}—=+*^?#0123456789`).
4. On `mouseenter` on the heading, create a proxy object `{ progress: 0 }` and tween it to `1` using `gsap.to()`.
5. Inside the tween's `onUpdate` callback, rebuild the string:
   - Calculate how many characters should be resolved based on `progress`.
   - If a character index is `<` the resolved threshold, show the actual character.
   - Otherwise, show a random character from the pool (preserving spaces so layout doesn't shift).
6. Set the `duration` to `0.8` seconds with `ease: "power2.out"`.
7. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
