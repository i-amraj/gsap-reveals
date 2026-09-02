# 🤖 AI Master Prompt: Lottie Scrub Tilt (`lottie_scrub_tilt`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Lottie Scrub Tilt Hover effect (`lottie_scrub_tilt`) using GSAP 3 and LottieFiles.

Requirements:
1. Create a 3D tilt card wrapper.
2. Inside the card, embed a Lottie animation using `<lottie-player>`.
3. In the `mousemove` event, calculate the normalized X position (`-1` to `1`).
4. Apply the standard 3D rotation to the card using GSAP.
5. Additionally, map the normalized X position to the Lottie player's `seek()` method (converting `-1 -> 1` into `0% -> 100%`).
6. As the user tilts the card left to right, the Lottie animation physically scrubs forwards and backwards.
7. Provide complete HTML5, CSS3, and JS files.
```
