# AI Component Prompt: Minimalist Dot Indicator Slider (Sliders & Carousels)

```markdown
Implement the 'Minimalist Dot Indicator Slider' component from the Sliders & Carousels system into the webpage layout.

Component Specifications:
- Category: Media & Galleries
- Component Pattern: carousels
- Accent Color: #c084fc
- Aesthetic Standard: Production-grade dark UI, glassmorphic backdrop filter, accessible contrast
- Responsiveness: Fluid clamp sizing and mobile-friendly flex/grid layout

Design Tokens:
```css
:root {
  --comp-accent: #c084fc;
  --comp-surface: #0f1420;
  --comp-border: rgba(255, 255, 255, 0.08);
  --comp-radius: 16px;
}
```

Usage Guidelines:
- Keep the component modular and isolated from global styles.
- Support hover, active, and keyboard focus accessibility rings (`outline: 2px solid #c084fc`).
- Pair with smooth micro-interactions (0.2s cubic-bezier ease transitions).
```
