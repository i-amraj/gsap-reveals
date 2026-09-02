# 08_horizontal_card_track (GSAP ScrollTrigger Horizontal Scroll)

This module demonstrates how to create horizontal scrolling sections linked to vertical scroll using GSAP ScrollTrigger. By pinning a container and translating an inner track on the X-axis, we can hijack the standard vertical scroll to create immersive horizontal experiences.

## 📦 Sub-Demos (Currently 16)

| # | Module Name | Description | Status |
|---|---|---|---|
| 01 | `basic_horizontal_scroll` | A classic horizontal scroll where vertical scrolling translates a flex track to the left. | ✅ |
| 02 | `skewed_velocity_scroll` | Cards dynamically skew based on the user's scroll speed (`self.getVelocity()`). | ✅ |
| 03 | `parallax_image_track` | Background images inside the cards move at a different rate than the scroll track. | ✅ |
| 04 | `snap_to_card_scroll` | When scrolling stops, the viewport perfectly snaps to center the nearest card on screen. | ✅ |
| 05 | `draggable_horizontal_scroll` | Uses GSAP Observer to link mousewheel and dragging to horizontal translation without native scrollbars. | ✅ |
| 06 | `horizontal_card_stacking` | Cards slide in from the right and physically stack on top of each other scaling down. | ✅ |
| 07 | `horizontal_curved_path` | Uses `containerAnimation` to animate cards on the Y-axis forming an arc as they scroll horizontally. | ✅ |
| 08 | `scale_on_center_scroll` | Uses `containerAnimation` to highlight and scale up cards exactly as they hit the viewport center. | ✅ |
| 09 | `fade_blur_edges` | Uses `containerAnimation` to blur and fade out cards when they are not in the center of the viewport. | ✅ |
| 10 | `horizontal_image_reveal` | Uses `containerAnimation` and `clip-path` to dynamically wipe/reveal images as they scroll into view. | ✅ |
| 11 | `parallax_multi_layer_track` | Three absolute layers (bg, mid, fg) scroll horizontally at vastly different speeds for intense depth. | ✅ |
| 12 | `infinite_horizontal_marquee` | An auto-playing CSS marquee that accelerates (`timeScale`) significantly when the user scrolls. | ✅ |
| 13 | `skew_on_drag` | GSAP Draggable tracks velocity (`delta X`) to physically distort/skew cards when dragged manually. | ✅ |
| 14 | `perspective_3d_track` | 3D Cover Flow layout synced to horizontal scroll using `containerAnimation` and `rotateY`. | ✅ |
| 15 | `horizontal_timeline_scrub` | A progress bar and marker dots that visually sync with cards entering the center of the viewport. | ✅ |
| 16 | `background_color_shift` | Smoothly morphs the entire page's background color to match the dominant color of the centered card. | ✅ |

## 🚀 How to Use
Navigate into any sub-directory and open `index.html` in your browser. Each directory contains a `prompt.md` which you can use to generate this exact effect in any AI.
