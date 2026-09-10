# 🤖 AI Prompt: Multi-Ball Gravitational Bounce Chamber (GSAP Ticker Physics)

Copy and paste this prompt into your AI assistant to replicate or adapt this effect in your project:

```markdown
Build a 60FPS multi-ball physical bounce simulation chamber with gravity, coefficient of restitution, wall impacts, and live collision counters using the GSAP Ticker.

### Requirements:
1. **Chamber Stage & Stats HUD**:
   - Confined rectangular chamber stage with crosshair cursor.
   - Real-time HUD counters displaying TOTAL BALLS and TOTAL BOUNCES.
   - Spawn 10x burst button and Clear Chamber button.

2. **Kinematic Physics Engine (The Core Formula)**:
   - Run physics frame calculations using `gsap.ticker.add(loop)`:
     ```javascript
     b.vy += gravity;      // Apply gravitational constant (0.65)
     b.vx *= friction;     // Air drag damping (0.992)
     b.x += b.vx;
     b.y += b.vy;

     // Floor collision with coefficient of restitution (e = 0.78)
     if (b.y + b.r > height) {
       b.y = height - b.r;
       b.vy = -b.vy * restitution;
       totalBounces++;
       // Squash on contact
       gsap.fromTo(b.el, { scaleY: 0.7, scaleX: 1.3 }, { scaleY: 1, scaleX: 1, duration: 0.15 });
     }
     ```
   - Handle left, right, and ceiling rebounds similarly.
   - Position updates applied via `gsap.set(b.el, { x: b.x, y: b.y })`.
```
