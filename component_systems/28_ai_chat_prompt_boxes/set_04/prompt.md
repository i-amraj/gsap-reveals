# AI Component Prompt: Voice Audio Waveform Input Bar (AI Chat & Prompt Boxes)

```markdown
Implement the 'Voice Audio Waveform Input Bar' component from the AI Chat & Prompt Boxes system into the webpage layout.

Component Specifications:
- Category: AI & Chat Interfaces
- Component Pattern: ai_chat
- Accent Color: #ec4899
- Aesthetic Standard: Production-grade dark UI, glassmorphic backdrop filter, accessible contrast
- Responsiveness: Fluid clamp sizing and mobile-friendly flex/grid layout

Design Tokens:
```css
:root {
  --comp-accent: #ec4899;
  --comp-surface: #0f1420;
  --comp-border: rgba(255, 255, 255, 0.08);
  --comp-radius: 16px;
}
```

Usage Guidelines:
- Keep the component modular and isolated from global styles.
- Support hover, active, and keyboard focus accessibility rings (`outline: 2px solid #ec4899`).
- Pair with smooth micro-interactions (0.2s cubic-bezier ease transitions).
```
