# 🤖 AI Master Prompt: Gyroscope Device Tilt (`gyroscope_device_tilt`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Gyroscope Device Tilt effect (`gyroscope_device_tilt`) using GSAP 3.

Requirements:
1. Create a 3D tilt card.
2. Instead of relying solely on the mouse, listen for the `deviceorientation` event (mobile gyroscope).
3. Map the `event.gamma` (left/right rotation) to the card's `rotationY`, and `event.beta` (front/back rotation) to the card's `rotationX`.
4. Clamp the values to a maximum rotation (e.g., 20 degrees).
5. Add a fallback to standard `mousemove` tilt for desktop users.
6. Provide complete HTML5, CSS3, and JS files.
```
