# AI Component Prompt: Twitter / X Embed Style Cards (Testimonials & Social Proof)

```markdown
Implement the 'Twitter / X Embed Style Cards' component from the Testimonials & Social Proof system into the webpage layout.

Component Specifications:
- Category: Trust & Conversion
- Component Pattern: testimonials
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
