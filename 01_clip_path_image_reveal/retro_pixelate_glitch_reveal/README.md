# 👾 Retro Pixelate Glitch Reveal Engine (`retro_pixelate_glitch_reveal`)

---

## 🎯 Ye Visual Effect Kya Karta Hai?
Mouse move karte hi surface par **8-bit digital pixel blocks aur cyberpunk RGB glitch noise grid cells** illuminate hoke expand hoti hain. HD image inhi pixelated glitch blocks ke andar reveal hoti hai!

---

## 🤖 AI Master Prompt
> Dedicated ready-to-use prompt file: [`prompt.md`](prompt.md)

---

## 🧠 Core Canvas Pixel Glitch Concept
- Canvas pixel grid calculation (`blockSize = 28px`).
- Mouse proximity activates grid blocks with randomized pixel offsets (`shiftX`), animating alpha fade-out.
- `imgCtx.globalCompositeOperation = 'destination-in'` clips HD image inside activated pixel blocks.
