# 🤖 AI Prompt: Velocity Swipe Card Stack Deck (GSAP Draggable)

Copy and paste this prompt into your AI assistant to replicate or adapt this effect in your project:

```markdown
Create a Tinder-style swipeable card deck interface with realistic angular rotation, threshold detection, and automatic stack elevation using GSAP and Draggable.

### Requirements:
1. **Stack Hierarchy**:
   - A vertical card stack where background cards are scaled down and offset vertically:
     `y: index * 14, scale: 1 - index * 0.05, opacity: 1 - index * 0.15`.
   - ACCEPT and PASS stamp badges that dynamically fade in based on lateral drag offset.
   - Action buttons (PASS, ACCEPT, Reset).

2. **GSAP Swipe Physics Mechanics (The Core Formula)**:
   - Apply `Draggable.create(topCard, { type: "x,y", edgeResistance: 0.65 })` to the active top card.
   - On `onDrag`:
     * Bank card angle proportionally to x position: `rotation: this.x * 0.08`.
     * Calculate opacity of ACCEPT/PASS stamps: `Math.min(1, (Math.abs(this.x) - 20) / 80)`.
   - On `onRelease`:
     * If `Math.abs(this.x) > swipeThreshold` (120px): fling the card offscreen (`x: direction * 600, opacity: 0`), remove it from the stack array, and promote the next card up.
     * If below threshold: spring card smoothly back to center with `elastic.out(1, 0.6)`.
```
