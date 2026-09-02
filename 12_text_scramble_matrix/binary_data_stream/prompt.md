# 🤖 AI Master Prompt: Binary Data Stream (`binary_data_stream`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Binary Data Stream effect (`binary_data_stream`) using GSAP 3.

Requirements:
1. Setup a container with an `h1` heading (`.binary-text`). 
2. In JS, store the original string and set the character pool to `"01"`.
3. Create an "idle" tween using GSAP that repeats infinitely (`repeat: -1`). In its `onUpdate`, randomly swap every character of the string with 0 or 1, preserving spaces. This creates an infinite rolling binary effect.
4. Add a `click` event listener to the heading (or a button). When triggered:
   - Kill the idle tween using `gsap.killTweensOf()`.
   - Start a new tween on a `{ progress: 0 }` proxy.
   - Animate `progress` to `1` over 1.5 seconds.
   - In `onUpdate`, progressively resolve the string left-to-right back to the original text, while the unresolved characters continue to cycle as random binary.
5. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
