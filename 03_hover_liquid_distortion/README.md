# 🌊 Style 1.3: WebGL & GSAP Liquid Distortion Hover Suite (`03_hover_liquid_distortion`)

---

## 🎯 Overview & Sub-Demos

All sub-demos use local nature media (`nature1.jpeg` & `nature2.jpeg`) from `../../assets/`.

### 📂 Included Sub-Modules & AI Prompts

| # | Effect Name | Subfolder Link | AI Prompt (`prompt.md`) | Visual Description |
|---|---|---|---|---|
| 1 | 🌊 **Water Wave Liquid Ripple** | [`water_ripple_displacement/`](water_ripple_displacement/) | [`prompt.md`](water_ripple_displacement/prompt.md) | Interactive SVG turbulence water wave displacement hover |
| 2 | 🚥 **RGB Split Chromatic Liquid** | [`rgb_split_glitch_liquid/`](rgb_split_glitch_liquid/) | [`prompt.md`](rgb_split_glitch_liquid/prompt.md) | Cyberpunk RGB color channel split & wave turbulence hover |
| 3 | 🧪 **Fluid Glass Refraction** | [`fluid_glass_refraction/`](fluid_glass_refraction/) | [`prompt.md`](fluid_glass_refraction/prompt.md) | Luxury circular fluid glass lens cursor refraction & zoom |
| 4 | 🔀 **Directional Fluid Morph** | [`directional_wave_slide/`](directional_wave_slide/) | [`prompt.md`](directional_wave_slide/prompt.md) | Nature 1 ➔ Nature 2 directional liquid wave morph transition |

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
