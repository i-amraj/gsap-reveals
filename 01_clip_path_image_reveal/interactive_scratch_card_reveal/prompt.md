# 🤖 AI Master Prompt: Interactive Scratch Card Reveal Engine (`interactive_scratch_card_reveal`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create an interactive scratch card coupon image reveal section (`interactive_scratch_card_reveal`) using persistent HTML5 Canvas composite masking.

Requirements:
1. Base ambient artwork layer with dark overlay, centered coupon text, and a Reset/Clear Scratch button.
2. Top HD secret image hidden from DOM (`display: none`) and rendered inside the user's scratched mouse path using `destination-in`.
3. Mouse drag / Touch drag draws thick persistent strokes on an offscreen mask canvas (`lineCap: 'round'`, `lineWidth: 110`).
4. Reset button clears the offscreen canvas mask to reset the scratch card.
5. Provide complete self-contained HTML, CSS, and JS files.
```
