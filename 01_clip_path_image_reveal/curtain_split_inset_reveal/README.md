# 🎭 Vertical Curtain Split Reveal (`curtain_split_inset_reveal`)

---

## 🎯 Ye Visual Effect Kya Karta Hai?
Center line se top aur bottom ki taraf image curtain ki tarah vertical direction me khulti hai. 

## 🧠 Core CSS Concept
- `clip-path: inset(50% 0% 50% 0%)` ➔ Top 50% aur Bottom 50% hidden (center patli line).
- `clip-path: inset(0% 0% 0% 0%)` ➔ Completely open & visible image.

---

## 🤖 AI Master Prompt
> Dedicated ready-to-use prompt file: [`prompt.md`](prompt.md)

---

## 🛠️ GSAP Code
```javascript
gsap.registerPlugin(ScrollTrigger);

gsap.to(".curtain-img", {
  clipPath: "inset(0% 0% 0% 0%)",
  ease: "none",
  scrollTrigger: {
    trigger: ".curtain-container",
    start: "top top",
    end: "+=1500",
    scrub: 1,
    pin: true
  }
});
```
