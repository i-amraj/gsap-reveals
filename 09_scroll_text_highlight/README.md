# 🌟 Style 3.1: Scroll Scrubbed Text Highlight (`09_scroll_text_highlight`)

This module focuses on Apple/Stripe-style kinetic typography where text dynamically reacts to the user's vertical scroll position. By utilizing GSAP ScrollTrigger combined with the `SplitType` library, we can easily slice text into lines, words, or characters and animate them seamlessly.

## 📦 Sub-Demos (Currently 4)

| # | Module Name | Description | Status |
|---|---|---|---|
| 01 | `word_by_word_opacity` | Text starts faded out. As you scroll, individual words transition to full opacity smoothly. | ✅ |
| 02 | `character_by_character_opacity` | Same as word-by-word, but scrubbed on a granular character-by-character level. | ✅ |
| 03 | `line_by_line_opacity` | Entire lines of text light up sequentially as they cross the center of the viewport. | ✅ |
| 04 | `word_blur_reveal` | Words start blurry and transparent, snapping into crisp focus as the scroll triggers them. | ✅ |

## 🚀 How to Use
Navigate into any sub-directory and open `index.html` in your browser. Each directory contains a `prompt.md` which you can use to generate this exact effect in any AI.

## 🧠 Core Concepts
- **`SplitType`**: A lightweight library (`new SplitType('#target')`) used to wrap characters, words, and lines in separate `<span>` elements, making them targetable by GSAP.
- **`ScrollTrigger scrub: true`**: Links the progress of a GSAP stagger animation directly to the scrollbar, allowing forward and backward scrub.
- **`stagger`**: GSAP's built-in feature to sequentially offset the animation start times of multiple elements (e.g., characters).
