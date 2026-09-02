# 🤖 AI Master Prompt: Multi-Column Blinds Split (`multi_column_blinds_split`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Multi-Column Blinds Split preloader (`multi_column_blinds_split`) using GSAP 3.

Requirements:
1. Setup a `.preloader-wrapper` (fixed, full screen).
2. Inside the wrapper, create a `.columns-container` (flexbox) containing 5 `.column` divs.
3. Each `.column` should have `flex: 1` (20% width) and `height: 100vh` with a dark background color.
4. Place a `.counter-text` dead center (above the columns).
5. In JS, run a GSAP counter to 100%.
6. In `onComplete`, fade out the text.
7. Use `gsap.to(".column")` with a staggered timeline (`stagger: 0.1`, `yPercent: -100`, `ease: "power4.inOut"`) to slide each column up sequentially, revealing the hero section underneath like window blinds opening.
8. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
