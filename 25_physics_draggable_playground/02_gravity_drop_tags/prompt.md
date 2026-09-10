# 🤖 AI Prompt: Gravitational Cascade Tags Drop (GSAP Bounce Physics)

Copy and paste this prompt into your AI assistant to replicate or adapt this effect in your project:

```markdown
Create a physical gravity simulation where technology tags cascade down from the ceiling, bounce against the floor, settle into realistic piles, and remain interactively draggable using GSAP and Draggable.

### Requirements:
1. **Stage Setup**:
   - Canvas container with a glowing ground floor boundary line.
   - Distinct tags styled with glassmorphism backgrounds and colored neon borders.

2. **Gravitational Freefall & Floor Bounce Mechanics (The Core Formula)**:
   - Randomize drop starting coordinates: `startY = -60`, `startX = random(0.15 * width, 0.85 * width)`.
   - Animate falling tags towards the ground line (`groundY = 440`) using GSAP's `bounce.out` ease:
     ```javascript
     gsap.to(tag, {
       y: targetY,
       x: targetX,
       rotation: (Math.random() - 0.5) * 45, // Angular momentum on landing
       duration: 1.2 + Math.random() * 0.4,
       delay: index * 0.08,
       ease: "bounce.out",
       onComplete: () => {
         // Enable physical dragging once settled
         Draggable.create(tag, { bounds: stage, edgeResistance: 0.8, type: "x,y" });
       }
     });
     ```

3. **Re-trigger Button**:
   - Provide a "Drop Cascade" button that sweeps the stage clean and drops a fresh avalanche of tags.
```
