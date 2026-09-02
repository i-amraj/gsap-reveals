# 🤖 AI Master Prompt: Horizontal Timeline Scrub (`horizontal_timeline_scrub`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Horizontal Timeline Scrub effect (`horizontal_timeline_scrub`) using GSAP 3 and ScrollTrigger.

Requirements:
1. Setup a pinned `.horizontal-section` that translates a `.track` left on scroll.
2. Add a `.timeline-wrapper` at the bottom of the section containing a `.progress-bar` (`scaleX: 0`, `transform-origin: left`).
3. Link the `.progress-bar` to the main ScrollTrigger so its `scaleX` reaches `1` exactly as the track reaches the end.
4. Add timeline `.marker` dots along the bar. Use `containerAnimation` on the `.card` elements so that when a card reaches the center of the screen, its corresponding `.marker` scales up or changes color.
5. Provide complete HTML5, CSS3, and JS files. Ensure GSAP and ScrollTrigger CDNs are included.
```
