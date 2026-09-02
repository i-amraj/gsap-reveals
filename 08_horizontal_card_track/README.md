# 08_horizontal_card_track (GSAP ScrollTrigger Horizontal Scroll)

This module demonstrates how to create horizontal scrolling sections linked to vertical scroll using GSAP ScrollTrigger. By pinning a container and translating an inner track on the X-axis, we can hijack the standard vertical scroll to create immersive horizontal experiences.

## 📦 Sub-Demos (Currently 8)

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

## 🚀 How to Use
Navigate into any sub-directory and open `index.html` in your browser. Each directory contains a `prompt.md` which you can use to generate this exact effect in any AI.
