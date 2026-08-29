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
| 9 | 🍎 **Gravity Fall Trail** | [`gravity_fall_trail/`](gravity_fall_trail/) | [`prompt.md`](gravity_fall_trail/prompt.md) | Images spawn and fall downwards out of the screen using gravity |
| 10 | 🐍 **Snake Follower Path** | [`snake_follower_path/`](snake_follower_path/) | [`prompt.md`](snake_follower_path/prompt.md) | A fixed chain of images perfectly follows the history of the mouse path |
| 11 | 📷 **Polaroid Pile Drop** | [`polaroid_pile_drop/`](polaroid_pile_drop/) | [`prompt.md`](polaroid_pile_drop/prompt.md) | Polaroids drop and physically pile up permanently at the screen bottom |
| 12 | 🚇 **Tunnel Vision Flythrough**| [`tunnel_vision_flythrough/`](tunnel_vision_flythrough/) | [`prompt.md`](tunnel_vision_flythrough/prompt.md) | Spawned images scale up massively into the camera like a tunnel |
| 13 | 🃏 **3D Card Flip Trail** | [`3d_card_flip_trail/`](3d_card_flip_trail/) | [`prompt.md`](3d_card_flip_trail/prompt.md) | Spawned images pop in with a 3D Y-axis flip and flip out to fade |
| 14 | 💧 **SVG Ripple Distortion** | [`svg_ripple_distortion_trail/`](svg_ripple_distortion_trail/) | [`prompt.md`](svg_ripple_distortion_trail/prompt.md) | Images ripple and distort like water puddles via SVG turbulence |
| 15 | 🌈 **Color Matrix Neon** | [`color_matrix_neon_trail/`](color_matrix_neon_trail/) | [`prompt.md`](color_matrix_neon_trail/prompt.md) | Images get random extreme neon cyberpunk SVG color matrices |
| 16 | 👾 **Pixelate Resolve Trail** | [`pixelate_resolve_trail/`](pixelate_resolve_trail/) | [`prompt.md`](pixelate_resolve_trail/prompt.md) | Chunky 8-bit mosaic images resolve to sharp photos before fading |
| 17 | 🔪 **Slice Shredder Explode** | [`slice_shredder_explode/`](slice_shredder_explode/) | [`prompt.md`](slice_shredder_explode/prompt.md) | Images spawn and immediately slice into strips exploding apart |
| 18 | 🎨 **Brush Splatter Mask** | [`brush_splatter_mask/`](brush_splatter_mask/) | [`prompt.md`](brush_splatter_mask/prompt.md) | Images are masked dynamically like rough paint brush splatters |
| 19 | 🔠 **Text Mask Reveal Trail** | [`text_mask_reveal_trail/`](text_mask_reveal_trail/) | [`prompt.md`](text_mask_reveal_trail/prompt.md) | The trail of images is ONLY visible inside a giant typography mask |
| 20 | 🧲 **Magnetic Repel Scatter** | [`magnetic_repel_scatter/`](magnetic_repel_scatter/) | [`prompt.md`](magnetic_repel_scatter/prompt.md) | Spawned images aggressively push away if the cursor touches them again |
| 21 | 🌀 **Spiral Vortex Suck** | [`spiral_vortex_suck/`](spiral_vortex_suck/) | [`prompt.md`](spiral_vortex_suck/prompt.md) | Images spawn but instantly spiral into a central screen black hole |
| 22 | 🔦 **Cursor Spotlight Reveal**| [`cursor_spotlight_reveal/`](cursor_spotlight_reveal/) | [`prompt.md`](cursor_spotlight_reveal/prompt.md) | Mouse acts as a trailing flashlight revealing a hidden image underneath |

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
