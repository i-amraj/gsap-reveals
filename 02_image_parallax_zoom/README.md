# 🏔️ Style 1.2: Image Parallax Depth & Scale Zoom (`02_image_parallax_zoom`)

---

## 🎯 Ye Visual Effect Kya Karta Hai?

Apple.com aur Awwwards websites ka sabse popular effect: **Parallax Scale Zoom & Depth Motion on Scroll**!
Jab user page ko niche scroll karta hai, toh image container ke andar image smooth scale-up (`scale: 1.0` ➔ `1.4`) hoti hai aur slow speed (`yPercent: -20`) par vertical direction me shift hoti hai. Isse flat image me 3D depth aur cinematic camera zoom feel aata hai.

---

## 🧠 Core GSAP & CSS Concepts

### 1. CSS Outer Mask Container
Outer image container me `overflow: hidden` hota hai taaki image container ke bahar na nikle:
```css
.parallax-card {
  width: 100%;
  height: 80vh;
  overflow: hidden;
  position: relative;
  border-radius: 24px;
}
.parallax-img {
  width: 100%;
  height: 120%; /* Extra height for smooth parallax movement */
  object-fit: cover;
  transform-origin: center center;
}
```

### 2. GSAP ScrollTrigger Scrubbing Logic
```javascript
gsap.registerPlugin(ScrollTrigger);

// Inner Image Zoom & Parallax Movement
gsap.to(".parallax-img", {
  scale: 1.35,
  yPercent: -20,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax-card",
    start: "top bottom",
    end: "bottom top",
    scrub: 1 // Smooth physics lag on scroll
  }
});
```

---

## 🤖 AI Master Prompt
> Dedicated ready-to-use prompt file: [`prompt.md`](prompt.md)

---

## 📁 Files Included
- `index.html`: Showcase page with parallax cards.
- `styles.css`: Dark luxury typography & parallax layout.
- `script.js`: GSAP ScrollTrigger parallax & scale zoom logic.
- `prompt.md`: AI prompt for direct integration.
