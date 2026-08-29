# 🌊 Style 1.3: WebGL & GSAP Liquid Distortion Hover Suite (`03_hover_liquid_distortion`)

---

## 🎯 Overview & Sub-Demos

This module now contains a massive collection of **22 advanced interactive WebGL, SVG Filter, and Canvas Distortion Hover Engines**. All 22 sub-demos use local nature media (`nature1.jpeg` & `nature2.jpeg`) from `../../assets/`.

### 📂 Included 22 Sub-Modules & AI Prompts

| # | Effect Name | Subfolder Link | AI Prompt (`prompt.md`) | Visual Description |
|---|---|---|---|---|
| 1 | 🌊 **Water Wave Liquid Ripple** | [`water_ripple_displacement/`](water_ripple_displacement/) | [`prompt.md`](water_ripple_displacement/prompt.md) | Interactive SVG turbulence water wave displacement hover |
| 2 | 🚥 **RGB Split Chromatic Liquid** | [`rgb_split_glitch_liquid/`](rgb_split_glitch_liquid/) | [`prompt.md`](rgb_split_glitch_liquid/prompt.md) | Cyberpunk RGB color channel split & wave turbulence hover |
| 3 | 🧪 **Fluid Glass Refraction** | [`fluid_glass_refraction/`](fluid_glass_refraction/) | [`prompt.md`](fluid_glass_refraction/prompt.md) | Luxury circular fluid glass lens cursor refraction & zoom |
| 4 | 🔀 **Directional Fluid Morph** | [`directional_wave_slide/`](directional_wave_slide/) | [`prompt.md`](directional_wave_slide/prompt.md) | Nature 1 ➔ Nature 2 directional liquid wave morph transition |
| 5 | 🍮 **Gelatin Jelly Wobble** | [`gelatin_jelly_wobble/`](gelatin_jelly_wobble/) | [`prompt.md`](gelatin_jelly_wobble/prompt.md) | Soft elastic SVG displacement jelly bounce with GSAP spring |
| 6 | ♨️ **Heat Wave Mirage Shimmer** | [`heat_wave_shimmer/`](heat_wave_shimmer/) | [`prompt.md`](heat_wave_shimmer/prompt.md) | Continuous high-frequency heat haze desert distortion |
| 7 | 🧲 **Magnetic Fluid Drag** | [`magnetic_fluid_drag/`](magnetic_fluid_drag/) | [`prompt.md`](magnetic_fluid_drag/prompt.md) | Thick liquid surface smears and drags towards the cursor |
| 8 | 💧 **Ink Drop Liquid Reveal** | [`ink_drop_reveal/`](ink_drop_reveal/) | [`prompt.md`](ink_drop_reveal/prompt.md) | Radial SVG gooey filter ink blob expands to reveal image 2 |
| 9 | 🌊 **Underwater Caustics Ripples** | [`underwater_caustics_ripples/`](underwater_caustics_ripples/) | [`prompt.md`](underwater_caustics_ripples/prompt.md) | Deep water current wave speed acceleration and color dodge |
| 10 | 👾 **Pixel Sort Glitch Melt** | [`pixel_sort_melt/`](pixel_sort_melt/) | [`prompt.md`](pixel_sort_melt/prompt.md) | Cyberpunk vertical stretching pixel sort displacement |
| 11 | 🕳️ **Liquid Blob Cursor Mask** | [`liquid_blob_cursor_mask/`](liquid_blob_cursor_mask/) | [`prompt.md`](liquid_blob_cursor_mask/prompt.md) | Organic shape-shifting mouse blob cursor masking image 2 |
| 12 | 💥 **Sonic Boom Shockwave** | [`sonic_boom_shockwave/`](sonic_boom_shockwave/) | [`prompt.md`](sonic_boom_shockwave/prompt.md) | Rapid radial 0 ➔ 100 ➔ 0 displacement ripple blast on enter |
| 13 | 📺 **CRT VHS Scanline Glitch** | [`crt_scanline_glitch/`](crt_scanline_glitch/) | [`prompt.md`](crt_scanline_glitch/prompt.md) | Retro CRT TV scanline signal jagged horizontal displacement |
| 14 | 💎 **Crystal Prism Shatter** | [`crystal_prism_shatter/`](crystal_prism_shatter/) | [`prompt.md`](crystal_prism_shatter/prompt.md) | Geometric multi-polygon glass shattered explosion |
| 15 | 🕳️ **Black Hole Warp Vortex** | [`black_hole_warp_vortex/`](black_hole_warp_vortex/) | [`prompt.md`](black_hole_warp_vortex/prompt.md) | Extreme inward radial warp singularity scale suck |
| 16 | 🌈 **Psychedelic Color Cycle** | [`psychedelic_color_cycle/`](psychedelic_color_cycle/) | [`prompt.md`](psychedelic_color_cycle/prompt.md) | Trippy hue-rotation color matrix loop with liquid waves |
| 17 | ❄️ **Frosted Condensation Wipe** | [`frosted_condensation_wipe/`](frosted_condensation_wipe/) | [`prompt.md`](frosted_condensation_wipe/prompt.md) | Cursor wiping away winter frosted blur via dynamic radial mask |
| 18 | 🎨 **Oil Paint Swirl** | [`oil_paint_swirl/`](oil_paint_swirl/) | [`prompt.md`](oil_paint_swirl/prompt.md) | High-octave thick Van Gogh style wet paint smudging |
| 19 | 📰 **Comic Halftone Distortion** | [`comic_halftone_distortion/`](comic_halftone_distortion/) | [`prompt.md`](comic_halftone_distortion/prompt.md) | SVG patterned Pop-Art comic dot liquid warping |
| 20 | 📡 **Echo Ripple Trail** | [`echo_ripple_trail/`](echo_ripple_trail/) | [`prompt.md`](echo_ripple_trail/prompt.md) | Dynamic GSAP DOM concentric circular wave spawning trails |
| 21 | 🔥 **Molten Lava Drip** | [`molten_lava_drip/`](molten_lava_drip/) | [`prompt.md`](molten_lava_drip/prompt.md) | Intense red color matrix heat filter with vertical dripping |
| 22 | 🔲 **Geometric Mosaic Pixelation** | [`geometric_mosaic_pixelation/`](geometric_mosaic_pixelation/) | [`prompt.md`](geometric_mosaic_pixelation/prompt.md) | Instant 8-bit chunky geometric blocks via `feMorphology` |

---

## 🧠 Core WebGL & SVG Distortion Concepts

### 1. The Core Filter Structure
```html
<filter id="liquidFilter">
  <!-- Turbulence generates noise -->
  <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" />
  <!-- Displacement maps the noise to stretch pixels -->
  <feDisplacementMap in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="G" />
</filter>
```

### 2. GSAP Filter Animation
```javascript
// Animating the 'scale' attribute of an SVG tag
gsap.to("#dispMap", { attr: { scale: 50 }, duration: 0.6, ease: "power2.out" });
```
