# 🤖 AI Master Prompt: Matrix Decode Reveal (`matrix_decode_reveal`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Matrix Decode Reveal effect (`matrix_decode_reveal`) using GSAP 3 and ScrollTrigger.

Requirements:
1. Setup a tall page with a centered `h1` (`.scramble-text`).
2. Do NOT use the premium `ScrambleTextPlugin`.
3. On page load, read the original text, store it, and immediately replace it with a random string of identical length using a custom character pool (`!<>-_\\/[]{}—=+*^?#0123456789`).
4. Setup a GSAP proxy object `{ progress: 0 }`. Tween it to `1` linked to a `ScrollTrigger` (`scrub: true`).
5. In the `onUpdate` callback, rebuild the string based on the scroll progress:
   - Calculate how many characters are resolved based on `progress`.
   - Show original characters up to the resolved threshold.
   - Show random characters for the rest of the string.
6. This ties the scrambling and decryption of the text directly to the user's scrollbar.
7. Provide complete HTML5, CSS3, and JS files. Ensure GSAP and ScrollTrigger CDNs are included.
```
