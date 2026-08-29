# 🤖 AI Master Prompt: Drag Throw Stacking (`drag_throw_stacking`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Drag Throw Stacking Cards effect (`drag_throw_stacking`) using GSAP 3 and Draggable.

Requirements:
1. Create a single container holding a stack of 4 cards positioned absolutely on top of each other.
2. The cards are static (no scrolling needed for this specific demo).
3. Initialize `gsap.Draggable` on the top card.
4. Allow the user to drag the top card around.
5. `onDragEnd`, if the user has dragged the card far enough from the center, animate it flying completely off the screen and remove it from the DOM, revealing the next card. If not dragged far enough, snap it back to the center.
6. Make sure to provide complete HTML5, CSS3, and JS files, including the GSAP Draggable CDN.
```
