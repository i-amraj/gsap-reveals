# 🤖 AI Master Prompt: Scramble Loading Percentages (`scramble_loading_percentages`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Scramble Loading Percentages effect (`scramble_loading_percentages`) using GSAP 3.

Requirements:
1. Setup a full-screen `.loader` wrapper with a massive `h1` (`.loader-percentage`).
2. In JS, create a GSAP proxy tween that animates `{ val: 0 }` to `100` over `6` seconds with `ease: "power3.inOut"`.
3. In `onUpdate`:
   - Calculate the integer value of `val` and format it with leading zeros: `String(Math.floor(proxy.val)).padStart(3, "0")`.
   - If the value is strictly `< 100`, introduce random chaos: on ~30% of frames (`Math.random() < 0.3`), completely override the digits with random numbers `0-9`.
   - On the remaining frames, show the true `val`.
4. When `val` hits `100`, lock it cleanly to `"100%"` with a bright color highlight.
5. This creates an intense, "hacking-style" preloader where the numbers glitch out violently as it calculates the payload.
6. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
