# 🍱 Module 23: Interactive Bento Grids Showcase

<p align="center">
  <img src="https://img.shields.io/badge/Bento_Grids-8_Sub--Demos-8b5cf6?style=for-the-badge&logo=css3&logoColor=white" alt="8 Sub-Demos" />
  <img src="https://img.shields.io/badge/GSAP-Flip_&_Core-88ce02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP Flip and Core" />
  <img src="https://img.shields.io/badge/Aesthetic-Linear_&_Vercel-06b6d4?style=for-the-badge" alt="Linear Style" />
</p>

A production-ready suite of **8 distinct interactive Bento Grid modules** inspired by **Linear.app, Vercel, Apple Intelligence, and Awwwards**. 

Every demo is self-contained with its own `index.html`, `styles.css`, `script.js`, and dedicated AI `prompt.md`.

---

## 📁 8 Sub-Demo Variations

| # | Folder | Primary Interaction & Mechanics | Benchmark |
|---|--------|---------------------------------|-----------|
| **01** | `01_mouse_spotlight_glow` | Dynamic mouse coordinate tracking, radial gradient mask border illumination, and 3D spring tilt. | **Linear.app** |
| **02** | `02_bento_card_modal_expand` | Seamless card-to-fullscreen focal modal expansion powered by the **GSAP Flip Plugin**. | **Apple Intelligence** |
| **03** | `03_metrics_counter_stream` | Dynamic number rollups, animated cubic-bezier SVG stroke dashoffset charts, and radial gauges. | **Stripe Dashboard** |
| **04** | `04_bento_3d_depth_parallax` | True spatial holographic depth with multi-plane layers (`data-depth`) shifting at differential speeds. | **Apple Vision UI** |
| **05** | `05_accordion_bento_reveal` | Flex-grow accordion strip: active panel dynamically expands while neighboring panels smoothly compress. | **Vercel Features** |
| **06** | `06_interactive_code_switch_card` | Multi-language code terminal (TS, Python, Rust, cURL) with syntax tokens and 1-click clipboard API. | **Supabase / Resend** |
| **07** | `07_bento_drag_reorder_flip` | Category filtering and randomized shuffle with lag-free layout morphing via **GSAP Flip**. | **Awwwards Portfolios** |
| **08** | `08_glass_gradient_orbit_card` | Continuous revolving radial gradient orbs behind frosted optical glass with magnetic mouse pull. | **Arc Browser / Raycast** |

---

## 🧠 Core GSAP Formulas Used in Bento Grids

### 1. Dynamic Mouse Spotlight Border Glow (Demo 01)
```javascript
container.addEventListener("mousemove", (e) => {
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  });
});
```

### 2. Seamless Card Modal Morph with GSAP Flip (Demo 02)
```javascript
// 1. Capture initial state
const state = Flip.getState(card);

// 2. Mutate DOM class
card.classList.add("is-expanded");

// 3. Fluid 60FPS morph
Flip.from(state, {
  duration: 0.55,
  ease: "power3.inOut"
});
```

### 3. Number Counter Rollup (Demo 03)
```javascript
const counter = { val: 0 };
gsap.to(counter, {
  val: 84920,
  duration: 2.2,
  ease: "power2.out",
  onUpdate: () => {
    element.textContent = Math.floor(counter.val).toLocaleString();
  }
});
```

### 4. Differential 3D Spatial Parallax (Demo 04)
```javascript
layers.forEach((layer) => {
  const depth = parseFloat(layer.getAttribute("data-depth")) || 0.2;
  gsap.to(layer, {
    x: normX * (depth * 45),
    y: normY * (depth * 45),
    z: depth * 60,
    duration: 0.45,
    ease: "power2.out"
  });
});
```

---

## 🚀 How to Test & Run

1. Open `index.html` inside `23_interactive_bento_grids/` to browse all 8 demos.
2. Click **"Launch Demo →"** on any card to test it standalone.
3. Check **`prompt.md`** inside any sub-folder to instantly generate or adapt that animation with AI assistants.
