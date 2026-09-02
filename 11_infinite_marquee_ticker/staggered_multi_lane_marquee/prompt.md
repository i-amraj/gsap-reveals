# 🤖 AI Master Prompt: Staggered Multi-Lane Marquee (`staggered_multi_lane_marquee`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Staggered Multi-Lane Marquee effect (`staggered_multi_lane_marquee`) using GSAP 3.

Requirements:
1. Setup a `.marquee-container` that is `overflow: hidden; white-space: nowrap;` in CSS.
2. Inside, create three separate `.marquee-track` elements (`.track-1`, `.track-2`, `.track-3`), each with `display: flex; width: max-content;`.
3. Inside each track, place two identical `.marquee-content` elements.
4. Style the tracks differently: Track 1 has large text, Track 2 has medium outlined text, Track 3 has small italic text.
5. Use GSAP to animate them at different speeds and directions to create depth:
   - Track 1 goes left quickly (`duration: 15`).
   - Track 2 goes right slowly (`duration: 25`, from `-50%` to `0%`).
   - Track 3 goes left extremely fast (`duration: 10`).
6. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
