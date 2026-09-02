# 🤖 AI Master Prompt: Basic Magnetic Cursor (`basic_magnetic_cursor`)

> **Copy & paste this prompt into any AI agent to implement this exact animation:**

```text
Create a Basic Magnetic Cursor (`basic_magnetic_cursor`) using GSAP 3.

Requirements:
1. Set `cursor: none` on the `body` element to hide the default browser cursor.
2. Create a `#cursor` div (20px circle, `position: fixed`, `pointer-events: none`, `mix-blend-mode: difference`, `border-radius: 50%`).
3. In JS, use `gsap.quickTo(cursor, "x", { duration: 0.6, ease: "power3" })` and `gsap.quickTo(cursor, "y", ...)` to create two optimized setter functions.
4. On `window.mousemove`, call both setters with `e.clientX` and `e.clientY`.
5. Also add scale-to-0 on `mouseleave` and scale-to-1 on `mouseenter` for polish.
6. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
