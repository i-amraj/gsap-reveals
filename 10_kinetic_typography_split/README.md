# Style 3.2: Kinetic Typography Split (`10_kinetic_typography_split`)

This module explores precise, staggered text reveals using clipping masks and 3D transforms. Unlike scrubbed animations that rely entirely on the user's scrollbar, these animations trigger automatically when the text enters the viewport, executing a perfectly choreographed kinetic sequence using GSAP's staggering capabilities combined with `SplitType`.

## 📦 Sub-Demos (Currently 22)

| # | Module Name | Description | Status |
|---|---|---|---|
| 01 | `masked_word_slide_up` | Words sweep upwards from behind invisible line masks into full view. | ✅ |
| 02 | `masked_char_slide_up` | Characters slide up individually from behind word masks, creating a typewriter-like wave. | ✅ |
| 03 | `3d_char_flip_up` | Characters physically flip up 90 degrees on the X-axis into place, like a mechanical board. | ✅ |
| 04 | `3d_char_swing_door` | Characters swing open like doors on the Y-axis from the left edge. | ✅ |
| 05 | `masked_skew_word_reveal` | Masked words un-skew and slide up simultaneously for added kinetic momentum. | ✅ |
| 06 | `3d_perspective_unfold` | Words unfold downwards from their top edge (`rotateX: -90`) like an unrolling physical map. | ✅ |
| 07 | `char_bounce_drop_in` | Characters drop from above the screen and elastically bounce into their final positions. | ✅ |
| 08 | `3d_char_barrel_roll` | Characters spin backwards 180 degrees on the X-axis while sliding up into place. | ✅ |
| 09 | `char_elastic_scale_up` | Characters pop past 100% scale and wobble down into place with elastic easing. | ✅ |
| 10 | `word_clip_path_wipe` | Animates the CSS `clip-path` polygon to elegantly wipe words into view from left to right. | ✅ |
| 11 | `char_zoom_blur_reveal` | Characters push deep into the Z-axis and blur heavily, before snapping forward into crisp focus. | ✅ |
| 12 | `char_explosion_collapse` | Characters start randomly exploded across X, Y, and rotation axes, snapping violently into a readable sentence. | ✅ |
| 13 | `3d_line_domino_fall` | Entire lines of text hinge from the bottom and fall forward `90deg` like tumbling dominoes. | ✅ |
| 14 | `masked_word_diagonal_slide` | Words slide upwards and diagonally (`x` and `y` offsets) from behind invisible clipping masks. | ✅ |
| 15 | `3d_char_spin_y` | Characters perform a full 360-degree horizontal spin on their Y-axis as they fade into existence. | ✅ |
| 16 | `line_clip_path_center_out` | Animates the `clip-path` polygon from a squished center-line outward to full width, stretching the text into reality. | ✅ |
| 17 | `char_clip_path_reveal_up` | Characters are unveiled cleanly from bottom to top using an inline `clip-path` wipe, staying stationary in the layout. | ✅ |
| 18 | `3d_word_swing_down` | Words are hinged from their top edge and swing heavily downwards on the X-axis with a bouncing ease. | ✅ |
| 19 | `word_blur_scale_slam` | Words start massively scaled and blurred, accelerating exponentially and slamming into focus with a hard stop. | ✅ |
| 20 | `char_random_decode_fade` | Removes directional flow entirely by randomly decoding and fading in characters sequentially across the text block. | ✅ |
| 21 | `word_tracking_pull_in` | Characters within words are magnetically pulled together as `letter-spacing` animates down to zero. | ✅ |
| 22 | `char_neon_flash_reveal` | Characters spark into existence with a heavy cyan neon `text-shadow` before cooling to pure white text. | ✅ |

## 🚀 How to Use
Navigate into any sub-directory and open `index.html` in your browser. Each directory contains a `prompt.md` which you can use to generate this exact effect in any AI.

## 🛠️ Tech Stack
* HTML5 / Vanilla CSS
* **GSAP 3** (Animation engine)
* **ScrollTrigger** (For firing animations exactly when elements enter the viewport)
* **SplitType** (For slicing paragraphs into targetable lines, words, and characters)
