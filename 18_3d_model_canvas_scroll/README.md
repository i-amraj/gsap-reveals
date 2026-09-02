# 🎨 Style 5.4: 3D Model Canvas Scroll (`18_3d_model_canvas_scroll`)

This library provides 22 variations of the famous "Apple-style" product reveal using HTML5 `<canvas>` sequence scrubbing and `<video>` scrubbing.

*Note: To ensure these templates work instantly without requiring you to download hundreds of heavy image sequences or `.gltf` 3D models, most of these templates use native Canvas 2D procedural rendering to simulate 360-degree rotation frames. You can easily swap the `render()` function in these scripts to draw your own pre-loaded Image objects (e.g., `ctx.drawImage(images[frame], 0, 0)`).*

## 🚀 How to Use
Navigate into any sub-directory and open `index.html` in your browser. Each directory contains a `prompt.md` which you can use to generate this exact effect in any AI.

## 📚 Variations Catalog

| # | Module | Core Technique | Status |
|---|---|---|---|
| 01 | `basic_canvas_scrub` | A standard HTML5 canvas scrubbing an image sequence on scroll. | ✅ |
| 02 | `canvas_scrub_with_text` | Text fades in and out at specific frame intervals of the scrub. | ✅ |
| 03 | `reverse_canvas_scrub` | The image sequence scrubs backwards as you scroll down. | ✅ |
| 04 | `canvas_scrub_progress_bar` | A progress bar tracks the frame scrubbing progress. | ✅ |
| 05 | `yoyo_canvas_scrub` | The sequence scrubs forward then backward within the same scroll trigger. | ✅ |
| 06 | `canvas_zoom_in_scrub` | The canvas scales up (zooms in) while the frames are scrubbing. | ✅ |
| 07 | `canvas_blur_scrub` | The canvas starts blurred, comes into focus while scrubbing, then blurs out. | ✅ |
| 08 | `horizontal_canvas_scrub` | The canvas scrubs while the user scrolls horizontally in a pinned section. | ✅ |
| 09 | `canvas_scrub_color_shift` | A CSS filter changes the hue of the canvas as the frames progress. | ✅ |
| 10 | `split_screen_canvas_scrub` | Half screen canvas scrub, half screen scrolling text content. | ✅ |
| 11 | `canvas_scrub_on_hover` | Scrubbing the image sequence based on horizontal mouse movement instead of scroll. | ✅ |
| 12 | `multi_canvas_scrub` | Two separate canvases scrubbing different sequences simultaneously. | ✅ |
| 13 | `canvas_scrub_with_svg_mask` | The scrubbing canvas is masked by an SVG shape. | ✅ |
| 14 | `canvas_scrub_opacity_fade` | Canvas fades in, scrubs, then fades out perfectly at the end of the pin. | ✅ |
| 15 | `canvas_scrub_parallax` | The canvas scrubs while moving at a different parallax speed than the background. | ✅ |
| 16 | `canvas_scrub_step_frames` | Scrubbing snaps to specific frames without smooth interpolation. | ✅ |
| 17 | `canvas_scrub_responsive` | Ensuring the canvas redraws and scales correctly on window resize. | ✅ |
| 18 | `canvas_scrub_with_audio` | Audio volume increases/decreases based on scrub progress. | ✅ |
| 19 | `canvas_scrub_3d_tilt` | The canvas element itself tilts using CSS 3D transforms while scrubbing. | ✅ |
| 20 | `canvas_scrub_lottie_alternative` | Using Lottie via GSAP instead of a canvas image sequence. | ✅ |
| 21 | `canvas_scrub_video_alternative` | Scrubbing a standard HTML5 `<video>` element's currentTime instead of canvas frames. | ✅ |
| 22 | `apple_airpods_replica` | A complete, polished replica of an Apple-style product reveal using canvas scrub and text reveals. | ✅ |
