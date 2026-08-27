# 🟡 Retro Halftone Dot Matrix Scanner Reveal Engine (`halftone_dot_matrix_reveal`)

---

## 🎯 Ye Visual Effect Kya Karta Hai?
Mouse move karte hi surface par **expanding halftone dots aur pop-art newspaper matrix grids** illuminate hoke activate hote hain. HD image keval inhi retro halftone dots ke andar reveal hoti hai!

---

## 🤖 AI Master Prompt
> Dedicated ready-to-use prompt file: [`prompt.md`](prompt.md)

---

## 🧠 Core Canvas Halftone Concept
- Halftone grid cells calculate dot radii based on mouse cursor distance.
- `imgCtx.globalCompositeOperation = 'destination-in'` clips HD image inside halftone dot grid matrix.
