# 🤖 AI Prompt: Dynamic Mouse Spotlight Glow Bento Grid

Copy and paste this prompt into your AI assistant (ChatGPT, Claude, or Antigravity) to replicate or adapt this effect in your project:

```markdown
Create an ultra-modern Bento Grid section inspired by Linear.app and Vercel design aesthetics using Vanilla HTML, CSS, and GSAP.

### Requirements:
1. **Layout**:
   - Modern Bento Grid layout (CSS Grid) with varied column spans (e.g. 2-column span cards mixed with 1-column span cards).
   - Glassmorphism dark-mode cards with semi-transparent dark backgrounds (`rgba(18, 20, 29, 0.7)`), backdrop-filter blur, and subtle borders.
   - Clean typography using Google Fonts ('Space Grotesk' for headings, 'Plus Jakarta Sans' for body text).

2. **Mouse Spotlight Effect (The Core Technique)**:
   - On cursor movement over the container, calculate the relative `(x, y)` coordinate for each card.
   - Set CSS custom variables `--mouse-x` and `--mouse-y` dynamically on the cards.
   - Use a `::before` pseudo-element with `radial-gradient` that reveals glowing purple/cyan illumination precisely under the cursor.
   - Use a dual-layered border mask (`-webkit-mask-composite: xor`) so the border illuminates vibrantly as the cursor approaches edges.

3. **GSAP Micro-Interactions**:
   - Staggered entrance animation on page load using `gsap.from()`.
   - Subtle 3D perspective tilt (`rotateX`, `rotateY`, `transformPerspective: 1000`) following mouse position on hover, with elastic easing recovery on `mouseleave`.
   - Performance optimized at 60FPS using GPU-accelerated transforms.
```
