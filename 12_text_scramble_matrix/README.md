# Style 3.4: Text Scramble Matrix & Decoding

Welcome to the **Text Scramble Matrix** library. This module focuses on cryptographic, cybernetic, and high-tech typography animations where characters rapidly cycle through random symbols before decoding into legible text.

Because the official GSAP `ScrambleTextPlugin` is a paid Club GreenSock utility, **all variations in this library are built entirely from scratch using free GSAP core logic**. By tweening a proxy object's progress and updating the text inside an `onUpdate` callback, we achieve identical, highly-performant scramble effects without requiring premium plugins.

## 📦 Sub-Demos (Currently 8)

| # | Module Name | Description | Status |
|---|---|---|---|
| 01 | `basic_hover_scramble` | Text scrambles into random cryptographic symbols and resolves back to the original string when hovered. | ✅ |
| 02 | `matrix_decode_reveal` | The scramble decoding progress is directly tied to the user's scroll position via `ScrollTrigger`. | ✅ |
| 03 | `binary_data_stream` | A string continuously flips through infinite 0s and 1s until the user interacts with it. | ✅ |
| 04 | `staggered_word_scramble` | Breaking a sentence into individual words, and triggering the decode effect in a staggered timeline. | ✅ |
| 05 | `glitch_text_scramble` | Combines heavy ASCII block characters with a CSS chromatic aberration effect (`text-shadow`) to create a corrupted cyberpunk glitch. | ✅ |
| 06 | `scramble_password_reveal` | Simulates a password input box, scrambling from hidden bullets (`••••••`) into the final password when toggled. | ✅ |
| 07 | `hero_title_morph` | A stunning, recursive morphing transition that cleanly sweeps and scrambles between multiple hero phrases of varying lengths. | ✅ |
| 08 | `scramble_number_counter` | A statistical counter that locks into its final formatted number (e.g., `8,492,104`) using cryptographic scrambling instead of standard interpolation. | ✅ |

## 🚀 How to Use
Navigate into any sub-directory and open `index.html` in your browser. Each directory contains a `prompt.md` which you can use to generate this exact effect in any AI.
