# AI Component Prompt: Podcast Episode Card Player (Audio & Media Players)

```markdown
Implement the 'Podcast Episode Card Player' component from the Audio & Media Players system into the webpage layout.

Component Specifications:
- Category: Media & Interactive
- Component Pattern: audio
- Accent Color: #10b981
- Aesthetic Standard: Production-grade dark UI, glassmorphic backdrop filter, accessible contrast
- Responsiveness: Fluid clamp sizing and mobile-friendly flex/grid layout

Design Tokens:
```css
:root {
  --comp-accent: #10b981;
  --comp-surface: #0f1420;
  --comp-border: rgba(255, 255, 255, 0.08);
  --comp-radius: 16px;
}
```

Usage Guidelines:
- Keep the component modular and isolated from global styles.
- Support hover, active, and keyboard focus accessibility rings (`outline: 2px solid #10b981`).
- Pair with smooth micro-interactions (0.2s cubic-bezier ease transitions).
```
