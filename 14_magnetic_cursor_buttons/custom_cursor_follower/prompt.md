# 🤖 AI Master Prompt: Custom Cursor Follower (`custom_cursor_follower`)

> **Copy & paste this prompt into any AI agent to implement this exact animation:**

```text
Create a Dual-Layer Custom Cursor Follower (`custom_cursor_follower`) using GSAP 3.

Requirements:
1. Create two elements: `#cursor-dot` (small, 8px, snaps instantly) and `#cursor-ring` (larger, 40px, lags behind).
2. For the dot, use `gsap.quickTo(dot, "x", { duration: 0.05, ease: "none" })`.
3. For the ring, use `gsap.quickTo(ring, "x", { duration: 0.5, ease: "power3" })`.
4. On `mousemove`, call all four setters (x/y for both dot and ring) with the current mouse position.
5. On hovering interactive elements (cards, buttons), expand the ring via a CSS class and hide the dot.
6. On `mouseleave` from document, fade both cursors out.
7. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
