# 🤖 AI Prompt: Auto-Orient Rollercoaster Cards (MotionPathPlugin)

Copy and paste this prompt into your AI assistant to replicate or adapt this effect in your project:

```markdown
Create an interactive rollercoaster card train traveling along an SVG bezier curve with dynamic tangent auto-rotation using GSAP MotionPathPlugin and ScrollTrigger.

### Requirements:
1. **Curved Rollercoaster Track**:
   - An SVG track element with a vibrant gradient stroke (`linear-gradient`) spanning a scrollable section.
   - 4 glassmorphic feature cards styled with icons, titles, and tags.

2. **GSAP Multi-Element Path Offset Mechanics (The Core Formula)**:
   - Synchronize all cards to follow the SVG path using `MotionPathPlugin` inside a scroll-scrubbed timeline:
     ```javascript
     cards.forEach((card, index) => {
       const offset = index * 0.12; // Phase gap between consecutive cards
       tl.to(card, {
         motionPath: {
           path: "#coasterPath",
           align: "#coasterPath",
           alignOrigin: [0.5, 0.5],
           autoRotate: true,       // Card rotates to match instantaneous curve tangent
           start: offset,
           end: 0.65 + offset
         },
         ease: "none"
       }, 0);
     });
     ```
   - Cards stay spaced evenly like a rollercoaster train while tilting realistically through banked turns.
```
