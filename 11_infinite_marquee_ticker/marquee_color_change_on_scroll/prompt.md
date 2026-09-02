# 🤖 AI Master Prompt: Marquee Color Change On Scroll (`marquee_color_change_on_scroll`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Marquee Color Change On Scroll effect (`marquee_color_change_on_scroll`) using GSAP 3 and ScrollTrigger.

Requirements:
1. Setup a standard `.marquee-container` that loops infinitely using `gsap.to(".marquee-track", { xPercent: -50, ease: "none", duration: 15, repeat: -1 })`.
2. Wrap the page in a tall `.page-wrap` to allow for scrolling.
3. Use a separate `gsap.to()` linked to a `ScrollTrigger` (scrub: true, spanning the whole page) to animate the `backgroundColor` and `color` of the `body` or `.page-wrap` from a dark theme to a light theme as the user scrolls.
4. Set the `.marquee-content` color to `inherit` so it seamlessly changes color along with the rest of the page while continuing to loop infinitely.
5. Provide complete HTML5, CSS3, and JS files. Ensure GSAP and ScrollTrigger CDNs are included.
```
