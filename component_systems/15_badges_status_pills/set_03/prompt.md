# AI Component Prompt: Technical Monospace Hash Tag (Badges & Status Pills)

```markdown
Implement the 'Technical Monospace Hash Tag' component from the Badges & Status Pills system into the webpage layout.

Component Specifications:
- Category: Indicators & Badges
- Component Pattern: badges
- Accent Color: #a855f7
- Aesthetic Standard: Production-grade dark UI, glassmorphic backdrop filter, accessible contrast
- Responsiveness: Fluid clamp sizing and mobile-friendly flex/grid layout

Design Tokens:
```css
:root {
  --comp-accent: #a855f7;
  --comp-surface: #0f1420;
  --comp-border: rgba(255, 255, 255, 0.08);
  --comp-radius: 16px;
}
```

Usage Guidelines:
- Keep the component modular and isolated from global styles.
- Support hover, active, and keyboard focus accessibility rings (`outline: 2px solid #a855f7`).
- Pair with smooth micro-interactions (0.2s cubic-bezier ease transitions).
```
