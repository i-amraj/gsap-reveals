# 🤖 AI Master Prompt: Snap to Card Scroll (`snap_to_card_scroll`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Snap to Card Scroll effect (`snap_to_card_scroll`) using GSAP 3 and ScrollTrigger.

Requirements:
1. Setup a pinned horizontal scroll section.
2. Inside the `.track`, place several `.card` elements. Make each card `width: 100vw` so that one card takes up the entire screen perfectly (like slides).
3. Use GSAP ScrollTrigger to pin the section and move the `.track` horizontally.
4. Add the `snap` property to the ScrollTrigger configuration:
   - `snap: 1 / (cards.length - 1)`
   - This calculates perfectly how to snap to the exact progress of each slide when the user stops scrolling.
5. Provide complete HTML5, CSS3, and JS files. Ensure GSAP and ScrollTrigger CDNs are included.
```
