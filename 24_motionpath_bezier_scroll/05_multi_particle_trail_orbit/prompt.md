# 🤖 AI Prompt: Luminescent Multi-Particle Orbit Swarm (MotionPathPlugin)

Copy and paste this prompt into your AI assistant to replicate or adapt this effect in your project:

```markdown
Create a luminescent multi-particle swarm traveling along a closed-loop infinity (figure-8) SVG path using GSAP MotionPathPlugin.

### Requirements:
1. **SVG Path Geometry**:
   - An SVG canvas containing a closed lemniscate / figure-8 path (`M 500 250 C 650 100 ... Z`).
   - A particle container layer positioned over the canvas.

2. **GSAP Multi-Particle Stagger Formula (The Core Mechanics)**:
   - Programmatically spawn 30+ glowing particles with randomized sizes (4-12px) and neon palettes (purple, cyan, pink, emerald).
   - Evenly distribute each particle's starting position along the closed loop from `0` to `1`:
     ```javascript
     const startProgress = i / totalParticles;
     gsap.to(particle, {
       motionPath: {
         path: path,
         align: path,
         alignOrigin: [0.5, 0.5],
         start: startProgress,
         end: startProgress + 1 // Completes full loop seamlessly
       },
       duration: 6,
       repeat: -1,
       ease: "none"
     });
     ```
   - Add asynchronous scale pulsation (`scale: 1.5, yoyo: true, repeat: -1, ease: "sine.inOut"`).

3. **Interactive Velocity Control**:
   - Allow user to toggle animation speed dynamically using `tween.timeScale(speed)` (e.g. 0.4x slow flow, 1x normal, 2.5x hyper warp).
```
