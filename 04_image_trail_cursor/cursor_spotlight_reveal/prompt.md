# 🤖 AI Master Prompt: Cursor Spotlight Reveal (`cursor_spotlight_reveal`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Cursor Spotlight Reveal Trail (`cursor_spotlight_reveal`) using GSAP 3 and CSS `clip-path`.

Requirements:
1. Cover the screen with a large hidden background image layer.
2. Track mouse coordinates continuously.
3. Instead of spawning DOM images, spawn `div` elements that act as circular masks/spotlights over the hidden background image. 
4. The spawned divs should use `background-attachment: fixed` or `background-position` matched to their coordinates to perfectly reveal the background image underneath.
5. Animate these mask divs scaling up slightly then fading out, creating a trailing flashlight effect that paints the image temporarily.
6. Provide complete HTML5, CSS3, and JS files.
```
