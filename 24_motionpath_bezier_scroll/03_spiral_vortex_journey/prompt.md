# 🤖 AI Prompt: 3D Spiral Vortex Journey (MotionPathPlugin)

Copy and paste this prompt into your AI assistant to replicate or adapt this effect in your project:

```markdown
Create a 3D spiral vortex journey where UI elements emerge from a center singularity and zoom toward the viewport along an Archimedean spiral SVG path using GSAP MotionPathPlugin and ScrollTrigger.

### Requirements:
1. **Spiral Path Definition**:
   - An SVG container rendered with a logarithmic/Archimedean spiral curve (`d="M 500 500 C ..."`).
   - Glowing center singularity core with radial blur and neon backdrop shadow.
   - Distinct traveling node pills styled with glassmorphism and icons.

2. **GSAP 3D Acceleration Mechanics (The Core Formula)**:
   - Combine `motionPath` progression with simultaneous scaling to simulate optical 3D perspective:
     ```javascript
     tl.fromTo(node, 
       { scale: 0.1, opacity: 0 },
       {
         scale: 1.3,
         opacity: 1,
         motionPath: {
           path: "#spiralPath",
           align: "#spiralPath",
           alignOrigin: [0.5, 0.5],
           autoRotate: true,
           start: offset,
           end: 0.65 + offset
         },
         ease: "power1.in" // Acceleration as items approach screen
       }, 0
     );
     ```
   - Stroke dashoffset of the spiral is simultaneously drawn on scroll.
```
