# 🤖 AI Master Prompt: Japanese Kanji Scramble (`japanese_kanji_scramble`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Japanese Kanji Scramble effect (`japanese_kanji_scramble`) using GSAP 3 and ScrollTrigger.

Requirements:
1. Setup a page with an `h1` (`.kanji-scramble`).
2. In JS, use a character pool consisting entirely of half-width Katakana: `"ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ"`.
3. On page load, immediately replace the `h1` text with random Katakana characters of the same length to simulate a "Ghost in the Shell" aesthetic.
4. Setup a GSAP proxy tween (`{ progress: 0 }` to `1`) linked to a `ScrollTrigger` (`start: "top 80%", scrub: 1`).
5. In `onUpdate`, progressively resolve the string left-to-right into the original English string, keeping unresolved characters scrambling in Katakana.
6. Provide complete HTML5, CSS3, and JS files. Ensure GSAP and ScrollTrigger CDNs are included.
```
