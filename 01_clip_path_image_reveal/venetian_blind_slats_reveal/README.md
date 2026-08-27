# 🪟 Venetian Blind Metallic Slats Reveal Engine (`venetian_blind_slats_reveal`)

---

## 🎯 Ye Visual Effect Kya Karta Hai?
Mouse move karte hi surface par **horizontal metallic shutter slats (parde/pattiya)** ek-ek karke 3D rotation angle par flip hoke open hoti hain. HD image inhi open metallic slats ke gaps ke andar reveal hoti hai!

---

## 🤖 AI Master Prompt
> Dedicated ready-to-use prompt file: [`prompt.md`](prompt.md)

---

## 🧠 Core Canvas Slats Concept
- Horizontal slat grid calculation (`slatHeight = 22px`).
- Mouse proximity calculates slat flip angle (`0deg` closed ➔ `90deg` open), expanding mask opening width.
- `imgCtx.globalCompositeOperation = 'destination-in'` clips HD image inside open shutter slat paths.
