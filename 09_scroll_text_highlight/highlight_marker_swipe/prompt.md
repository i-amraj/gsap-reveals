# 🤖 AI Master Prompt: Highlight Marker Swipe (`highlight_marker_swipe`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Highlight Marker Swipe effect (`highlight_marker_swipe`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'words' })` to split the text.
4. Set `.word { transition: color 0.1s; }` in CSS to smooth out the color change.
5. Create a GSAP ScrollTrigger (`start: "top 80%"`, `end: "bottom 40%"`, `scrub: true`).
6. Use `gsap.to(text.words, { backgroundColor: "#facc15", color: "#0f172a", stagger: 0.1, scrollTrigger: { scrub: true } })`.
7. This creates an effect similar to dragging your mouse to select text, or sweeping a yellow highlighter over the words as you scroll.
8. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
