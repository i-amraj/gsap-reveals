# 🤖 AI Master Prompt: Skew on Drag (`skew_on_drag`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Skew on Drag effect (`skew_on_drag`) using GSAP 3 and the GSAP Draggable plugin.

Requirements:
1. Create a full-screen `.horizontal-wrapper` containing a wide `.track` of `.card` elements.
2. Initialize `Draggable.create(".track", { type: "x", bounds: ".horizontal-wrapper" })`.
3. In the `onDrag` callback of Draggable, read the dragged X delta (or track the X position manually from the last frame).
4. Map this velocity/delta to a `skewX` property and apply it to all `.card` elements using `gsap.to()`.
5. In the `onDragEnd` callback, use a tween to smoothly reset the `skewX` of the cards back to `0`.
6. This creates a physical, elastic feeling where dragging the track forcibly distorts the items due to "friction".
7. Provide complete HTML5, CSS3, and JS files. Ensure GSAP and Draggable CDNs are included.
```
