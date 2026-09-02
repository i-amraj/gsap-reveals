# Style 3.3: Infinite Marquee Ticker (`11_infinite_marquee_ticker`)

This module focuses on creating seamless, infinite loops of typography, often referred to as "Marquees" or "Tickers". 

A highly popular technique in modern web design, marquees create a sense of continuous motion and urgency. Rather than just looping CSS animations, we use GSAP to manipulate the `timeScale()` of the looping tween, allowing the marquee to react dynamically to user scroll velocity and scroll direction.

## 📦 Sub-Demos (Currently 22)

| # | Module Name | Description | Status |
|---|---|---|---|
| 01 | `basic_horizontal_marquee` | A standard, seamless infinite loop running left continuously. | ✅ |
| 02 | `velocity_speed_marquee` | The marquee speeds up exponentially when the user scrolls quickly. | ✅ |
| 03 | `scroll_direction_marquee` | The marquee reverses its looping direction depending on if the user is scrolling up or down. | ✅ |
| 04 | `vertical_infinite_marquee` | A marquee that loops vertically (Y-axis) rather than horizontally. | ✅ |
| 05 | `skewed_velocity_marquee` | Text physically leans (skews) into the direction of your scroll velocity, simulating motion blur. | ✅ |
| 06 | `dual_opposite_marquees` | Two interlocking tracks (one solid, one outlined) flowing seamlessly in opposite directions. | ✅ |
| 07 | `perspective_3d_marquee` | A marquee looping continuously along a 3D tilted and skewed plane. | ✅ |
| 08 | `marquee_hover_pause` | A highly practical UI ticker that smoothly decelerates to a stop when hovered by the user. | ✅ |
| 09 | `staggered_multi_lane_marquee` | Multiple tracks with different styling (large, outline, italic) running at different speeds to create parallax depth. | ✅ |
| 10 | `marquee_text_clip_mask` | The marquee text acts as a moving clipping mask, revealing different areas of a fixed background image as it scrolls. | ✅ |
| 11 | `scrub_only_marquee` | A marquee that does not auto-play, but rather scrubs back and forth entirely based on the user's vertical page scroll position. | ✅ |
| 12 | `image_carousel_marquee` | Applying the exact same `-50%` GSAP logic to a track of images instead of text, creating a flawless infinite slider. | ✅ |
| 13 | `marquee_color_change_on_scroll` | A marquee that dynamically inherits and transitions its colors based on the page's scroll position while continuously looping. | ✅ |
| 14 | `diagonal_infinite_marquee` | A full-bleed marquee track skewed diagonally across the viewport like caution tape. | ✅ |
| 15 | `mouse_follow_marquee` | An interactive marquee where the user's mouse X-position dictates both the speed and direction of the flow. | ✅ |
| 16 | `svg_textPath_marquee` | Wrapping the marquee text along a curved SVG vector path and animating `startOffset` for non-linear loops. | ✅ |
| 17 | `vertical_marquee_columns` | Five full-screen vertical marquees placed side-by-side, alternating in opposite directions to form a data stream background. | ✅ |
| 18 | `marquee_mask_reveal_hover` | A magical UI effect where the looping marquee is entirely hidden until revealed by a circular clipping mask attached to the user's cursor. | ✅ |
| 19 | `marquee_blend_mode` | The marquee leverages CSS `mix-blend-mode: difference` to perfectly invert the colors of a complex image background as it loops. | ✅ |
| 20 | `marquee_scroll_blur` | The marquee tracks the user's scroll velocity and translates it into a dynamic CSS `filter: blur()`, simulating rapid camera motion blur. | ✅ |
| 21 | `marquee_split_directions` | A single line of text sliced exactly in half horizontally using `clip-path`, with the top and bottom halves moving in opposite directions. | ✅ |
| 22 | `marquee_gradient_edge_fade` | Fading out the left and right edges using a CSS linear-gradient `mask-image`, creating a classic cylindrical ticker tape look. | ✅ |

## 🚀 How to Use
Navigate into any sub-directory and open `index.html` in your browser. Each directory contains a `prompt.md` which you can use to generate this exact effect in any AI.

## 🧠 Core Concept: The `-50%` Loop
The easiest way to create a seamless GSAP marquee is to put **two identical copies** of your text inside a wide flex container. You then animate that container from `xPercent: 0` to `xPercent: -50`. Because the two halves are identical, the moment it hits `-50%`, it looks exactly like `0%`. We then use `repeat: -1` and `ease: "none"` to infinitely jump back to 0 and start over, creating a flawless, invisible seam.
