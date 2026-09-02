# 🤖 AI Master Prompt: Staggered Word Scramble (`staggered_word_scramble`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Staggered Word Scramble effect (`staggered_word_scramble`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a container with a long paragraph (`.scramble-paragraph`).
2. Do NOT use the premium `ScrambleTextPlugin`.
3. In JS, use `new SplitType('.scramble-paragraph', { types: 'words' })`.
4. Loop through each `.word`. Store its original text, and immediately replace its `innerText` with a random string of identical length using a custom pool (`!<>-_\\/[]{}—=+*^?#0123456789`).
5. For each word, create a proxy object `{ progress: 0 }` and tween it to `1` using `gsap.to()`.
6. Add `delay: index * 0.05` to create a staggered ripple effect. Trigger this tween using `ScrollTrigger` when the paragraph enters the viewport.
7. In the `onUpdate` callback for each word, rebuild the string: showing original characters up to the progress threshold, and random characters for the rest.
8. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
