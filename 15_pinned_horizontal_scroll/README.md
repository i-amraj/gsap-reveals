# 🛤️ Style 5.1: Pinned Horizontal Showcase Track (`15_pinned_horizontal_scroll`)

This library provides 22 variations of horizontal scrolling layouts created using GSAP ScrollTrigger. The container is pinned, and vertical scrolling is translated into horizontal movement, creating a seamless horizontal track experience.

## 🚀 How to Use
Navigate into any sub-directory and open `index.html` in your browser. Each directory contains a `prompt.md` which you can use to generate this exact effect in any AI.

## 📚 Variations Catalog

| # | Module | Core Technique | Status |
|---|---|---|---|
| 01 | `basic_horizontal_scroll` | A standard pinned section where a wide flex container translates left proportionally to the vertical scroll progress. | ✅ |
| 02 | `parallax_horizontal_cards` | Cards move horizontally, while inner images parallax horizontally within their masks for a dynamic 3D feel. | ✅ |
| 03 | `snap_to_section` | Horizontal track smoothly snaps to the nearest panel/section when scrolling stops using ScrollTrigger `snap`. | ✅ |
| 04 | `curved_horizontal_path` | Panels move horizontally but are also animated vertically using a sine wave math function to simulate a curved path. | ✅ |
| 05 | `scale_down_on_leave` | Cards shrink and fade as they exit towards the left of the viewport during a horizontal scroll. | ✅ |
| 06 | `fade_in_horizontal` | As panels enter from the right during horizontal scroll, their opacity and scale animate from 0.1 to 1. | ✅ |
| 07 | `skew_on_scroll` | Elements skew horizontally (`skewX`) based on the vertical scroll velocity. Springs back to 0 when scrolling stops. | ✅ |
| 08 | `stagger_reveal_horizontal` | Nested elements inside each panel are stagger-revealed precisely when their parent panel reaches the center of the horizontal view. | ✅ |
| 09 | `overlap_cards_horizontal` | Cards stack horizontally. As you scroll, the next card slides in from the right to cover the current card, which shrinks slightly. | ✅ |
| 10 | `horizontal_accordion` | Panels use flexbox `flex-grow`. As you scroll, each panel expands sequentially while others collapse. | ✅ |
| 11 | `background_color_change_horizontal` | The `<body>` background color interpolates between an array of colors based on the horizontal scroll progress using `onUpdate`. | ✅ |
| 12 | `text_marquee_horizontal` | A massive typography block acts as the horizontal track itself, creating a scroll-scrubbed text marquee. | ✅ |
| 13 | `horizontal_image_gallery` | A classic horizontal scrolling image gallery leveraging a flex row and ScrollTrigger pinning. | ✅ |
| 14 | `3d_cylinder_scroll` | Uses a pinned section to scrub a 360-degree `rotateY` animation on a CSS 3D cylinder composed of 6 faces. | ✅ |
| 15 | `horizontal_timeline` | A horizontal timeline with a fixed background line. As you scroll, the progress line fills up via `onUpdate`. | ✅ |
| 16 | `zoom_in_horizontal` | Cards start small. As they approach the horizontal center, they scale up, then scale down as they leave. | ✅ |
| 17 | `horizontal_parallax_layers` | Multiple absolutely positioned tracks scroll horizontally at different speeds to simulate 3D depth. | ✅ |
| 18 | `horizontal_infinite_loop` | Demonstrates the classic GSAP `horizontalLoop` helper function for seamless infinite CSS/JS marquees. | ✅ |
| 19 | `horizontal_clip_path_reveal` | Uses scroll progress to expand a circular `clip-path`, revealing a contrasting layer underneath. | ✅ |
| 20 | `horizontal_video_scrub` | Scroll progress maps directly to the `currentTime` of an HTML5 video, allowing you to scrub the video. | ✅ |
| 21 | `horizontal_sticky_header` | An absolute positioned header on the left stays visually fixed over the pinned track, while the track slides underneath it. | ✅ |
| 22 | `horizontal_cursor_drag` | Uses `GSAP Draggable` to let the user literally click and drag the horizontal track left and right. | ✅ |
