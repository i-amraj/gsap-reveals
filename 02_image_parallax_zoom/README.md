# 🏔️ Style 1.2: Image Parallax Depth & Scale Zoom Engine Suite (`02_image_parallax_zoom`)

---

## 🎯 Overview & Sub-Demos

All 22 sub-demos use local nature media (`nature1.jpeg` & `nature2.jpeg`) from `../../assets/`.

### 📂 Included 22 Sub-Modules & AI Prompts

| # | Effect Name | Subfolder Link | AI Prompt (`prompt.md`) | Visual Description |
|---|---|---|---|---|
| 1 | 🏔️ **Multi-Layer 3D Depth** | [`multi_layer_3d_parallax/`](multi_layer_3d_parallax/) | [`prompt.md`](multi_layer_3d_parallax/prompt.md) | Multi-speed layer parallax (BG slow, card medium, text fast) |
| 2 | 🔍 **Card Expand & Counter Zoom** | [`inner_counter_zoom_reveal/`](inner_counter_zoom_reveal/) | [`prompt.md`](inner_counter_zoom_reveal/prompt.md) | Nike/Porsche card 45vw ➔ 100vw expand with inner 1.6 ➔ 1.0 counter zoom |
| 3 | 🎮 **Mouse 3D Tilt + Parallax** | [`mouse_tilt_3d_parallax/`](mouse_tilt_3d_parallax/) | [`prompt.md`](mouse_tilt_3d_parallax/prompt.md) | 3D cursor tilt perspective + glass glare layer |
| 4 | ↔️ **Horizontal Track Zoom** | [`horizontal_parallax_track_zoom/`](horizontal_parallax_track_zoom/) | [`prompt.md`](horizontal_parallax_track_zoom/prompt.md) | Dual-axis horizontal pinned track with inner counter image shift |
| 5 | ⚡ **Scroll Velocity Skew** | [`scroll_velocity_zoom_inertia/`](scroll_velocity_zoom_inertia/) | [`prompt.md`](scroll_velocity_zoom_inertia/prompt.md) | Streetwear scroll speed velocity skew & inertia stretch |
| 6 | 🌀 **Infinite 3D Tunnel Zoom** | [`infinite_tunnel_parallax_zoom/`](infinite_tunnel_parallax_zoom/) | [`prompt.md`](infinite_tunnel_parallax_zoom/prompt.md) | Sci-Fi concentric image Z-space camera tunnel travel |
| 7 | 🪞 **Split Screen Mirror** | [`split_screen_mirror_parallax/`](split_screen_mirror_parallax/) | [`prompt.md`](split_screen_mirror_parallax/prompt.md) | Editorial magazine split 2-column counter parallax (Left UP / Right DOWN) |
| 8 | ⭕ **Circle Mask Parallax Zoom** | [`circular_mask_scale_zoom/`](circular_mask_scale_zoom/) | [`prompt.md`](circular_mask_scale_zoom/prompt.md) | Luxury circle clip-path aperture expand (12% ➔ 100%) with 2.2 ➔ 1.0 image zoom |
| 9 | 🚀 **Depth 3D Card Fly-Through** | [`depth_3d_card_stack_flythrough/`](depth_3d_card_stack_flythrough/) | [`prompt.md`](depth_3d_card_stack_flythrough/prompt.md) | Apple Keynote 3D card stack fly-past camera lens |
| 10 | 🧱 **Matrix Counter-Grid** | [`parallax_image_grid_distortion/`](parallax_image_grid_distortion/) | [`prompt.md`](parallax_image_grid_distortion/prompt.md) | 3-Column counter grid parallax (Odd UP / Even DOWN) |
| 11 | 🔍 **Scroll Magnifying Lens** | [`pinned_zoom_lens_spotlight/`](pinned_zoom_lens_spotlight/) | [`prompt.md`](pinned_zoom_lens_spotlight/prompt.md) | 2.5x HD detail magnifying spotlight traversal lens |
| 12 | 📐 **Isometric 3D Plane** | [`isometric_3d_plane_parallax/`](isometric_3d_plane_parallax/) | [`prompt.md`](isometric_3d_plane_parallax/prompt.md) | Web3 isometric 3D plane height elevation (translateZ: 180px) |
| 13 | 🌀 **Spiral Vortex 3D Zoom** | [`spiral_vortex_3d_zoom/`](spiral_vortex_3d_zoom/) | [`prompt.md`](spiral_vortex_3d_zoom/prompt.md) | Music video 3D spiral rotational depth travel |
| 14 | 🎞️ **Venetian Strip Parallax** | [`overlapping_slat_venetian_parallax/`](overlapping_slat_venetian_parallax/) | [`prompt.md`](overlapping_slat_venetian_parallax/prompt.md) | 5-Strip vertical shutter slice staggered parallax |
| 15 | 🌐 **Fisheye Globe Un-Distort** | [`spherical_globe_parallax_zoom/`](spherical_globe_parallax_zoom/) | [`prompt.md`](spherical_globe_parallax_zoom/prompt.md) | 3D spherical globe lens sphere unfold into flat viewport |
| 16 | 🔷 **3D Prism Kaleidoscope** | [`prism_kaleidoscope_3d_zoom/`](prism_kaleidoscope_3d_zoom/) | [`prompt.md`](prism_kaleidoscope_3d_zoom/prompt.md) | Cyberpunk 4-facet triangular prism 3D geometric unfold |
| 17 | 🔄 **Cylindrical 3D Carousel** | [`cylindrical_3d_carousel_parallax/`](cylindrical_3d_carousel_parallax/) | [`prompt.md`](cylindrical_3d_carousel_parallax/prompt.md) | Revolving 3D cylinder image ring interactive carousel |
| 18 | 🌫️ **Depth Blur Aperture Focus** | [`depth_blur_aperture_focus/`](depth_blur_aperture_focus/) | [`prompt.md`](depth_blur_aperture_focus/prompt.md) | Gaussian blur (28px ➔ 0px) camera depth-of-field lens focus |
| 19 | 📐 **Diagonal Slice Cascade** | [`diagonal_slice_parallax_cascade/`](diagonal_slice_parallax_cascade/) | [`prompt.md`](diagonal_slice_parallax_cascade/prompt.md) | 45-Degree diagonal sloped polygon strip cascade slide |
| 20 | 🧲 **Magnetic Cursor Zoom** | [`interactive_magnetic_cursor_zoom/`](interactive_magnetic_cursor_zoom/) | [`prompt.md`](interactive_magnetic_cursor_zoom/prompt.md) | Mouse proximity magnetic pull + spring physics depth scale |
| 21 | 🌊 **Scroll Velocity Wave Ripple** | [`scroll_velocity_ripple_wave/`](scroll_velocity_ripple_wave/) | [`prompt.md`](scroll_velocity_ripple_wave/prompt.md) | Scroll speed SVG displacement wave distortion & skew |
| 22 | 🔀 **Counter Crossfade Parallax** | [`crossfade_dual_layer_parallax/`](crossfade_dual_layer_parallax/) | [`prompt.md`](crossfade_dual_layer_parallax/prompt.md) | Dual-asset nature1 ➔ nature2 counter-slide opacity morph |

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
