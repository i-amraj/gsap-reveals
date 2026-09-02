# 🤖 AI Master Prompt: Scramble Multi-Line Stagger (`scramble_multi_line_stagger`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Scramble Multi-Line Stagger effect (`scramble_multi_line_stagger`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a container with a large paragraph (`.stagger-paragraph`).
2. In JS, use `SplitType` to split the paragraph into lines (`types: 'lines'`).
3. Loop through each `.line` element. Store its original text and instantly replace it with scrambled characters to simulate an encrypted state on page load.
4. Set up an array of GSAP `{ progress: 0 }` proxy objects (one for each line).
5. Use `gsap.to()` on the array of proxies with a `stagger: 0.2` property, triggered by `ScrollTrigger`.
6. In `onUpdate`, use the specific line's proxy to decrypt that specific line left-to-right.
7. This creates a beautiful waterfall decryption effect where lines decrypt sequentially as you scroll.
8. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
