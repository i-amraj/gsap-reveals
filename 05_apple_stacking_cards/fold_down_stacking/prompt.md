# 🤖 AI Master Prompt: Fold Down Stacking (`fold_down_stacking`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Fold Down Stacking Cards effect (`fold_down_stacking`) using GSAP 3 and ScrollTrigger.

Requirements:
1. Create a vertical scrolling container with 4 pinned cards.
2. Ensure the main wrapper has `perspective: 1500px`.
3. When the next card scrolls up and covers the current pinned card, the current card should fold down like a laptop hinge:
   - `transform-origin: bottom center`
   - `rotateX` backwards (e.g. `rotateX: 60deg`)
   - `opacity` fades slightly.
4. This creates an effect where cards fold flat onto the floor as new ones appear.
5. Provide complete HTML5, CSS3, and JS files.
```
