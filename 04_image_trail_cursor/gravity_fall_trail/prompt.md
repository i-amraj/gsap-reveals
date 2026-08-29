# 🤖 AI Master Prompt: Gravity Fall Trail (`gravity_fall_trail`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Gravity Fall Image Trail (`gravity_fall_trail`) using GSAP 3.

Requirements:
1. Track mouse coordinates and dynamically spawn images when moved.
2. Animate the image popping in at the cursor location.
3. Instead of holding and fading out in place, use GSAP to animate the image falling downwards (e.g., `y: "+=800"`) while rotating randomly (`rotation: random(-45, 45)`).
4. Apply an ease that simulates gravity, like `power2.in` or `power3.in`.
5. Fade out opacity to 0 near the end of the fall and remove the DOM element.
6. Provide complete HTML5, CSS3, and JS files.
```
