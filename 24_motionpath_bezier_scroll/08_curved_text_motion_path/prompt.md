# 🤖 AI Prompt: Curved Kinetic Wave Typography (MotionPathPlugin)

Copy and paste this prompt into your AI assistant to replicate or adapt this effect in your project:

```markdown
Create an Awwwards-style curved kinetic wave typography scrub where oversized words travel and tilt along an undulating sinusoidal SVG curve using GSAP ScrollTrigger and MotionPathPlugin.

### Requirements:
1. **Wave Curve & Typography**:
   - An undulating sinusoidal SVG path spanning across the stage (`M 50 400 C 300 100, 500 100, 800 400 C 1100 700 ...`).
   - High-impact bold typography ('Space Grotesk', font-weight: 900) broken into individual span elements (`THE`, `FUTURE`, `OF`, `DIGITAL`, `INTERACTION`...).
   - Vibrant neon text glow accents (cyan, purple, pink, emerald).

2. **GSAP Word Staggering & Auto-Rotation (The Core Formula)**:
   - Synchronize all words along the spline with phase progression offsets:
     ```javascript
     const wordSpacing = 0.085;
     words.forEach((word, index) => {
       const startProgress = index * wordSpacing;
       tl.fromTo(word, 
         { opacity: 0, scale: 0.8 },
         {
           opacity: 1,
           scale: 1,
           motionPath: {
             path: "#wavePath",
             align: "#wavePath",
             alignOrigin: [0.5, 0.5],
             autoRotate: true, // Words bank and orient to the wave crests & troughs
             start: startProgress,
             end: 0.55 + startProgress
           },
           ease: "none"
         }, 0
       );
     });
     ```
   - Smooth 60FPS scroll scrubbing with responsive font clamping.
```
