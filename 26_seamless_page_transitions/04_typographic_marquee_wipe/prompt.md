# 🤖 AI Prompt: Typographic Marquee Wipe Transition (GSAP)

Copy and paste this prompt into your AI assistant to replicate or adapt this effect in your project:

```markdown
Create a bold Awwwards-style full-screen page wipe using running typographic marquees and GSAP Timelines.

### Requirements:
1. **Marquee Curtain Layer**:
   - Fullscreen overlay (`position: fixed, inset: 0`) colored vibrantly (`#7c3aed`).
   - Two running text tracks with massive kinetic typography ('Space Grotesk', font-size 5rem+) continuously scrolling in opposing directions via CSS keyframes.
   - Initial state positioned offscreen below the viewport (`transform: translateY(100%)`).

2. **GSAP Timeline Vertical Sweep Mechanics (The Core Formula)**:
   - On transition trigger:
     1. Animate curtain upward: `gsap.fromTo(curtain, { yPercent: 100 }, { yPercent: 0, duration: 0.65, ease: "power4.inOut" })`.
     2. Swap DOM views at the midpoint: hide old view, unhide new view, reset child positions.
     3. Animate curtain off the top of the viewport: `gsap.to(curtain, { yPercent: -100, duration: 0.65, ease: "power4.inOut" })`.
     4. Stagger reveal new page content: `gsap.to(newView.children, { y: 0, opacity: 1, duration: 0.45, stagger: 0.08 })`.
```
