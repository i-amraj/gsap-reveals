# 🎟️ Interactive Scratch Card Reveal Engine (`interactive_scratch_card_reveal`)

---

## 🎯 Ye Visual Effect Kya Karta Hai?
User screen par mouse/touch scratch karta hai, aur scratch strokes andar ki HD image reveal karte hain! Scratched paths screen par persistent rehte hain jab tak Clear button press na ho.

---

## 🤖 AI Master Prompt
> Dedicated ready-to-use prompt file: [`prompt.md`](prompt.md)

---

## 🧠 Core Canvas Scratch Concept
- `maskCtx.lineCap = 'round'`
- `maskCtx.lineWidth = 110`
- `imgCtx.globalCompositeOperation = 'destination-in'` clips the HD image inside the user's scratched path!
