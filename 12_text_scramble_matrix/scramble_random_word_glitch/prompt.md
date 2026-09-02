# 🤖 AI Master Prompt: Scramble Random Word Glitch (`scramble_random_word_glitch`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Scramble Random Word Glitch effect (`scramble_random_word_glitch`) using GSAP 3 and SplitType.

Requirements:
1. Setup a container with a paragraph (`.glitch-paragraph`).
2. In JS, use `SplitType` to split the paragraph into `.word` elements.
3. Use `setInterval` to fire every 1000ms.
4. Inside the interval, pick a random `.word` element from the array of split words.
5. Store its original text. Run a quick GSAP proxy scramble tween (`duration: 0.5`) that scrambles the word completely and instantly decodes back to the original text.
6. This creates a mesmerizing "failing terminal" aesthetic where random words within a massive block of static text glitch out periodically.
7. Provide complete HTML5, CSS3, and JS files. Ensure GSAP and SplitType CDNs are included.
```
