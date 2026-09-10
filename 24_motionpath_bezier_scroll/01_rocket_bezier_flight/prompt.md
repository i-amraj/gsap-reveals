# 🤖 AI Prompt: Rocket Bezier Flight Scrub (MotionPathPlugin)

Copy and paste this prompt into your AI assistant to replicate or adapt this effect in your project:

```markdown
Create an award-winning scroll-driven flight journey where an SVG element travels smoothly along an organic cubic Bezier spline using GSAP ScrollTrigger and MotionPathPlugin.

### Requirements:
1. **SVG Bezier Path & Visuals**:
   - An SVG container spanning a tall vertical section (`1600px`).
   - A curved path definition using cubic bezier curves (`d="M 150 100 C 650 250, 850 550, 450 800 C 100 1050, 150 1350, 850 1500"`).
   - Dual-path rendering: A faint dashed background guide track and a glowing animated path with gradient strokes and SVG drop-shadow filter.
   - Interactive waypoint milestone cards along the journey with subtle glassmorphism.

2. **GSAP MotionPath Scrubbing Mechanics (The Core Formula)**:
   - Register plugins: `gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)`.
   - Synchronize the flight using a unified scrub timeline:
     ```javascript
     const tl = gsap.timeline({
       scrollTrigger: { trigger: "#flightSection", start: "top 20%", end: "bottom 90%", scrub: 1.2 }
     });

     // Draw path simultaneously
     tl.to("#flightPath", { strokeDashoffset: 0, ease: "none" }, 0);

     // Guide vessel along curve
     tl.to("#rocket", {
       motionPath: {
         path: "#flightPath",
         align: "#flightPath",
         alignOrigin: [0.5, 0.5],
         autoRotate: 90
       },
       ease: "none"
     }, 0);
     ```

3. **Waypoint Triggering**:
   - Create separate `ScrollTrigger.create()` observers for waypoint milestones to activate and glow as the vessel passes by.
```
