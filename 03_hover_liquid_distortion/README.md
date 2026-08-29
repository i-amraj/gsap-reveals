# 🌊 Style 1.3: WebGL & GSAP Liquid Distortion Hover Suite (`03_hover_liquid_distortion`)

---

## 🎯 Overview & Sub-Demos

All 12 sub-demos use local nature media (`nature1.jpeg` & `nature2.jpeg`) from `../../assets/`.

### 📂 Included 12 Sub-Modules & AI Prompts

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

---

## 🧠 Core WebGL & SVG Displacement Concepts

### 1. Inline SVG Displacement Filter
```html
<filter id="liquidFilter">
  <feTurbulence id="turbulence" type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" />
  <feDisplacementMap id="dispMap" in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="G" />
</filter>
```

### 2. GSAP Interactive Mouse Tracking
```javascript
card.addEventListener("mouseenter", () => {
  gsap.to("#dispMap", { attr: { scale: 50 }, duration: 0.6, ease: "power2.out" });
});
card.addEventListener("mouseleave", () => {
  gsap.to("#dispMap", { attr: { scale: 0 }, duration: 0.8, ease: "power3.out" });
});
```
