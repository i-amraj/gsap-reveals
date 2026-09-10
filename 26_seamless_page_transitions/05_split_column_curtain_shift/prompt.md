# 🤖 AI Prompt: Split-Column Alternating Curtain Shift (GSAP)

Copy and paste this prompt into your AI assistant to replicate or adapt this effect in your project:

```markdown
Create an Awwwards-style vertical split-column curtain transition where 5 vertical strips slide in from alternating top/bottom directions and exit oppositely using GSAP Timelines.

### Requirements:
1. **Column Overlay Setup**:
   - A full-screen flex overlay (`position: fixed, inset: 0, display: flex`) containing 5 equal vertical columns (`flex: 1`).
   - Slices tagged with alternating directions: `data-dir="down"` (initial `translateY(-100%)`) and `data-dir="up"` (initial `translateY(100%)`).

2. **GSAP Staggered Alternating Kinematics (The Core Formula)**:
   - On transition trigger:
     1. Stagger animate columns into viewport:
        `tl.fromTo(strip, { yPercent: dir === 'down' ? -100 : 100 }, { yPercent: 0, duration: 0.6, ease: "power3.inOut" }, i * 0.06)`.
     2. Swap DOM views at the peak coverage point.
     3. Animate columns exiting in alternating opposite directions:
        `tl.to(strip, { yPercent: dir === 'down' ? 100 : -100, duration: 0.6, ease: "power3.inOut" })`.
     4. Stagger reveal destination content upon exit.
```
