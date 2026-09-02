# 🧲 Style 4.2: Magnetic Cursor & Buttons (`14_magnetic_cursor_buttons`)

This library explores the art of custom cursor design and magnetic UI physics — effects that make buttons feel alive, tactile, and premium. All logic is built on GSAP's `quickTo` for ultra-smooth 60fps physics without Spring plugins.

## 📦 Sub-Demos (22 Variations)

| # | Module Name | Description | Status |
|---|---|---|---|
| 01 | `basic_magnetic_cursor` | A custom circular cursor that smoothly follows the mouse using GSAP `quickTo` with a configurable lag factor. | ✅ |
| 02 | `magnetic_button_hover` | Buttons physically attract the cursor when it enters their radius — the core magnetic button interaction pattern. | ✅ |
| 03 | `custom_cursor_follower` | A dual-layer cursor: one snaps to mouse instantly, a second larger circle lags behind for a premium feel. | ✅ |
| 04 | `cursor_trail_particles` | Mouse movement leaves a fading trail of particle dots. Uses `requestAnimationFrame` and opacity decay. | ✅ |
| 05 | `cursor_text_morph` | Cursor expands and shows custom label text (`data-cursor` attribute) when hovering elements. | ✅ |
| 06 | `magnetic_image_tilt` | Cards tilt in 3D using `rotateX/rotateY` calculated from mouse offset within the card. Spring back on leave. | ✅ |
| 07 | `cursor_spotlight_reveal` | A dark overlay with `radial-gradient` centered on the cursor position — reveals content beneath as a spotlight. | ✅ |
| 08 | `elastic_nav_menu` | Nav links use magnetic attraction on `mousemove` and `elastic.out` spring-back on `mouseleave`. | ✅ |
| 09 | `cursor_color_shift` | Cursor changes background color when entering different colored page zones using `mouseenter` events. | ✅ |
| 10 | `magnetic_social_icons` | Circular icon buttons attract magnetically to the cursor using delta-from-center physics. | ✅ |
| 11 | `cursor_blob_morph` | Cursor squishes and rotates in the direction of movement based on mouse velocity. | ✅ |
| 12 | `repulsion_button` | Inverse of magnetic attraction — buttons move AWAY from cursor using negative delta multiplier. | ✅ |
| 13 | `cursor_ripple_click` | On each click, 3 concentric ripple divs are spawned at the cursor position and animated outward. | ✅ |
| 14 | `magnetic_card_tilt` | Full 3D card tilt with dynamic box-shadow offset based on mouse position within the card. | ✅ |
| 15 | `cursor_velocity_scale` | Cursor scale grows proportional to mouse speed. Shrinks back on idle. | ✅ |
| 16 | `sticky_cursor_label` | A tooltip-style label appears stuck to the cursor on `mouseenter` via `data-tip` attribute. | ✅ |
| 17 | `cursor_orbit_ring` | A dot orbits a ring around the cursor using GSAP rotation. | ✅ |
| 18 | `fluid_menu_links` | Full-screen nav links with dual-text slide-up reveal using CSS `translateY` and overflow clipping. | ✅ |
| 19 | `cursor_invert_lens` | A large cursor acting as a lens that inverts the colors behind it using `mix-blend-mode: difference`. | ✅ |
| 20 | `magnetic_tooltip_follow` | A large image tooltip that lags behind the main cursor, revealing project images on hover over list items. | ✅ |
| 21 | `cursor_text_marquee` | A circular cursor containing a continuous CSS/GSAP text marquee that slowly spins while following the mouse. | ✅ |
| 22 | `magnetic_border_glow` | A dynamic `radial-gradient` tracks the cursor coordinates via CSS variables, creating a glowing 1px border around buttons. | ✅ |

## 🚀 How to Use
Navigate into any sub-directory and open `index.html` in your browser. Each directory contains a `prompt.md` which you can use to generate this exact effect in any AI.
