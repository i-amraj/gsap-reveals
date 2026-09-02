# Style 3.4: Text Scramble Matrix & Decoding

Welcome to the **Text Scramble Matrix** library. This module focuses on cryptographic, cybernetic, and high-tech typography animations where characters rapidly cycle through random symbols before decoding into legible text.

Because the official GSAP `ScrambleTextPlugin` is a paid Club GreenSock utility, **all variations in this library are built entirely from scratch using free GSAP core logic**. By tweening a proxy object's progress and updating the text inside an `onUpdate` callback, we achieve identical, highly-performant scramble effects without requiring premium plugins.

## 📦 Sub-Demos (Currently 22)

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
| 09 | `scramble_text_mask_image` | The scrambling text acts as a CSS `-webkit-background-clip` mask, creating a wildly dynamic reveal of an underlying image during the glitch. | ✅ |
| 10 | `japanese_kanji_scramble` | Uses a specific pool of half-width Katakana characters to simulate a "Ghost in the Shell" aesthetic that decrypts into English on scroll. | ✅ |
| 11 | `scramble_typewriter` | Text is typed out onto a terminal screen, but the last 3 characters are always scrambling, simulating real-time payload decryption. | ✅ |
| 12 | `marquee_scramble_ticker` | An infinite looping GSAP marquee that continuously morphs into different phrases via scrambling every 4 seconds without breaking its flow. | ✅ |
| 13 | `vertical_text_scramble` | Scrambles text configured with `writing-mode: vertical-rl` to mimic authentic, top-to-bottom falling matrix rain columns. | ✅ |
| 14 | `scramble_random_word_glitch` | Periodically picks a random word inside a large static paragraph and glitches it out for a fraction of a second, creating a highly unstable aesthetic. | ✅ |
| 15 | `scramble_hover_encrypt` | Inverts standard logic: The text is normally readable, but when hovered, it rapidly *encrypts* into symbols to hide sensitive data. | ✅ |
| 16 | `scramble_loading_percentages` | A highly dynamic loader where the percentage counter (`004%`) violently scrambles its digits while counting up, locking in smoothly at `100%`. | ✅ |
| 17 | `scramble_center_out` | A radial decryption where the text locks in from the exact center and spreads mathematically outwards to the edges. | ✅ |
| 18 | `scramble_edges_in` | A converging decryption where the outer edges of the text lock in first and meet in the exact center of the string. | ✅ |
| 19 | `scramble_blur_glitch` | Combines text scrambling with a dynamic CSS `filter: blur()` mapped to a sine wave, creating an optical camera refocus effect. | ✅ |
| 20 | `scramble_multi_line_stagger` | Uses `SplitType` by lines. A massive paragraph of encrypted text decrypts in a sequential, cascading waterfall down the page as you scroll. | ✅ |
| 21 | `scramble_binary_clock` | A live digital clock (`HH:MM:SS`) where every passing second rapidly decrypts into existence from a pool of 1s and 0s. | ✅ |
| 22 | `scramble_image_caption_reveal` | Hovering over an image card triggers a hidden caption to physically slide up and aggressively decrypt into readable text. | ✅ |

## 🚀 How to Use
Navigate into any sub-directory and open `index.html` in your browser. Each directory contains a `prompt.md` which you can use to generate this exact effect in any AI.
