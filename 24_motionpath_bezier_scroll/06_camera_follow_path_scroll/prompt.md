# 🤖 AI Prompt: Drone Camera Flight Scroll Viewport (MotionPathPlugin)

Copy and paste this prompt into your AI assistant to replicate or adapt this effect in your project:

```markdown
Create a cinematic aerial drone reconnaissance viewport where a terrain background translates along an SVG path on scroll while an interactive HUD targeting overlay stays pinned using GSAP ScrollTrigger and MotionPathPlugin.

### Requirements:
1. **Viewport & HUD Structure**:
   - A sticky HUD overlay viewport (`position: sticky`, `backdrop-filter: blur(4px)`) containing a glowing reticle crosshair and monospace telemetry readouts (ALT, SPEED, HEADING).
   - An oversized world terrain layer containing landmark callouts and an SVG flight trajectory spline.

2. **Inverse Camera Kinematics (The Core Formula)**:
   - Instead of moving the reticle, animate the world layer along the trajectory curve using `motionPath`:
     ```javascript
     gsap.to("#worldLayer", {
       scrollTrigger: {
         trigger: "#viewportStage",
         start: "top 15%",
         end: "bottom 85%",
         scrub: 1.2,
         onUpdate: (self) => {
           // Dynamically calculate telemetry numbers based on scroll progress
           const p = self.progress;
           hudAlt.textContent = `${Math.floor(1240 + Math.sin(p * Math.PI) * 450)}m`;
           hudSpeed.textContent = `${Math.floor(420 + p * 85)}km/h`;
         }
       },
       motionPath: {
         path: "#cameraPath",
         align: "#cameraPath",
         alignOrigin: [0.5, 0.5]
       },
       ease: "none"
     });
     ```
   - This creates an immersive first-person flight illusion across the canvas.
```
