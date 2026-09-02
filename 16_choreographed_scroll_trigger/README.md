# 🎭 Style 5.2: Staggered Multi-Element Choreography (`16_choreographed_scroll_trigger`)

This library provides 22 variations of choreographed ScrollTrigger animations. Instead of simple one-off reveals, these modules focus on complex, multi-element sequences, timelines, staggers, and state-based animations.

## 🚀 How to Use
Navigate into any sub-directory and open `index.html` in your browser. Each directory contains a `prompt.md` which you can use to generate this exact effect in any AI.

## 📚 Variations Catalog

| # | Module | Core Technique | Status |
|---|---|---|---|
| 01 | `basic_stagger_reveal` | Elements animate in one by one using `stagger` property when the container enters the viewport. | ✅ |
| 02 | `timeline_scrub_choreography` | A complex timeline tied to scroll `scrub`, animating multiple elements at different offsets. | ✅ |
| 03 | `pin_and_animate_sequence` | Section pins in place, then multiple elements animate in sequence while scrubbing before unpinning. | ✅ |
| 04 | `scroll_direction_aware` | Elements animate differently (or hide/show) based on whether scrolling down or up using `onEnterBack`. | ✅ |
| 05 | `parallax_stagger_cards` | Combines staggered reveal with continuous parallax scrolling of columns moving at different speeds. | ✅ |
| 06 | `text_image_sync_reveal` | An image reveals via `clip-path` wipe while its corresponding text slides and fades in synchronously. | ✅ |
| 07 | `grid_cascade_reveal` | Uses advanced `stagger` (`grid: [3,3]`, `from: "edges"`) for a complex, cascading grid reveal. | ✅ |
| 08 | `scale_and_fade_stagger` | Elements simultaneously scale up from 0 and fade in staggeringly. | ✅ |
| 09 | `rotate_in_sequence` | Elements swing in sequentially on the Y axis (`rotateY`) from -90 to 0 degrees. | ✅ |
| 10 | `clip_path_stagger` | Multiple images reveal sequentially using `clip-path: polygon()` interpolation. | ✅ |
| 11 | `color_shift_stagger` | Typography elements sequentially transition their text color from dark to active highlight. | ✅ |
| 12 | `bounce_in_stagger` | Uses `bounce.out` easing combined with stagger to make multiple elements physically "drop and bounce" in. | ✅ |
| 13 | `split_text_stagger` | Masked text lines slide up sequentially using a translation within a hidden overflow wrapper. | ✅ |
| 14 | `random_reveal_stagger` | Utilizes `stagger: { from: "random" }` to reveal a grid of elements in a chaotic sequence. | ✅ |
| 15 | `layered_image_build` | Simulates an image assembling itself from multiple layers flying in while pinned. | ✅ |
| 16 | `path_follow_stagger` | Animates multiple elements staggered along an SVG path while scrubbing (via MotionPathPlugin). | ✅ |
| 17 | `3d_flip_stagger` | Cards use CSS 3D perspective to flip in staggeringly from `rotateX(-180deg)` to `0deg`. | ✅ |
| 18 | `blur_to_focus_stagger` | Typography scales down and animates `filter: blur()` to simulate coming into focus. | ✅ |
| 19 | `border_draw_stagger` | Uses pseudo-elements to simulate drawing borders around boxes staggeringly. | ✅ |
| 20 | `isometric_grid_build` | Uses CSS 3D transforms (`rotateX`, `rotateZ`) to build an isometric grid block by block. | ✅ |
| 21 | `accordion_stagger_open` | Accordion panels animate open staggeringly automatically as the user scrolls them into view. | ✅ |
| 22 | `hero_to_footer_choreography` | One master timeline orchestrates the entire page experience relative to the total scroll distance. | ✅ |
