# 🤖 AI Master Prompt: Observer Drag & Wheel Scroll (`draggable_horizontal_scroll`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Draggable Horizontal Scroll effect (`draggable_horizontal_scroll`) using GSAP 3, the GSAP Observer plugin, and the GSAP Draggable plugin.

Requirements:
1. Create a full-screen `.horizontal-wrapper` containing a wide `.track` of `.card` elements.
2. Hide native scrollbars (`overflow: hidden` on body).
3. Use GSAP Observer to listen for `wheel`, `touch`, and `pointer` (drag) events.
4. Calculate a target `x` value for the `.track` based on the delta of the observer events.
5. Use `gsap.to()` to smoothly tween the `.track` to the new `x` value, clamped between `0` and `-(track.scrollWidth - window.innerWidth)`.
6. This provides a buttery smooth horizontal experience that responds to both mouse wheel scrolling and click-and-drag panning without any native scrollbars.
7. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, Observer, and Draggable CDNs are included.
```
