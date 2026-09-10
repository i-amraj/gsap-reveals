# AI Component Prompt: Arrow Pointer Directional Tip (Tooltips & Popovers)

```markdown
Implement the 'Arrow Pointer Directional Tip' component from the Tooltips & Popovers system into the webpage layout.

Component Specifications:
- Category: Hints & Overlays
- Component Pattern: tooltips
- Accent Color: #f59e0b
- Aesthetic Standard: Production-grade dark UI, glassmorphic backdrop filter, accessible contrast
- Responsiveness: Fluid clamp sizing and mobile-friendly flex/grid layout

Design Tokens:
```css
:root {
  --comp-accent: #f59e0b;
  --comp-surface: #0f1420;
  --comp-border: rgba(255, 255, 255, 0.08);
  --comp-radius: 16px;
}
```

Usage Guidelines:
- Keep the component modular and isolated from global styles.
- Support hover, active, and keyboard focus accessibility rings (`outline: 2px solid #f59e0b`).
- Pair with smooth micro-interactions (0.2s cubic-bezier ease transitions).
```
