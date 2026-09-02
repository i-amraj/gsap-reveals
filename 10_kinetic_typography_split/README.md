# Style 3.2: Kinetic Typography Split (`10_kinetic_typography_split`)

This module explores precise, staggered text reveals using clipping masks and 3D transforms. Unlike scrubbed animations that rely entirely on the user's scrollbar, these animations trigger automatically when the text enters the viewport, executing a perfectly choreographed kinetic sequence using GSAP's staggering capabilities combined with `SplitType`.

## 📦 Sub-Demos (Currently 8)

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

## 🚀 How to Use
Navigate into any sub-directory and open `index.html` in your browser. Each directory contains a `prompt.md` which you can use to generate this exact effect in any AI.

## 🛠️ Tech Stack
* HTML5 / Vanilla CSS
* **GSAP 3** (Animation engine)
* **ScrollTrigger** (For firing animations exactly when elements enter the viewport)
* **SplitType** (For slicing paragraphs into targetable lines, words, and characters)
