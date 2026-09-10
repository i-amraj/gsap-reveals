# AI Component Prompt: 3D Perspective Card Flipper (Toggle Switches & Flippers)

```markdown
Implement the '3D Perspective Card Flipper' component from the Toggle Switches & Flippers system into the webpage layout.

Component Specifications:
- Category: Controls & Switches
- Component Pattern: switches
- Accent Color: #818cf8
- Aesthetic Standard: Production-grade dark UI, glassmorphic backdrop filter, accessible contrast
- Responsiveness: Fluid clamp sizing and mobile-friendly flex/grid layout

Design Tokens:
```css
:root {
  --comp-accent: #818cf8;
  --comp-surface: #0f1420;
  --comp-border: rgba(255, 255, 255, 0.08);
  --comp-radius: 16px;
}
```

Usage Guidelines:
- Keep the component modular and isolated from global styles.
- Support hover, active, and keyboard focus accessibility rings (`outline: 2px solid #818cf8`).
- Pair with smooth micro-interactions (0.2s cubic-bezier ease transitions).
```
