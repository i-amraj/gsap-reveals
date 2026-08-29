# 🤖 AI Master Prompt: Echo Ripple Trail (`echo_ripple_trail`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create an Interactive style Echo Ripple Trail animation (`echo_ripple_trail`) using DOM generation and GSAP 3.

Requirements:
1. Create a card container with a base image.
2. Inside the card, add a `mousemove` event listener.
3. On mouse move (throttled to avoid performance issues), dynamically create a `div` representing a circular ripple (using CSS `backdrop-filter: blur()`, `border`, or radial gradients) at the cursor's exact coordinates.
4. Immediately use GSAP to animate this new ripple: scale it up massively and fade its opacity to 0 over 1.5 seconds.
5. In the `onComplete` callback, remove the `div` from the DOM.
6. Provide complete self-contained HTML5, CSS3, and JS files.
```
