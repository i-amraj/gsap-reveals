# AI Component Prompt: Destructive Error Alert Box (Alerts, Banners & Toasts)

```markdown
Implement the 'Destructive Error Alert Box' component from the Alerts, Banners & Toasts system into the webpage layout.

Component Specifications:
- Category: Notifications & Alerts
- Component Pattern: alerts
- Accent Color: #ef4444
- Aesthetic Standard: Production-grade dark UI, glassmorphic backdrop filter, accessible contrast
- Responsiveness: Fluid clamp sizing and mobile-friendly flex/grid layout

Design Tokens:
```css
:root {
  --comp-accent: #ef4444;
  --comp-surface: #0f1420;
  --comp-border: rgba(255, 255, 255, 0.08);
  --comp-radius: 16px;
}
```

Usage Guidelines:
- Keep the component modular and isolated from global styles.
- Support hover, active, and keyboard focus accessibility rings (`outline: 2px solid #ef4444`).
- Pair with smooth micro-interactions (0.2s cubic-bezier ease transitions).
```
