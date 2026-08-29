# 🖱️ Style 1.4: Interactive Mouse Trail Multi-Image Sequence (`04_image_trail_cursor`)

---

## 🎯 Overview

Welcome to the **Interactive Mouse Trail Multi-Image Sequence** module. This collection explores advanced interactive GSAP techniques where the user's cursor movement generates, manipulates, or scrubs through sequences of images. These techniques are highly popular on Awwwards-winning websites to create engaging, playful, and highly interactive user experiences.

### 📂 Included Sub-Modules & AI Prompts

| # | Effect Name | Subfolder Link | AI Prompt (`prompt.md`) | Visual Description |
|---|---|---|---|---|
| 1 | 🛤️ **Classic Sequential Trail** | [`classic_sequential_trail/`](classic_sequential_trail/) | [`prompt.md`](classic_sequential_trail/prompt.md) | Images spawn sequentially along the mouse path and fade out |
| 2 | 🔀 **Random Scatter Collage** | [`random_scatter_trail/`](random_scatter_trail/) | [`prompt.md`](random_scatter_trail/prompt.md) | Messy, randomly rotated image collage trail following the mouse |
| 3 | 🪀 **Spring Elastic Lag** | [`spring_elastic_lag/`](spring_elastic_lag/) | [`prompt.md`](spring_elastic_lag/prompt.md) | 4-5 images follow the cursor with an elastic spring delay |
| 4 | 🏎️ **Velocity Stretch Trail** | [`velocity_stretch_trail/`](velocity_stretch_trail/) | [`prompt.md`](velocity_stretch_trail/prompt.md) | Spawned images stretch and skew based on mouse movement speed |
| 5 | 📖 **Flipbook Scrub Sequence** | [`scrub_sequence_gallery/`](scrub_sequence_gallery/) | [`prompt.md`](scrub_sequence_gallery/prompt.md) | Mouse X movement scrubs through a sequence of centered images |
| 6 | 🪐 **Orbiting Image Ring** | [`circular_orbit_trail/`](circular_orbit_trail/) | [`prompt.md`](circular_orbit_trail/prompt.md) | Images spawn and orbit circularly around the moving cursor |
| 7 | 🌌 **Depth Parallax Trail** | [`parallax_depth_trail/`](parallax_depth_trail/) | [`prompt.md`](parallax_depth_trail/prompt.md) | Images spawn with varying Z-index and blur for a 3D depth feel |
| 8 | 📏 **Grid Snap Trail** | [`grid_snap_trail/`](grid_snap_trail/) | [`prompt.md`](grid_snap_trail/prompt.md) | Images left behind by the cursor snap cleanly to an invisible grid |

---

## 🧠 Core Logic Overview

### 1. The Mouse Move Event
Generating a trail requires capturing mouse coordinates continuously but effectively (throttling or distance checking):
```javascript
let lastPos = { x: 0, y: 0 };
window.addEventListener("mousemove", (e) => {
  const dist = Math.hypot(e.clientX - lastPos.x, e.clientY - lastPos.y);
  if (dist > 50) { // Spawn an image only if moved 50px
    spawnImage(e.clientX, e.clientY);
    lastPos = { x: e.clientX, y: e.clientY };
  }
});
```

### 2. GSAP quickTo for Follow Lag (Design 3)
```javascript
const xTo = gsap.quickTo(".image", "x", { duration: 0.8, ease: "elastic.out(1, 0.3)" });
```
