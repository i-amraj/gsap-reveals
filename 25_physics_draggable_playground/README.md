# 🕹️ Module 25: Physics & Draggable Playground Showcase

<p align="center">
  <img src="https://img.shields.io/badge/Physics-8_Sub--Demos-10b981?style=for-the-badge&logo=css3&logoColor=white" alt="8 Sub-Demos" />
  <img src="https://img.shields.io/badge/GSAP-Draggable-88ce02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP Draggable" />
  <img src="https://img.shields.io/badge/Physics-Inertia_&_Gravity-8b5cf6?style=for-the-badge" alt="Inertia and Gravity" />
</p>

A production-ready suite of **8 distinct tactile physical interaction modules** powered by **GSAP Draggable, custom inertia momentum throwing, gravitational settling, viscoelastic squash & stretch, and proximity magnification**.

Every module is completely self-contained with its own `index.html`, `styles.css`, `script.js`, and dedicated AI `prompt.md`.

---

## 📁 8 Sub-Demo Variations

| # | Folder | Primary Physical Interaction & Kinematics | Benchmark |
|---|--------|------------------------------------------|-----------|
| **01** | `01_inertia_throw_stickers` | Grab and fling UI stickers with instantaneous velocity vectors, momentum deceleration, and angular spin. | **Figma / FigJam** |
| **02** | `02_gravity_drop_tags` | Gravitational freefall cascade with `bounce.out` restitution, randomized landing dispersal, and floor settling. | **Linear Changelog** |
| **03** | `03_magnetic_dock_magnification` | Authentic macOS floating dock with continuous Gaussian bell-curve proximity magnification & launch bounce. | **macOS Dock** |
| **04** | `04_snap_to_grid_docking` | Modular cards snap magnetically to designated hardware docking bays with elastic spring anchoring. | **Ableton Live / Hardware UI** |
| **05** | `05_elastic_rubber_band_pull` | Dynamic SVG quadratic bezier cord tension: pulling stretches cords, release triggers elastic twang reverberation. | **Apple Pull-to-Refresh** |
| **06** | `06_card_stack_swipe_tinder` | Velocity-based card stack deck with proportional angular banking, threshold fling discard, and stack promotion. | **Tinder / Raycast** |
| **07** | `07_fluid_cursor_magnetic_bubble` | Viscous liquid bubble that squashes and stretches along its drag trajectory and jiggles organically on release. | **Lusion / Liquid Portfolios** |
| **08** | `08_physics_ball_bounce_counter` | 60FPS multi-ball collision chamber with gravity, coefficient of restitution damping, and live bounce counting. | **Active Theory Interactive Labs** |

---

## 🧠 Core GSAP Physics Formulas

### 1. Velocity-Based Momentum Fling (Demo 01)
```javascript
// Inside Draggable onDrag
const dt = (now - lastTime) / 1000 || 0.016;
vx = (this.x - lastX) / dt;
vy = (this.y - lastY) / dt;

// Inside Draggable onRelease
const throwX = this.x + (vx * 0.15);
const throwY = this.y + (vy * 0.15);
const spin = vx * 0.04;

gsap.to(this.target, {
  x: clampedX,
  y: clampedY,
  rotation: "+=" + spin,
  duration: 0.8,
  ease: "power3.out"
});
```

### 2. macOS Gaussian Proximity Magnification (Demo 03)
```javascript
const norm = distance / influenceRadius; // 0 to 1
if (distance < influenceRadius) {
  const scale = 1 + (maxScale - 1) * Math.cos(norm * (Math.PI / 2));
  gsap.to(item, { scale: scale, duration: 0.15, overwrite: "auto" });
}
```

### 3. Viscoelastic Area-Preserving Squash & Stretch (Demo 07)
```javascript
const stretch = Math.min(1.45, 1 + distance * 0.015);
const squash = 1 / stretch; // Preserves 2D volume
gsap.to(bubble, {
  scaleX: stretch,
  scaleY: squash,
  rotation: angle,
  duration: 0.1
});
```

---

## 🚀 How to Test & Run

1. Open `index.html` inside `25_physics_draggable_playground/` to explore all 8 demos.
2. Click **"Launch Demo →"** on any card to test it standalone in the browser.
3. Open **`prompt.md`** inside any sub-folder to copy the AI prompt for direct reproduction in any web application.
