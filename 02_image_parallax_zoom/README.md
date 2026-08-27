# 🏔️ Style 1.2: Image Parallax Depth & Scale Zoom Engine Suite (`02_image_parallax_zoom`)

---

## 🎯 Overview & Sub-Demos

All demos use local nature media (`nature1.jpeg` & `nature2.jpeg`) from `../../assets/`.

### 📂 Included Sub-Modules & AI Prompts

| # | Effect Name | Subfolder Link | AI Prompt (`prompt.md`) | Visual Description |
|---|---|---|---|---|
| 1 | 🏔️ **Multi-Layer 3D Depth** | [`multi_layer_3d_parallax/`](multi_layer_3d_parallax/) | [`prompt.md`](multi_layer_3d_parallax/prompt.md) | Multi-speed layer parallax (BG slow, card medium, text fast) |
| 2 | 🔍 **Card Expand & Counter Zoom** | [`inner_counter_zoom_reveal/`](inner_counter_zoom_reveal/) | [`prompt.md`](inner_counter_zoom_reveal/prompt.md) | Nike/Porsche card 45vw ➔ 100vw expand with inner 1.6 ➔ 1.0 counter zoom |
| 3 | 🎮 **Mouse 3D Tilt + Parallax** | [`mouse_tilt_3d_parallax/`](mouse_tilt_3d_parallax/) | [`prompt.md`](mouse_tilt_3d_parallax/prompt.md) | 3D cursor tilt perspective + glass glare layer |
| 4 | ↔️ **Horizontal Track Zoom** | [`horizontal_parallax_track_zoom/`](horizontal_parallax_track_zoom/) | [`prompt.md`](horizontal_parallax_track_zoom/prompt.md) | Dual-axis horizontal pinned track with inner counter image shift |

---

## 🧠 Core GSAP & CSS Concepts

### 1. CSS Outer Mask Container
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
  height: 130%;
  object-fit: cover;
}
```

### 2. GSAP ScrollTrigger Scrubbing Logic
```javascript
gsap.registerPlugin(ScrollTrigger);

gsap.to(".parallax-img", {
  scale: 1.35,
  yPercent: -20,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax-card",
    start: "top bottom",
    end: "bottom top",
    scrub: 1
  }
});
```
