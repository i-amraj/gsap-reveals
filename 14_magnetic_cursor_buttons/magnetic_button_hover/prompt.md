# 🤖 AI Master Prompt: Magnetic Button Hover (`magnetic_button_hover`)

> **Copy & paste this prompt into any AI agent to implement this exact animation:**

```text
Create a Magnetic Button Hover effect (`magnetic_button_hover`) using GSAP 3.

Requirements:
1. Create several `.mag-btn` elements on a dark page. Apply `cursor: none` to `body`.
2. Add a basic `#cursor` div with GSAP `quickTo` tracking.
3. For each `.mag-btn`, on `mousemove`:
   a. Get the button's `getBoundingClientRect()`.
   b. Calculate `deltaX = e.clientX - (rect.left + rect.width / 2)`.
   c. Calculate `deltaY = e.clientY - (rect.top + rect.height / 2)`.
   d. Use `gsap.to(btn, { x: deltaX * 0.4, y: deltaY * 0.4, duration: 0.4, ease: "power3.out" })`.
4. On `mouseleave`, spring the button back: `gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.5)" })`.
5. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
