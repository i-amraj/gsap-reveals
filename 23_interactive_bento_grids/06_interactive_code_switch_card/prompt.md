# 🤖 AI Prompt: Interactive Code Switcher & Matrix Terminal Bento Card

Copy and paste this prompt into your AI assistant to replicate or adapt this effect in your project:

```markdown
Create a developer-focused Bento Grid card featuring an interactive multi-language code switcher and terminal styling using Vanilla HTML/CSS/JS and GSAP.

### Requirements:
1. **Layout & UI Styling**:
   - Terminal window styling with macOS-style window dots (red, yellow, green).
   - Language tabs for TypeScript, Python, Rust, and cURL.
   - Code window formatted with 'JetBrains Mono' with syntax coloring (keywords, strings, functions, numbers, comments).
   - One-click copy button with clipboard API feedback and animated state checkmark.

2. **GSAP Tab Switching Transition**:
   - When switching languages:
     1. Animate current code snippet out (`opacity: 0, y: -10, duration: 0.15`).
     2. Inject new syntax-highlighted HTML template.
     3. Animate new snippet into place (`fromTo({ opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.35 })`).
   - Animate the copy button with elastic button feedback on click (`gsap.fromTo(btn, { scale: 0.95 }, { scale: 1, ease: "elastic.out(1, 0.4)" })`).
```
