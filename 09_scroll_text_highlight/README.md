# 🌟 Style 3.1: Scroll Scrubbed Text Highlight (`09_scroll_text_highlight`)

This module focuses on Apple/Stripe-style kinetic typography where text dynamically reacts to the user's vertical scroll position. By utilizing GSAP ScrollTrigger combined with the `SplitType` library, we can easily slice text into lines, words, or characters and animate them seamlessly.

## 📦 Sub-Demos (Currently 22)

| # | Module Name | Description | Status |
|---|---|---|---|
| 01 | `word_by_word_opacity` | Text starts faded out. As you scroll, individual words transition to full opacity smoothly. | ✅ |
| 02 | `character_by_character_opacity` | Same as word-by-word, but scrubbed on a granular character-by-character level. | ✅ |
| 03 | `line_by_line_opacity` | Entire lines of text light up sequentially as they cross the center of the viewport. | ✅ |
| 04 | `word_blur_reveal` | Words start blurry and transparent, snapping into crisp focus as the scroll triggers them. | ✅ |
| 05 | `character_color_fill` | Text outlines (using `-webkit-text-stroke`) are filled with solid color character-by-character. | ✅ |
| 06 | `line_mask_reveal_up` | Using `overflow: hidden` on lines, words sweep upwards physically out of thin air on scroll. | ✅ |
| 07 | `word_stagger_scale` | Words scale up from 0 to 1 as they fade in, giving a punchy, popping kinetic typography effect. | ✅ |
| 08 | `highlight_marker_swipe` | A solid background color and text color shift simulates dragging a highlighter across the words. | ✅ |
| 09 | `character_rotation_flip` | Applies a 3D perspective to words, allowing characters to flip down (`rotateX`) like a mechanical board. | ✅ |
| 10 | `neon_glow_illuminate` | Text brightens and gains a heavy, layered `text-shadow`, physically "turning on" like neon lights. | ✅ |
| 11 | `random_character_reveal` | Leverages GSAP's `stagger: { from: 'random' }` to decode and fade in characters in completely random order. | ✅ |
| 12 | `text_shadow_parallax` | Animates the `text-shadow` offset dynamically, giving the illusion of a sweeping light source over the text. | ✅ |
| 13 | `word_slide_from_left` | Words seamlessly drift in from the left (`translateX`) while fading up, guiding the reader's eye. | ✅ |
| 14 | `character_sine_wave` | Uses a yoyo repeat inside a stagger to send a continuous lifting wave through the letters as you scroll. | ✅ |
| 15 | `word_slam_focus` | Words start massive and blurry, aggressively scaling down into focus to create a heavy visual impact. | ✅ |
| 16 | `character_3d_fall` | Characters physically drop from above on the Z-axis, slotting perfectly into place on the screen. | ✅ |
| 17 | `3d_line_tilt_reveal` | Lines of text swing down from a -90deg `rotateX` tilt like a cinematic drawbridge. | ✅ |
| 18 | `gradient_mask_wipe` | Uses pure CSS background-clip and GSAP `background-position` for a flawless, un-segmented Apple color wipe. | ✅ |
| 19 | `letter_spacing_expansion` | Lines of text decompress horizontally (`letter-spacing`) as they fade in, releasing visual tension. | ✅ |
| 20 | `center_out_reveal` | Leverages `stagger: { from: 'center' }` to send a shockwave of revealing words expanding outwards from the middle. | ✅ |
| 21 | `font_weight_shift` | Animates a variable font from weight 100 to 900 smoothly across scrubbed words for organic thickness. | ✅ |
| 22 | `focus_wave_scrub` | Sends a moving, yoyo wave of un-blurred, scaled-up focus through the sentence, leaving the past blurred. | ✅ |

## 🚀 How to Use
Navigate into any sub-directory and open `index.html` in your browser. Each directory contains a `prompt.md` which you can use to generate this exact effect in any AI.

## 🧠 Core Concepts
- **`SplitType`**: A lightweight library (`new SplitType('#target')`) used to wrap characters, words, and lines in separate `<span>` elements, making them targetable by GSAP.
- **`ScrollTrigger scrub: true`**: Links the progress of a GSAP stagger animation directly to the scrollbar, allowing forward and backward scrub.
- **`stagger`**: GSAP's built-in feature to sequentially offset the animation start times of multiple elements (e.g., characters).
