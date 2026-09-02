# 🤖 AI Master Prompt: Scramble Image Caption Reveal (`scramble_image_caption_reveal`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Scramble Image Caption Reveal effect (`scramble_image_caption_reveal`) using GSAP 3.

Requirements:
1. Setup an image `.card`. Inside it, place a hidden `.caption-wrapper` containing an `h3` (`.scramble-caption`).
2. Use CSS to position the wrapper at the bottom and translate it out of view initially.
3. In JS, set up a GSAP hover interaction on the `.card`.
4. On `mouseenter`:
   - Tween the `.caption-wrapper` into view (`y: 0`).
   - Simultaneously run a GSAP proxy tween (`{ progress: 0 }` to `1`) that scrambles the `.scramble-caption` text, resolving left-to-right from random characters to the original caption text.
5. On `mouseleave`:
   - Hide the `.caption-wrapper` (`y: "100%"`).
6. This creates a high-tech UI where hovering an image physically reveals a caption that aggressively decrypts into place.
7. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
