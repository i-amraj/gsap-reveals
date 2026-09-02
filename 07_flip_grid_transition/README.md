# Style 2.3: GSAP Flip Plugin Lag-Free Grid Rearrange & Filtering (`07_flip_grid_transition`)

This module demonstrates how to use the GSAP Flip plugin to seamlessly animate complex DOM and layout changes. The Flip plugin works by recording the state of elements (size, position), allowing you to change the CSS/DOM however you want, and then perfectly interpolating between the two states.

## 📦 Sub-Demos (22 / 22 Completed)

| # | Module Name | Description | Status |
|---|---|---|---|
| 01 | `basic_category_filter` | Filters grid items by category, smoothly collapsing hidden items and rearranging visible ones. | ✅ |
| 02 | `list_to_grid_toggle` | Morphs a layout completely between a multi-column CSS grid and a single-column flex list. | ✅ |
| 03 | `hero_image_expansion` | Clicking a thumbnail extracts it from the grid and scales it to a full-screen fixed hero banner. | ✅ |
| 04 | `click_to_front_shuffle` | Clicking a card pushes it to the front of the DOM `prepend()`, causing the entire grid to gracefully shuffle. | ✅ |
| 05 | `add_remove_items` | Dynamically adds and deletes grid items from the DOM, animating the resulting layout shift and fading in/out targets. | ✅ |
| 06 | `masonry_grid_sort` | Sorts nodes in a pure CSS multi-column masonry layout, untangling complex columns perfectly. | ✅ |
| 07 | `accordion_expand_grid` | A Bento box item expands to `span 2` columns/rows; Flip flawlessly calculates nested sibling reflows. | ✅ |
| 08 | `flex_wrap_reorder` | Items of varying widths dynamically swap in a `flex-wrap: wrap` container, smoothly sliding across wrapped rows. | ✅ |
| 09 | `bento_box_swap` | Click two different-sized shapes (1x2, 2x1, 2x2) in a dense grid to swap their DOM order and watch the grid reflow. | ✅ |
| 10 | `sidebar_squeeze_grid` | Opening a CSS-transitioned sidebar squeezes the width of an `auto-fit` grid, causing items to smoothly drop down rows. | ✅ |
| 11 | `kanban_column_shift` | A Kanban board where clicking a task `appendChild`s it into a totally different column, flying it across containers. | ✅ |
| 12 | `category_grouping` | A mixed color grid sorts its DOM nodes to group by `data-color`, animating the items swarming into their color blocks. | ✅ |
| 13 | `nested_flip_accordion` | A standard accordion where opening a hidden body changes the parent height. Flip calculates it and pushes siblings down smoothly. | ✅ |
| 14 | `grid_to_carousel` | A layout morph from a flex-wrap Grid to a `flex-wrap: nowrap` horizontal scrolling Carousel. | ✅ |
| 15 | `random_size_shuffle` | Complete chaos. Randomly changes the CSS grid span classes AND shuffles DOM array simultaneously. | ✅ |
| 16 | `delete_row_collapse` | An `onLeave` callback shrinks a deleted list row's height to 0, gliding the items below it up smoothly. | ✅ |
| 17 | `multi_container_morph` | Clicking items moves them back and forth between two structurally different flex containers (row vs column). | ✅ |
| 18 | `auto_fit_resizer` | Changing the inline width style of an `auto-fit` container causes Flip to animate the responsive column wrapping. | ✅ |
| 19 | `flex_direction_switch` | Morphs a flex container abruptly between `flex-direction: row` and `flex-direction: column`. | ✅ |
| 20 | `choreographed_stagger_flip` | Advanced filtering that uses `stagger` and custom 3D rotation in `onEnter` / `onLeave` for a beautiful choreographed sequence. | ✅ |
| 21 | `ecommerce_cart_fly` | Clones a product image, uses `Flip.fit()` to position it, then `appendChild`s it to a Cart icon, flying the clone across the screen. | ✅ |
| 22 | `expandable_list_to_detail` | A master-detail view where a thin list row expands into a giant `80vh` card while hiding its sibling rows. | ✅ |

## 🚀 How to Use
Navigate into any sub-directory and open `index.html` in your browser. Each directory contains a `prompt.md` which you can use to generate this exact effect in any AI.
