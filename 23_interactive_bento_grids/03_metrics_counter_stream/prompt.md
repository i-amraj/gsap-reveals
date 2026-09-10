# 🤖 AI Prompt: Live Metrics & Stream Counters Bento Card

Copy and paste this prompt into your AI assistant to replicate or adapt this effect in your project:

```markdown
Create a high-tech Bento Grid telemetry dashboard showcasing live metric rollups and animated SVG charts using Vanilla JS and GSAP.

### Requirements:
1. **Layout & UI**:
   - Dark mode telemetry theme (`#08090e`) with glassmorphic cards and subtle borders.
   - Distinct metric cards:
     * Request throughput counter with dynamic SVG sparkline curve.
     * Radial progress gauge showing memory bandwidth in GB/s.
     * Edge latency millisecond counter with glowing cyan accents.
     * Horizontal distribution bars showing regional serverless cost savings.
   - Monospace typography ('JetBrains Mono') for all numbers and telemetry data.

2. **GSAP Number Rollup & Ticker Animation (The Core Mechanics)**:
   - Animate numeric values using dummy state objects in GSAP:
     `gsap.to(state, { reqs: 84920, duration: 2.2, ease: "power2.out", onUpdate: ... })`.
   - Update text nodes dynamically with comma formatting (`toLocaleString()`).
   - Add a subtle background interval that applies micro-jitter to numbers to simulate real-time live network traffic.

3. **SVG Path Drawing**:
   - Programmatically construct smooth cubic bezier SVG curves (`M ... C ...`).
   - Animate the sparkline stroke using SVG `strokeDasharray` and `strokeDashoffset` from length down to 0.
   - Animate radial circular gauge offset (`stroke-dashoffset`) synchronized with the counter rollups.
```
