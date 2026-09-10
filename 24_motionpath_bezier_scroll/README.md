# 🎢 Module 24: MotionPath & Bezier 3D Splines Showcase

<p align="center">
  <img src="https://img.shields.io/badge/MotionPath-8_Sub--Demos-06b6d4?style=for-the-badge&logo=css3&logoColor=white" alt="8 Sub-Demos" />
  <img src="https://img.shields.io/badge/GSAP-MotionPathPlugin-88ce02?style=for-the-badge&logo=greensock&logoColor=white" alt="MotionPathPlugin" />
  <img src="https://img.shields.io/badge/Scroll-Scrubbed_Splines-8b5cf6?style=for-the-badge" alt="Scrubbed Splines" />
</p>

A production-ready library of **8 advanced non-linear animation modules** utilizing the **GSAP MotionPathPlugin**, SVG cubic Bezier curves, tangent auto-orientation kinematics, and scroll scrub choreography.

Every module contains a standalone `index.html`, `styles.css`, `script.js`, and dedicated AI `prompt.md`.

---

## 📁 8 Sub-Demo Variations

| # | Folder | Primary Interaction & Kinematics | Benchmark |
|---|--------|----------------------------------|-----------|
| **01** | `01_rocket_bezier_flight` | Scroll-scrubbed flight path along an organic cubic S-curve with `autoRotate: 90` and waypoint telemetry. | **Awwwards Space Launches** |
| **02** | `02_auto_orient_card_rollercoaster` | Train of 4 glassmorphic feature cards banking realistically along an undulating rollercoaster spline. | **Apple Event Keynotes** |
| **03** | `03_spiral_vortex_journey` | Elements emerge from a center singularity, expanding and accelerating outward along a logarithmic spiral. | **Stripe Press / Interstellar** |
| **04** | `04_interactive_svg_path_editor` | Live drag handles to reshape SVG bezier control points (`P0`, `C1`, `C2`, `P3`) with real-time flight retargeting. | **Creative Developer Tools** |
| **05** | `05_multi_particle_trail_orbit` | 36 glowing luminescent particles traversing an infinity (figure-8) lemniscate curve with speed multipliers. | **Active Theory Portfolios** |
| **06** | `06_camera_follow_path_scroll` | Inverse camera kinematics: world terrain translates along an SVG spline beneath a pinned HUD viewfinder. | **Flight Simulator HUDs** |
| **07** | `07_connecting_pipeline_fluid_pulse` | Branching neural conduits firing high-speed energy packets with impact shockwaves and node illumination. | **Cloud Infrastructure Maps** |
| **08** | `08_curved_text_motion_path` | Giant kinetic wave typography swimming and tilting across sinusoidal wave crests and troughs on scroll. | **Locomotive Agency** |

---

## 🧠 Core GSAP Formulas for MotionPath

### 1. Basic Path Alignment & Tangent Auto-Rotation
```javascript
gsap.to(element, {
  motionPath: {
    path: "#svgPath",
    align: "#svgPath",
    alignOrigin: [0.5, 0.5],
    autoRotate: true // Rotates element to match curve tangent
  },
  duration: 3,
  ease: "power1.inOut"
});
```

### 2. Multi-Card Train with Phase Offsets
```javascript
cards.forEach((card, index) => {
  const offset = index * 0.12; // Gap along curve
  tl.to(card, {
    motionPath: {
      path: "#coasterPath",
      align: "#coasterPath",
      alignOrigin: [0.5, 0.5],
      autoRotate: true,
      start: offset,
      end: 0.65 + offset
    },
    ease: "none"
  }, 0);
});
```

### 3. Closed-Loop Infinite Traversal
```javascript
// startProgress is normalized between 0 and 1
gsap.to(particle, {
  motionPath: {
    path: path,
    align: path,
    alignOrigin: [0.5, 0.5],
    start: startProgress,
    end: startProgress + 1 // Wraps around closed path seamlessly
  },
  duration: 6,
  repeat: -1,
  ease: "none"
});
```

---

## 🚀 How to Test & Run

1. Open `index.html` inside `24_motionpath_bezier_scroll/` to explore all 8 demos.
2. Click **"Launch Demo →"** on any card to test it standalone in the browser.
3. Open **`prompt.md`** inside any sub-folder to copy the AI prompt for direct reproduction in any web application.
