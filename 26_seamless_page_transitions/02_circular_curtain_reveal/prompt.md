# 🤖 AI Prompt: Coordinate Circular Mask Curtain Reveal (GSAP ClipPath)

Copy and paste this prompt into your AI assistant to replicate or adapt this effect in your project:

```markdown
Create a circular clip-path page transition where the destination view expands like a liquid ripple originating precisely from the user's cursor click coordinates using Vanilla JavaScript and GSAP.

### Requirements:
1. **Views Setup**:
   - Two full-screen stacked views (`.view-dark` and `.view-cyber`).
   - The top view starts with `clip-path: circle(0% at 50% 50%)` and `pointer-events: none`.
   - Multiple trigger buttons positioned across the page.

2. **GSAP Circular Clip-Path Expansion Mechanics (The Core Formula)**:
   - In the click event handler, capture exact cursor viewport coordinates:
     `const clickX = e.clientX; const clickY = e.clientY;`
   - Animate the destination view's CSS `clipPath` property from 0% to 150%:
     ```javascript
     gsap.fromTo(destinationView, 
       { clipPath: `circle(0% at ${clickX}px ${clickY}px)` },
       {
         clipPath: `circle(150% at ${clickX}px ${clickY}px)`,
         duration: 0.85,
         ease: "power3.inOut"
       }
     );
     ```
   - Stagger the entrance of the destination view's child content (`y: 30, opacity: 0` to `y: 0, opacity: 1`) with a delay.
   - Reverse the transition smoothly when the "Back" button is clicked.
```
