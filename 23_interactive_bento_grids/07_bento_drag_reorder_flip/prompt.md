# 🤖 AI Prompt: Dynamic Bento Filtering & Reordering (GSAP Flip)

Copy and paste this prompt into your AI assistant to replicate or adapt this effect in your project:

```markdown
Create a dynamic Bento Grid filtering and layout reordering interaction using Vanilla JavaScript and GSAP Flip Plugin.

### Requirements:
1. **Layout**:
   - CSS Grid bento layout containing cards belonging to various categories ('ai', 'infra', 'security').
   - Top filter bar with filter buttons and a "Shuffle Order" button.
   - Elegant dark mode UI with card borders and metadata tags.

2. **GSAP Flip Transition Mechanics (The Core Formula)**:
   - When a category filter is clicked:
     1. Record initial coordinates: `const state = Flip.getState(cards)`.
     2. Update DOM classes (hide unselected cards with `display: none` or `.is-hidden`).
     3. Animate layout adaptation:
        `Flip.from(state, { duration: 0.6, ease: "power3.inOut", stagger: 0.05, onEnter: ..., onLeave: ... })`.
   - When the shuffle button is clicked:
     1. Record visible card states.
     2. Reorder DOM nodes randomly inside the grid container.
     3. Animate all items sliding into their new slot positions with zero layout breakage.
```
