# 🚀 GSAP Master Learning Journal & Roadmap

---

## 📌 Rules & Protocol (.gemini)
1. **Ek Baar Me Ek Topic:** Har step par sirf ek concept padhenge, deeply aur crystal clear tarike se.
2. **Auto-Logging:** Har conversation, code, aur roadmap update is `gemini_conversation.md` me save hoga.
3. **Simple Language:** Hinglish/Hindi me zero-to-hero level explanation.
4. **Practical Code:** Code examples + interactive practice.

---

## 🔍 Key Concepts Comparison: Pinned Horizontal Scroll vs Choreographed ScrollTrigger

| Aspect | 📌 Pinned Horizontal Scroll Animation | 🎭 Choreographed ScrollTrigger |
| :--- | :--- | :--- |
| **Mukhya Maqsad (Primary Focus)** | **Layout/Screen Movement:** Mouse wheel se vertical scroll hone par section ko screen par lock (`pin`) karna aur content ko Left-to-Right khinchna. | **Sequence & Timing:** Elements (Text, Images, Shapes) ko scroll ke saath ek tay kiye gaye order aur exact timing me animate karwana. |
| **Key GSAP Properties** | `pin: true`, `xPercent: -100`, `scrub: 1` | `timeline()`, `stagger`, `containerAnimation`, `offset` delays |
| **Visual Effect** | Ek lambi film tape scroll ke saath horizontal direction me slide hoti hai. | Ek stage show jisme actors (elements) ek-ek karke scroll speed ke mutabiq enter/exit hote hain. |
| **Kab Use Karein?** | Jab website par Horizontal Showcase, Gallery, Storyboard, ya Timeline dikhani ho. | Jab Hero section text morphing, feature cards entrance, split letters, ya parallax elements banane hon. |
| **Real World Combination** | Dono ek saath mixing karke best result dete hain! (Pehle section pin hota hai + Horizontal slide hota hai + Uske andar elements choreographed entrance lete hain). |

---

## 🗺️ Master GSAP Learning Roadmap (Zero to Hero)

### 🔹 Phase 1: GSAP Core Foundations (Basics)
- **Module 1.1:** GSAP Kya Hai & Setup (`gsap.to()`, `gsap.from()`, `gsap.fromTo()`)
- **Module 1.2:** Target Selectors, Properties (x, y, scale, opacity, rotation, transformOrigin)
- **Module 1.3:** Easing Masterclass (`power1`, `power4`, `back`, `elastic`, `bounce`, `customEase`)
- **Module 1.4:** GSAP Timelines (`gsap.timeline()`, position parameter `"+=0.5"`, `"<"`, `"-=0.2"`)
- **Module 1.5:** Stagger Effects (`stagger: { amount, grid, from: "center" }`)

### 🔹 Phase 2: Text & Typography Animations
- **Module 2.1:** Word & Character Split Animations (Kinetic Typography)
- **Module 2.2:** Typewriter Effect & ScrambleText
- **Module 2.3:** Gradient Text Fill & Scrubbed Reveal on Scroll
- **Module 2.4:** 3D Flip & Wave Text Animations

### 🔹 Phase 3: Card & Image Visual Effects
- **Module 3.1:** Staggered Card Entrance & Hover 3D Tilt
- **Module 3.2:** Clip-Path Image Reveal (Circle/Rectangle Expansion)
- **Module 3.3:** Image Parallax Zoom & Masking
- **Module 3.4:** Stacking Cards on Scroll (Apple-style stacked cards)

### 🔹 Phase 4: ScrollTrigger Essentials
- **Module 4.1:** ScrollTrigger Setup (`trigger`, `start`, `end`, `markers`)
- **Module 4.2:** `toggleActions` Masterclass (`play pause resume reverse`)
- **Module 4.3:** `scrub` Control (Scroll-linked smooth animations)
- **Module 4.4:** `pin` Mechanics (Section pinning, layered pinning, sticky scroll)

### 🔹 Phase 5: Advanced Scroll Architecture
- **Module 5.1:** Pinned Horizontal Scroll Track (gsap.com style horizontal gallery)
- **Module 5.2:** `containerAnimation` (Triggering animations inside horizontal scroll)
- **Module 5.3:** Parallax Multi-Layer Backgrounds
- **Module 5.4:** Smooth Scroll Engines (Lenis / GSAP ScrollSmoother)

### 🔹 Phase 6: GSAP Special Plugins & 3D/SVG Techniques
- **Module 6.1:** SplitText & Flip API (Layout transitions without lag)
- **Module 6.2:** Observer API (Touch/Wheel gesture interactions)
- **Module 6.3:** SVG Path Morphing & DrawSVG (Drawing strokes on scroll)
- **Module 6.4:** Canvas / Three.js + GSAP Integration (3D WebGL Scroll Animation)

### 🔹 Phase 7: Real-World Capstone Projects
- **Project 1:** Modern Awwwards-style Agency Hero Section
- **Project 2:** Apple-style Product Launch Page (Pinned 3D Model / Video Scroll)
- **Project 3:** GSAP.com Replica (Full Horizontal Pinned Choreographed Showcase)

---

## 📝 Session History & Notes

### Session 1: Setup & Showcase Roadmap Architecture
- **Completed:** Created `.gemini` folder-rules, `gemini_conversation.md` journal, dedicated `roadmap.md`, and `basic.md` with complete setup info.
- **Role Protocol:** AI acts as a dedicated **Teacher & Mentor**. AI explains concepts step-by-step, guides the user on how to build, and records all notes in `.md` files.
- **Dedicated Files:**
  - `basic.md` ➔ Setup instructions, formulas, & properties cheat sheet in chat language.
  - `roadmap.md` ➔ Dynamic checklist of 21 Animation Styles & Projects.
  - `.gemini` ➔ Learning rules (Teacher role, Hinglish chat language in notes).
  - `gemini_conversation.md` ➔ Live conversation notes & journal.




---

## 🎨 GSAP Creative Animation Styles Catalog (Attractive Website Effects)

### 1. 🌟 Hero & Page Load Styles (Preloader & Entry)
* **Preloader Counter to Curtain Split:** Page load par 0% se 100% counter chalega, screen centre se 2 hisson me curtain ki tarah khulegi, aur Hero section elements pop in honge.
* **Kinetic Typography (Character Stagger Reveal):** Letters `rotateX(90deg)` aur `y: 100px` se bottom-masking ke sath ek-ek karke staggered tarike se reveal hote hain.
* **Magnetic Hero Elements:** Buttons ya floating badges mouse cursor ke taraf magnet ki tarah attract hote hain (`gsap.to(element, { x, y })`).

### 2. 🖼️ Image Animation Styles
* **Clip-Path Masking Reveal:** Image pehle ek chhote circle ya पतली line ki tarah dikhti hai, aur scroll/hover par screen par fail kar poori image reveal hoti hai (`clip-path: circle(0%)` -> `100%`).
* **Parallax Depth & Zoom:** Scroll karne par background image `scale: 1.3` zoom hoti hai jabki overlay text/card tez speed se slide hota hai (3D depth illusion).
* **Hover Liquid Distortion (WebGL/Canvas + GSAP):** Mouse hover karne par image me paani ki lehar (liquid ripple/RGB shift) jaisa distortion effect aata hai.
* **Image Trail Effect:** Mouse move karne par cursor ke piche high-res images ka ek trail chhoot-ta hai jo fade out hota jata hai (Awwwards trend).

### 3. 🃏 Card & Grid Animation Styles
* **Apple-Style Stacking Cards on Scroll:** Jab aap scroll karte hain, toh card 1 screen par pin rehta hai, card 2 uske upar slide hoke aata hai aur niche wala card thoda chhota (`scale: 0.9`) aur dark ho jata hai.
* **3D Tilt Hover Effect:** Card par cursor lane par card 3D plane me rotate hota hai (`rotateX`, `rotateY`) aur glass shine follow karti hai.
* **Flip Grid Layout Transition (GSAP Flip Plugin):** Filter button click karne par grid cards bina kisi lag ke ek place se doosre place par smoothly slide karke rearrange hote hain.

### 4. ✍️ Text Animation Styles
* **Scroll-Scrubbed Text Color Highlight:** Text pehle dull/gray hota hai; jaise-jaise aap scroll karte hain, ek-ek word glowing white me highlight hota jata hai (Apple/Stripe style).
* **Infinite Marquee Ticker:** Text continuously left-to-right ya right-to-left loop me bina roke run karta hai aur scroll speed ke saath fast hota hai.
* **Text Scramble / Matrix Effect:** Text random matrix letters se pass hoke final word me convert hota hai.

### 5. 📜 Advanced Scroll Storytelling Styles
* **Pinned Horizontal Scroll Showcase:** Vertical wheel scroll ko Left-Right horizontal storytelling canvas me convert karna.
* **Layered Pinning (Section Deck Snap):** Webpage ke full sections ek ke upar ek presentation slide ki tarah overlay hote hain.
* **SVG Path Drawing / Stroke Trace:** Scroll karne par single line art ya SVG path screen par automatic draw hoti rehti hai.
* **3D Model Canvas Scroll (Three.js + GSAP):** Scroll karne par 3D Product (iPhone, Shoe, Watch) 360 degree space me rotate hota hai.

---

## ⚙️ GSAP Setup & Core Mechanics Fundamentals (Basic Info)

### 1. 🔌 Setup: CDN Links (HTML me kaise include karein)
Vanilla HTML/CSS/JS me GSAP load karne ke liye `</body>` tag ke thik pehle 2 script tags add karne hote hain:

```html
<!-- 1. GSAP Core Library -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>

<!-- 2. ScrollTrigger Plugin (Scroll animations ke liye) -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>

<!-- 3. Aapka Custom JS File -->
<script src="script.js"></script>
```

### 2. ⚡ JavaScript me Plugin Register karna Rule:
`script.js` ke top par ScrollTrigger plugin enable karne ke liye ye 1 line likhni hoti hai:
```javascript
gsap.registerPlugin(ScrollTrigger);
```

### 3. 🧠 GSAP ke 3 Basic Formulas:

* **Formula A: `gsap.to(target, { properties })`**
  - **Matlab:** Element jaisa abhi dikh raha hai (Current state) se **nayi state tak animate hoke jaye**.
  - **Example:** `gsap.to(".box", { x: 300, duration: 1 });` (Box 300px right jaye)

* **Formula B: `gsap.from(target, { properties })`**
  - **Matlab:** Element starting me distorted/invisible ho, aur **apni normal CSS state par wapas aaye**. (Hero Reveals ke liye Best!)
  - **Example:** `gsap.from(".hero-title", { y: 100, opacity: 0, duration: 1 });`

* **Formula C: `gsap.fromTo(target, { startingVars }, { endingVars })`**
  - **Matlab:** Jab starting state aur ending state dono exact hum tay karna chahte hain.

### 4. 🎛️ Essential Animation Properties:
- `x` / `y`: Left/Right & Up/Down Movement (`translateX` / `translateY`)
- `scale`: Zoom in / Zoom out (`scale: 1.5` ya `scale: 0.5`)
- `opacity`: Transparency (`0` = invisible, `1` = fully visible)
- `rotation` / `rotateX` / `rotateY`: 2D aur 3D Rotation
- `duration`: Animation timing in seconds (e.g. `duration: 1.5`)
- `ease`: Smoothness style (e.g. `ease: "power2.out"`, `ease: "back.out(1.7)"`)
- `stagger`: Multiple elements ke beech delay gap (e.g. `stagger: 0.2`)

---

### 🎨 Style 1.1 Creative Variations Log
* **Shape Variations:** `circle()`, `inset()` (Curtain reveal), `polygon()` (Diagonal sweep reveal), `ellipse()`.
* **Interaction Variations:** Scroll-linked scrub, Hover expansion, Mouse-follow Spotlight lens (`circle(150px at ${x}px ${y}px)`).
* **Layering Variations:** Before/After B&W to HD Color comparison reveal.

📁 **Self-Explanatory Prompt-Ready Subfolder Demos in `01_clip_path_image_reveal/`:**
1. `curtain_split_inset_reveal/` ➔ Vertical Curtain Split Reveal (`inset`)
2. `diagonal_sweep_polygon_wipe/` ➔ Diagonal Corner Sweep Reveal (`polygon`)
3. `interactive_mouse_spotlight_torch/` ➔ 60FPS Offscreen Canvas Moving Smoke Cloud Reveal Engine
4. `dual_image_before_after_comparison/` ➔ Dual Image Black & White to Full Color Reveal
5. `water_ripple_liquid_flow_reveal/` ➔ Water Ripple Liquid Wave Flow Composite Mask Engine
6. `interactive_scratch_card_reveal/` ➔ Interactive Scratch Card Texture Composite Reveal Engine
7. `fire_embers_vaporize_reveal/` ➔ Glowing Flame Sparks & Fiery Embers Vaporize Mask Engine
8. `artistic_ink_splatter_reveal/` ➔ Japanese Wet Watercolor Ink Splatter Brush Stroke Engine
9. `magic_dust_sparkle_reveal/` ➔ Magic Dust & Star Sparkle Wand Reveal Engine
10. `cyber_hexagon_honeycomb_reveal/` ➔ Cyber Hexagon Honeycomb Sci-Fi Matrix Scanner Engine
11. `cracked_frost_ice_reveal/` ➔ Glassmorphic Shattered Frost Ice Break Reveal Engine
12. `halftone_dot_matrix_reveal/` ➔ Retro Halftone Pop-Art Newspaper Dot Matrix Scanner Engine
13. `retro_pixelate_glitch_reveal/` ➔ Retro 8-Bit Pixel Blocks & Cyberpunk Glitch Matrix Reveal Engine
14. `lightning_electric_pulse_reveal/` ➔ High-Voltage Plasma Electric Arc & Lightning Spark Engine
15. `smoke_ring_shockwave_reveal/` ➔ Kinetic Vapor Blast Ring & Shockwave Wave Reveal Engine
16. `venetian_blind_slats_reveal/` ➔ 3D Venetian Metallic Louvered Shutter Slats Reveal Engine

🤖 **Added Dedicated `prompt.md` File to All 16 Demo Folders & Rule 9 in `.gemini`:**
- Har subfolder ke andar dedicated **`prompt.md`** file create kar di gayi hai jisme copy-pasteable AI Master Prompt मौजूद hai.
- Project rules file (`.gemini`) me **Rule 9: Mandatory Dedicated `prompt.md` File Rule** permanently add kar diya gaya hai.
- Future me bane wale sabhi animation folders me `prompt.md` file compulsory hogi.

🌐 **Global GitHub `README.md` Created (`canvas-reveals`):**
- Root directory par Awwwards-grade Global **`README.md`** create kar diya gaya hai jisme GitHub Shields, 16 Demos Catalog Table, `prompt.md` usage guide, Repository Tree Structure, Quick Start setup instructions, aur MIT License badge included hai.

🚀 **Style 1.2: `02_image_parallax_zoom/` Master Suite Completed (22 Sub-Demos Pushed):**
- Updated all 22 demos to use `nature1.jpeg` and `nature2.jpeg` from `../../assets/`.
- Created 22 dedicated sub-demo folders each with `index.html`, `styles.css`, `script.js`, `README.md`, and `prompt.md` (Rule 9):
  1. `multi_layer_3d_parallax/` ➔ Multi-Speed Spatial Depth Camera Engine
  2. `inner_counter_zoom_reveal/` ➔ Nike/Porsche Card 45vw ➔ 100vw Expand + Inner 1.6 ➔ 1.0 Counter Zoom
  3. `mouse_tilt_3d_parallax/` ➔ Interactive 3D Cursor Tilt Perspective + Glass Reflection Glare
  4. `horizontal_parallax_track_zoom/` ➔ Dual-Axis Pinned Horizontal Track + Counter Image Shift
  5. `scroll_velocity_zoom_inertia/` ➔ Streetwear Velocity Skew & Inertia Stretch Engine
  6. `infinite_tunnel_parallax_zoom/` ➔ Sci-Fi Concentric Image Z-Space Camera Tunnel Travel
  7. `split_screen_mirror_parallax/` ➔ Editorial Split 2-Column Counter Parallax (Left UP / Right DOWN)
  8. `circular_mask_scale_zoom/` ➔ Luxury Circle Aperture Expand (12% ➔ 100%) + Counter Image Zoom (2.2 ➔ 1.0)
  9. `depth_3d_card_stack_flythrough/` ➔ Apple Keynote 3D Card Stack Fly-Past Camera Lens
  10. `parallax_image_grid_distortion/` ➔ 3-Column Counter Grid Parallax (Odd UP / Even DOWN)
  11. `pinned_zoom_lens_spotlight/` ➔ 2.5x HD Detail Magnifying Spotlight Traversal Lens
  12. `isometric_3d_plane_parallax/` ➔ Web3 Isometric 3D Plane Height Elevation (translateZ: 180px)
  13. `spiral_vortex_3d_zoom/` ➔ Music Video 3D Spiral Rotational Depth Travel
🌊 **Style 1.3: `03_hover_liquid_distortion/` WebGL & Liquid Suite Completed (12 Sub-Demos):**
- Created 12 sub-demo engine folders using `nature1.jpeg` and `nature2.jpeg` from `../../assets/`:
  1. `water_ripple_displacement/` ➔ Interactive SVG Turbulence Water Wave Displacement Hover
  2. `rgb_split_glitch_liquid/` ➔ Cyberpunk RGB Color Channel Split & Wave Turbulence Hover
  3. `fluid_glass_refraction/` ➔ Luxury Circular Fluid Glass Lens Cursor Refraction & Zoom
  4. `directional_wave_slide/` ➔ Nature 1 ➔ Nature 2 Directional Liquid Wave Morph Transition
  5. `gelatin_jelly_wobble/` ➔ Soft elastic SVG displacement jelly bounce with GSAP spring
  6. `heat_wave_shimmer/` ➔ Continuous high-frequency heat haze desert distortion
  7. `magnetic_fluid_drag/` ➔ Thick liquid surface smears and drags towards the cursor
  8. `ink_drop_reveal/` ➔ Radial SVG gooey filter ink blob expands to reveal image 2
  9. `underwater_caustics_ripples/` ➔ Deep water current wave speed acceleration and color dodge
  10. `pixel_sort_melt/` ➔ Cyberpunk vertical stretching pixel sort displacement
  11. `liquid_blob_cursor_mask/` ➔ Organic shape-shifting mouse blob cursor masking image 2
  12. `sonic_boom_shockwave/` ➔ Rapid radial 0 ➔ 100 ➔ 0 displacement ripple blast on enter
- Every folder contains `index.html`, `styles.css`, `script.js`, `README.md`, and dedicated AI prompt `prompt.md` (Rule 9).















💨 **Upgraded `interactive_mouse_spotlight_torch` to 60FPS Offscreen Canvas Moving Smoke Cloud Image Reveal Engine:**
- Fixed DOM visibility bug: Top HD image (`#target-img`) is hidden from DOM and ONLY rendered via Offscreen Canvas Compositing (`destination-in`).
- Mouse movement spawns living fluid smoke clouds that swell, drift upwards, and dissolve.
- Top HD image reveals ONLY inside the living smoke cloud body!

🎨 **Creative Design Concepts Possible with Canvas Composite Masking:**
- **Water Ripple Liquid Flow Reveal** (Fluid water drops mask)
- **Scratch Card & Secret Coupon Reveal** (Interactive scratch-to-erase mask)
- **Fire Embers & Vaporize Burning Effect** (Fiery spark particles mask)
- **Artistic Ink Splatter / Paint Brush Wipe** (Watercolor & Japanese ink brush strokes mask)
- **Cyberpunk Heatmap / Thermal Vision Lens** (Infrared & matrix grid reveal lens)










---

## Session Update: Expanding Style 1.3 to 22 Demos
**Objective:** The user requested to push the `03_hover_liquid_distortion` suite to its maximum limit by adding 10 more advanced effects, bringing the total to 22.

**Accomplished:**
Successfully engineered 10 new high-performance, WebGL & SVG filter distortion engines:
1. **13. CRT VHS Scanline Glitch (`crt_scanline_glitch`)**: Retro `<feTurbulence>` jagged horizontal displacement with CSS scanlines.
2. **14. Crystal Prism Shatter (`crystal_prism_shatter`)**: High-end geometric multi-polygon glass shatter utilizing GSAP translations.
3. **15. Black Hole Warp Vortex (`black_hole_warp_vortex`)**: Extreme negative scale radial warp suck effect simulating an event horizon.
4. **16. Psychedelic Color Cycle (`psychedelic_color_cycle`)**: Trippy `<feColorMatrix>` 0-360 hue rotation combined with fluid displacement waves.
5. **17. Frosted Condensation Wipe (`frosted_condensation_wipe`)**: Dynamic CSS radial mask `quickTo` cursor reveal simulating wiping frosty glass.
6. **18. Oil Paint Swirl (`oil_paint_swirl`)**: High-octave thick `<feTurbulence>` creating a Van Gogh style wet paint smudge.
7. **19. Comic Halftone Distortion (`comic_halftone_distortion`)**: Pop-Art SVG dot pattern combined with liquid wave warping.
8. **20. Echo Ripple Trail (`echo_ripple_trail`)**: Dynamic GSAP DOM generation spawning concentric shockwave ripples under the cursor trail.
9. **21. Molten Lava Drip (`molten_lava_drip`)**: Intense red/orange color matrix heat filter with heavy vertical dripping displacement.
10. **22. Geometric Mosaic Pixelation (`geometric_mosaic_pixelation`)**: Web3 style instant 8-bit chunky geometric blocks using `<feMorphology>` radius shift.

**Status:**
- All 10 sub-demos created with complete HTML, CSS, GSAP logic, `README.md`, and `prompt.md`.
- `03_hover_liquid_distortion/README.md` updated to reflect the full catalog of 22 sub-demos.
- `roadmap.md` updated: Style 1.3 is now completed with 22 sub-demos.
- Pushed all updates to GitHub repo `i-amraj/gsap-reveals`.

**Next Phase:** Ready to begin **Style 1.4: Interactive Mouse Trail Multi-Image Sequence (`04_image_trail_cursor`)**.

---

## Session Update: Style 1.4 (Image Trail Cursor)
**Objective:** Build out the fourth and final module of Category 1: `04_image_trail_cursor`.

**Accomplished:**
Successfully engineered 8 diverse, interactive cursor trail variations using GSAP 3:
1. **Classic Sequential Trail (`classic_sequential_trail`)**: Images spawn on cursor path and fade/scale down.
2. **Random Scatter Collage (`random_scatter_trail`)**: Messy, randomly rotated image collage trail following mouse.
3. **Spring Elastic Lag (`spring_elastic_lag`)**: 5 images following the cursor with increasing elastic spring lag using `quickTo`.
4. **Velocity Stretch Trail (`velocity_stretch_trail`)**: Images stretch and skew dynamically based on mouse speed.
5. **Flipbook Scrub Sequence (`scrub_sequence_gallery`)**: Mouse X movement scrubs through an image array like a video timeline.
6. **Orbiting Image Ring (`circular_orbit_trail`)**: Spawned images orbit dynamically around the current cursor path.
7. **Depth Parallax Trail (`parallax_depth_trail`)**: Z-index & blur filters combined to create 3D floating depth.
8. **Grid Snap Trail (`grid_snap_trail`)**: Mouse movement leaves images behind that snap perfectly onto an invisible 150x150 mathematical grid.

**Extended Phase: Pushing to 22 Modules**
The user requested more variations, so we built 14 additional advanced trail concepts:
9. **Gravity Fall Trail (`gravity_fall_trail`)**: Images spawn and fall downwards out of the screen using gravity.
10. **Snake Follower Path (`snake_follower_path`)**: A fixed chain of images perfectly follows the history of the mouse path.
11. **Polaroid Pile Drop (`polaroid_pile_drop`)**: Polaroids drop and physically pile up permanently at the screen bottom.
12. **Tunnel Vision Flythrough (`tunnel_vision_flythrough`)**: Spawned images scale up massively into the camera like a tunnel.
13. **3D Card Flip Trail (`3d_card_flip_trail`)**: Spawned images pop in with a 3D Y-axis flip and flip out to fade.
14. **SVG Ripple Distortion (`svg_ripple_distortion_trail`)**: Images ripple and distort like water puddles via SVG turbulence.
15. **Color Matrix Neon (`color_matrix_neon_trail`)**: Images get random extreme neon cyberpunk SVG color matrices.
16. **Pixelate Resolve Trail (`pixelate_resolve_trail`)**: Chunky 8-bit mosaic images resolve to sharp photos before fading.
17. **Slice Shredder Explode (`slice_shredder_explode`)**: Images spawn and immediately slice into strips exploding apart.
18. **Brush Splatter Mask (`brush_splatter_mask`)**: Images are masked dynamically like rough paint brush splatters.
19. **Text Mask Reveal Trail (`text_mask_reveal_trail`)**: The trail of images is ONLY visible inside a giant typography mask.
20. **Magnetic Repel Scatter (`magnetic_repel_scatter`)**: Spawned images aggressively push away if the cursor touches them again.
21. **Spiral Vortex Suck (`spiral_vortex_suck`)**: Images spawn but instantly spiral into a central screen black hole.
22. **Cursor Spotlight Reveal (`cursor_spotlight_reveal`)**: Mouse acts as a trailing flashlight revealing a hidden image underneath.

**Status:**
- All 22 designs created with `index.html`, `styles.css`, `script.js`, and `prompt.md`.
- `04_image_trail_cursor/README.md` updated with all 22 modules.
- `roadmap.md` updated: Style 1.4 marked complete (22 Sub-Demos). Category 1 is fully finished.
- Code committed and pushed to GitHub repo.

**Next Phase:** Category 2: Card & Grid Visual Animation Styles (`05_apple_stacking_cards`).
