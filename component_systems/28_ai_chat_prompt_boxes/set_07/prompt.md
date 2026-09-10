# AI Component Prompt: Copy & Regenerate Action Bar (AI Chat & Prompt Boxes)

```markdown
Implement the 'Copy & Regenerate Action Bar' component from the AI Chat & Prompt Boxes system into the webpage layout.

Component Specifications:
- Category: AI & Chat Interfaces
- Component Pattern: ai_chat
- Accent Color: #f8fafc
- Aesthetic Standard: Production-grade dark UI, glassmorphic backdrop filter, accessible contrast
- Responsiveness: Fluid clamp sizing and mobile-friendly flex/grid layout

Design Tokens:
```css
:root {
  --comp-accent: #f8fafc;
  --comp-surface: #0f1420;
  --comp-border: rgba(255, 255, 255, 0.08);
  --comp-radius: 16px;
}
```

Usage Guidelines:
- Keep the component modular and isolated from global styles.
- Support hover, active, and keyboard focus accessibility rings (`outline: 2px solid #f8fafc`).
- Pair with smooth micro-interactions (0.2s cubic-bezier ease transitions).
```
