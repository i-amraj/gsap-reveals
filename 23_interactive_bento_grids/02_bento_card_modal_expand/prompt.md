# 🤖 AI Prompt: Card-to-Modal Seamless Expand (GSAP Flip)

Copy and paste this prompt into your AI assistant to replicate or adapt this effect in your project:

```markdown
Create a seamless card-to-fullscreen modal expansion interaction using Vanilla JavaScript and GSAP Flip Plugin.

### Requirements:
1. **Layout**:
   - Bento Grid layout with responsive cards that show a teaser preview (title, summary, metric badge).
   - Each card contains hidden extended details (`.expanded-content`) like charts, telemetry data, and metric boxes.
   - Dark theme styling with deep background (`#0b0d14`), elevated card surfaces (`#141724`), and refined borders.

2. **GSAP Flip Plugin Expansion (The Core Mechanics)**:
   - When any card is clicked:
     1. Capture initial card geometry using `Flip.getState(card)`.
     2. Apply `.is-expanded` class which sets fixed viewport positioning (`top: 50%`, `left: 50%`, `transform: translate(-50%, -50%)`, fixed width).
     3. Trigger `Flip.from(state, { duration: 0.55, ease: "power3.inOut" })` to animate the layout morph seamlessly with 60FPS precision.
     4. Choreograph the entrance of the `.expanded-content` after the card finishes expanding.
   - Reveal a blurred backdrop overlay (`backdrop-filter: blur(12px)`) and a circular close button.

3. **Smooth Dismissal**:
   - Clicking the close button, backdrop, or pressing Escape key gracefully reverses the animation:
     1. Fade out the extended content.
     2. Call `Flip.getState(card)` -> remove `.is-expanded` -> `Flip.from()` back to its original grid coordinates.
```
