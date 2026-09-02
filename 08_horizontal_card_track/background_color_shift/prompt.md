# 🤖 AI Master Prompt: Background Color Shift (`background_color_shift`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Background Color Shift effect (`background_color_shift`) using GSAP 3 and ScrollTrigger's `containerAnimation`.

Requirements:
1. Setup a pinned horizontal scroll `.track` translating left. Save as `trackTween`.
2. Add a `data-color="#hexcode"` attribute to each `.card` element.
3. Loop through each `.card`. Create a ScrollTrigger using `containerAnimation: trackTween`.
4. Use `onEnter` and `onEnterBack` callbacks triggered at `start: "center 60%"` and `end: "center 40%"` to read the card's `data-color`.
5. Animate the `.horizontal-section` wrapper's `backgroundColor` to match the card's color (`gsap.to()`).
6. The background color elegantly shifts matching the mood of whichever card is currently at the center of the viewport (like Apple product pages).
7. Provide complete HTML5, CSS3, and JS files. Ensure GSAP and ScrollTrigger CDNs are included.
```
