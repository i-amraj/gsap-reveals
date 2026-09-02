# 🤖 AI Master Prompt: Scramble Text Mask Image (`scramble_text_mask_image`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Scramble Text Mask Image effect (`scramble_text_mask_image`) using GSAP 3.

Requirements:
1. Setup a container with an `h1` (`.scramble-mask-text`).
2. Style the `h1` in CSS to act as an image mask: apply a heavy background image, `-webkit-background-clip: text;`, and `color: transparent;`.
3. In JS, set up a basic GSAP scramble proxy (`{ progress: 0 }` to `1` over `1` sec) triggered on `mouseenter`.
4. In `onUpdate`, progressively resolve the string while unresolved characters scramble through random cryptographic symbols (`!<>-_\\/[]{}—=+*^?#`).
5. Because the text itself acts as a clipping mask, the rapid scrambling of character shapes creates a wildly dynamic, glitchy reveal of the underlying image before settling.
6. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
