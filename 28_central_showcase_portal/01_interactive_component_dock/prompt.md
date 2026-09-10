# AI Prompt: macOS Interactive Component Dock & Showcase

```markdown
Create a macOS-inspired interactive component dock launcher using GSAP 3.

Key Requirements:
1. Dynamic Proximity Magnification:
   - Calculate horizontal distance between mouse cursor and each dock icon center.
   - Apply smooth Gaussian magnification curve (scale up to 1.55x, lift y: -22px) with fast GSAP interpolation.
   - Elastic settle back to base scale on mouse leave.
2. Center Stage Preview Switcher:
   - Clicking an icon triggers an iconic bounce jump animation.
   - Center stage card smoothly transitions with quick squash and back.out(1.8) pop-in.
   - 1-Click "Copy AI Prompt" button with floating toast notification.
```
