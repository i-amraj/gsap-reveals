# 🤖 AI Prompt: Glassmorphism Gradient Orbit Bento Card

Copy and paste this prompt into your AI assistant to replicate or adapt this effect in your project:

```markdown
Create a luxury glassmorphism bento card effect with revolving gradient orbs using Vanilla CSS and GSAP.

### Requirements:
1. **Layered Structure**:
   - Card container has high-level frosted glass styling (`backdrop-filter: blur(32px)`, `background: rgba(10, 12, 20, 0.45)`, subtle specular borders).
   - An under-surface layer (`.orb-canvas`) containing multiple blurred colored radial orbs (purple `#8b5cf6`, cyan `#06b6d4`, emerald `#10b981`, amber `#f59e0b`, rose `#ec4899`).
   - High-contrast typography layer on top displaying technical specifications and features.

2. **GSAP Orbit Motion & Magnetic Attraction (The Core Mechanics)**:
   - Run infinite floating trajectories on the orbs using yoyo loops:
     `gsap.to(orb, { x: "+=100", y: "+=70", duration: 7, repeat: -1, yoyo: true, ease: "sine.inOut" })`.
   - On `mousemove` over the card:
     * Calculate normalized cursor offset from card center (`normX`, `normY`).
     * Magnetically pull orbs toward the cursor using `gsap.to(orb, { x: normX * 50, y: normY * 50, duration: 0.6, overwrite: "auto" })`.
   - On `mouseleave`:
     * Smoothly release orbs back to their orbital paths (`overwrite: "auto"`).
```
