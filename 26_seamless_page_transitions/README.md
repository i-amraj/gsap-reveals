# 🚪 Module 26: Seamless Page Transitions Showcase

<p align="center">
  <img src="https://img.shields.io/badge/Transitions-8_Sub--Demos-ec4899?style=for-the-badge&logo=css3&logoColor=white" alt="8 Sub-Demos" />
  <img src="https://img.shields.io/badge/GSAP-Flip_&_Timelines-88ce02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP Flip and Timelines" />
  <img src="https://img.shields.io/badge/Aesthetic-Awwwards_Agency-8b5cf6?style=for-the-badge" alt="Awwwards Agency" />
</p>

A production-ready suite of **8 distinct Awwwards-level page transition modules** powered by **GSAP Flip shared-element morphing, coordinate-based circular clip-paths, diagonal skew slab wipes, kinetic typographic marquees, and 3D room rotations**.

Every module is completely self-contained with its own `index.html`, `styles.css`, `script.js`, and dedicated AI `prompt.md`.

---

## 📁 8 Sub-Demo Variations

| # | Folder | Primary Transition Architecture | Benchmark |
|---|--------|---------------------------------|-----------|
| **01** | `01_grid_card_to_fullscreen_hero` | Grid portfolio thumbnail seamlessly morphs into a full-width case study header via **GSAP Flip**. | **Lusion / Active Theory** |
| **02** | `02_circular_curtain_reveal` | Expanding circular clip-path mask originating precisely from cursor click coordinates. | **Apple Event Portals** |
| **03** | `03_diagonal_skew_slab_wipe` | 3 angled/skewed color slabs sweep across the screen with staggered offsets. | **Locomotive Agency** |
| **04** | `04_typographic_marquee_wipe` | Massive running typography marquee banner wipes upward across the viewport during view swap. | **Studio Freight** |
| **05** | `05_split_column_curtain_shift` | 5 vertical strips slide in from alternating top/bottom directions, swap views, and exit oppositely. | **Obys Agency** |
| **06** | `06_liquid_distortion_page_swap` | SVG `feDisplacementMap` turbulence ramps up into liquid ripples during view crossfade. | **WebGL Ripple Demos** |
| **07** | `07_perspective_3d_room_flip` | Views rotate as orthogonal faces of a 3D cube with backward z-depth push for true spatial immersion. | **Resn Agency** |
| **08** | `08_staggered_content_unfold` | Multi-element component cascade where individual UI elements exit and enter in choreographed waves. | **Stripe Press** |

---

## 🧠 Core GSAP Formulas for Transitions

### 1. Shared-Element Morph with GSAP Flip (Demo 01)
```javascript
// 1. Capture initial state
const state = Flip.getState(mediaElement);

// 2. Reparent to destination container
heroContainer.appendChild(mediaElement);

// 3. Seamless layout interpolation
Flip.from(state, {
  duration: 0.65,
  ease: "power3.inOut"
});
```

### 2. Cursor Coordinate Circular Mask (Demo 02)
```javascript
const clickX = e.clientX;
const clickY = e.clientY;

gsap.fromTo(destinationView, 
  { clipPath: `circle(0% at ${clickX}px ${clickY}px)` },
  {
    clipPath: `circle(150% at ${clickX}px ${clickY}px)`,
    duration: 0.85,
    ease: "power3.inOut"
  }
);
```

### 3. Spatial 3D Cube Room Flip (Demo 07)
```javascript
const tl = gsap.timeline();
tl.to(room, { z: -250, duration: 0.45, ease: "power2.in" })
  .to(room, { rotateY: -90, duration: 0.8, ease: "power3.inOut" }, "-=0.25")
  .to(room, { z: 0, duration: 0.5, ease: "power2.out" }, "-=0.2");
```

---

## 🚀 How to Test & Run

1. Open `index.html` inside `26_seamless_page_transitions/` to explore all 8 demos.
2. Click **"Launch Demo →"** on any card to test it standalone in the browser.
3. Open **`prompt.md`** inside any sub-folder to copy the AI prompt for direct reproduction in any web application.
