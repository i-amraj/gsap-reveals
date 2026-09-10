# 🤖 AI Prompt: Branching Neural Pipeline Fluid Pulse (MotionPathPlugin)

Copy and paste this prompt into your AI assistant to replicate or adapt this effect in your project:

```markdown
Create an interactive electronic circuit network where data energy pulses travel along bifurcating SVG Bezier pipeline conduits using GSAP MotionPathPlugin.

### Requirements:
1. **Network Topology**:
   - Central ingest source node (`Neural Ingest`) on the left.
   - Multiple destination nodes on the right (`Inference Engine`, `Vector Memory`, `Zero Trust HSM`).
   - SVG conduit paths connecting source to each target using curved cubic beziers.

2. **GSAP Energy Packet Motion Mechanics (The Core Formula)**:
   - On node click or periodic trigger, spawn an ephemeral energy orb and animate it through the targeted SVG conduit:
     ```javascript
     gsap.to(packet, {
       motionPath: {
         path: targetPath,
         align: targetPath,
         alignOrigin: [0.5, 0.5]
       },
       duration: 1.2,
       ease: "power2.inOut",
       onComplete: () => {
         // Impact burst and node bounce feedback
         gsap.to(packet, { scale: 2, opacity: 0, duration: 0.25, onComplete: () => packet.remove() });
         gsap.fromTo(destNode, { scale: 1.1 }, { scale: 1, duration: 0.4 });
       }
     });
     ```
   - Conduit stroke illuminates with neon bloom while packet traverses it.

3. **Burst Mode**:
   - Provide a "Broadcast Burst" action triggering sequential staggered pulses across all branches simultaneously.
```
