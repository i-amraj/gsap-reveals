# AI Component Prompt: Striped Modern Data Table (Data Tables & List Views)

```markdown
Implement the 'Striped Modern Data Table' component from the Data Tables & List Views system into the webpage layout.

Component Specifications:
- Category: Data & Grids
- Component Pattern: tables
- Accent Color: #38bdf8
- Aesthetic Standard: Production-grade dark UI, glassmorphic backdrop filter, accessible contrast
- Responsiveness: Fluid clamp sizing and mobile-friendly flex/grid layout

Design Tokens:
```css
:root {
  --comp-accent: #38bdf8;
  --comp-surface: #0f1420;
  --comp-border: rgba(255, 255, 255, 0.08);
  --comp-radius: 16px;
}
```

Usage Guidelines:
- Keep the component modular and isolated from global styles.
- Support hover, active, and keyboard focus accessibility rings (`outline: 2px solid #38bdf8`).
- Pair with smooth micro-interactions (0.2s cubic-bezier ease transitions).
```
