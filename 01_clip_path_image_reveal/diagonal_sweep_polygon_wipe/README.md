# 📐 Diagonal Sweep Polygon Wipe Reveal (`diagonal_sweep_polygon_wipe`)

---

## 🎯 Ye Visual Effect Kya Karta Hai?
Top-Left corner se Bottom-Right corner ki taraf diagonal angle me wipe reveal transition.

## 🧠 Core CSS Concept
- `clip-path: polygon(0 0, 0 0, 0 100%, 0 100%)` ➔ Image hidden (zero-width diagonal strip).
- `clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)` ➔ Fully revealed image rectangle.

---

## 🤖 AI Master Prompt
> Dedicated ready-to-use prompt file: [`prompt.md`](prompt.md)

---

## 🛠️ GSAP Code
```javascript
gsap.registerPlugin(ScrollTrigger);

gsap.to(".wipe-img", {
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  ease: "none",
  scrollTrigger: {
    trigger: ".wipe-container",
    start: "top top",
    end: "+=1500",
    scrub: 1,
    pin: true
  }
});
```
