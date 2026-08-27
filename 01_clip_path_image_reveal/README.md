# 🖼️ Style 1.1: Clip-Path Image Reveal (Circle & Polygon Mask Reveal)

---

## 🎯 Ye Animation Style Kya Karta Hai? (Visual Effect)

* **Visual Effect:**
  Pehle image background me ek chhote circle ya patli stripe mask me hidden rahti hai. Jaise hi user page ko **Scroll** karta hai ya card par **Hover** karta hai, woh circle smoothly expand ho kar poori HD Image ko reveal kar deta hai.
* **Kahan Use Hota Hai?**
  Awwwards websites ke Hero Sections, Portfolio Projects Showcase, Feature Banner Reveals, aur Modern Agency websites par.

---

## 🧠 Ye Kaise Kaam Karta Hai? (Core CSS & GSAP Concept)

### 1. CSS Clip-Path Property
CSS me `clip-path` property image ka specific hissa dikhane ya chhipane ka kaam karti hai:
- `clip-path: circle(0% at 50% 50%)` ➔ Image completely invisible (center par 0 radius circle).
- `clip-path: circle(100% at 50% 50%)` ➔ Image fully visible (poora screen cover).

### 2. GSAP ScrollTrigger Scrub Control
GSAP `ScrollTrigger` is CSS `clip-path` value ko user ke scroll ke sath smooth scrub karta hai:

```javascript
gsap.to(".reveal-img", {
  clipPath: "circle(100% at 50% 50%)",
  ease: "none",
  scrollTrigger: {
    trigger: ".reveal-container",
    start: "top top",      // Jab container top par aaye
    end: "+=1500",         // 1500px scroll duration
    scrub: 1,              // Smooth scroll binding
    pin: true              // Section ko pin/lock karke reveal karwana
  }
});
```

---

## 🛠️ Complete Copy-Paste Production Code

### 1. `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Style 1.1 - Clip Path Image Reveal</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <!-- Intro Header -->
  <header class="header">
    <h1>Scroll Down To Reveal</h1>
    <p>Style 1.1: Clip-Path Circle Masking Animation</p>
  </header>

  <!-- Pinned Reveal Container -->
  <section class="reveal-container">
    <div class="mask-wrapper">
      <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1920" alt="Abstract Art" class="reveal-img">
      <div class="content-overlay">
        <h2>Unveil The Creative Vision</h2>
        <p>Premium GSAP Clip-Path Masking Technique</p>
      </div>
    </div>
  </section>

  <!-- Next Section -->
  <section class="next-section">
    <h2>Section Reveal Complete 🎉</h2>
  </section>

  <!-- GSAP CDNs -->
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
```

### 2. `styles.css`
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

body {
  background-color: #0b0c10;
  color: #ffffff;
}

.header {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.reveal-container {
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.mask-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}

.reveal-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: circle(0% at 50% 50%); /* Starting masked state */
}

.content-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  pointer-events: none;
}

.next-section {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1f2833;
}
```

### 3. `script.js`
```javascript
gsap.registerPlugin(ScrollTrigger);

// Clip Path Mask Reveal Animation
gsap.to(".reveal-img", {
  clipPath: "circle(100% at 50% 50%)",
  ease: "none",
  scrollTrigger: {
    trigger: ".reveal-container",
    start: "top top",
    end: "+=1200",
    scrub: 1,
    pin: true
  }
});
```

---

## 🎨 Creative Variations & Modifications (Is Animation Me Kya Badlav Kar Sakte Hain?)

### 1. Shape Variations (Mask Shape Change Karna)
* **Rectangle Vertical Curtain (`inset`):**
  - Code: `clipPath: "inset(0% 0% 0% 0%)"` (Starting: `inset(50% 0% 50% 0%)`).
  - Effect: Image center line se upar aur niche curtain ki tarah khulti hai.
* **Diagonal Sweep (`polygon`):**
  - Code: `clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"` (Starting: `polygon(0 0, 0 0, 0 100%, 0 100%)`).
  - Effect: Image left-to-right diagonal direction me wipe reveal hoti hai.
* **Capsule / Ellipse Expand:**
  - Code: `clipPath: "ellipse(100% 100% at 50% 50%)"`.

### 2. Interaction Variations (Triggers Badalna)
* **Mouse Cursor Spotlight Lens:**
  - Mask circle static screen center ke bajaye user ke mouse pointer ko follow karta hai (`clipPath: circle(150px at ${mouseX}px ${mouseY}px)`).
* **Hover Reveal Card:**
  - Scroll ki jagah hover par mask expand karna: `card.addEventListener("mouseenter", () => gsap.to(img, { clipPath: "circle(100%)" }))`.

### 3. Visual Layering Variations
* **Before / After Comparison:**
  - Layer 1 me Black & White image hoti hai, aur clip-path circle reveal hone par andar se Color HD image bahar aati hai.

---

## 📁 Self-Explanatory Prompt-Ready Demo Folders in `01_clip_path_image_reveal/`:

1. **`curtain_split_inset_reveal/`** ➔ Vertical Curtain Split Reveal (`inset`)
2. **`diagonal_sweep_polygon_wipe/`** ➔ Diagonal Corner Sweep Reveal (`polygon`)
3. **`interactive_mouse_spotlight_torch/`** ➔ 60FPS Canvas Fluid Moving Smoke Physics Reveal Engine
4. **`dual_image_before_after_comparison/`** ➔ Dual Image Black & White to Full Color Reveal
5. **`water_ripple_liquid_flow_reveal/`** ➔ Water Ripple Liquid Wave Flow Composite Mask Engine
6. **`interactive_scratch_card_reveal/`** ➔ Interactive Scratch Card Texture Composite Reveal Engine
7. **`fire_embers_vaporize_reveal/`** ➔ Glowing Flame Sparks & Fiery Embers Vaporize Mask Engine
8. **`artistic_ink_splatter_reveal/`** ➔ Japanese Wet Watercolor Ink Splatter Brush Stroke Engine
9. **`magic_dust_sparkle_reveal/`** ➔ Magic Dust & Star Sparkle Wand Reveal Engine
10. **`cyber_hexagon_honeycomb_reveal/`** ➔ Cyber Hexagon Honeycomb Sci-Fi Matrix Scanner Engine
11. **`cracked_frost_ice_reveal/`** ➔ Glassmorphic Shattered Frost Ice Break Reveal Engine
12. **`halftone_dot_matrix_reveal/`** ➔ Retro Halftone Pop-Art Newspaper Dot Matrix Scanner Engine
13. **`retro_pixelate_glitch_reveal/`** ➔ Retro 8-Bit Pixel Blocks & Cyberpunk Glitch Matrix Reveal Engine
14. **`lightning_electric_pulse_reveal/`** ➔ High-Voltage Plasma Electric Arc & Lightning Spark Engine
15. **`smoke_ring_shockwave_reveal/`** ➔ Kinetic Vapor Blast Ring & Shockwave Wave Reveal Engine
16. **`venetian_blind_slats_reveal/`** ➔ 3D Venetian Metallic Louvered Shutter Slats Reveal Engine






