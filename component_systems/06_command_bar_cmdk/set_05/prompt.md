# AI Component Prompt: Fintech Quick Transaction Bar (Command Bar & Search (Cmd+K))

```markdown
Implement the 'Fintech Quick Transaction Bar' component from the Command Bar & Search (Cmd+K) system into the webpage layout.

Component Specifications:
- Category: Forms & Search
- Component Pattern: cmdk
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
