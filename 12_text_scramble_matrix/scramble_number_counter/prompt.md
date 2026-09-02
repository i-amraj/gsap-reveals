# 🤖 AI Master Prompt: Scramble Number Counter (`scramble_number_counter`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Scramble Number Counter effect (`scramble_number_counter`) using GSAP 3 and ScrollTrigger.

Requirements:
1. Setup a container with an `h1` (`.scramble-counter`). The text should be a large formatted number like `"8,492,104"`.
2. Do NOT use standard number interpolation (e.g. counting from 0 to 8,000,000). We are doing a cryptographic scramble.
3. In JS, set a character pool consisting only of numbers and commas: `"0123456789,"`.
4. Create a ScrollTrigger that fires when the element enters the viewport.
5. Tween a `{ progress: 0 }` proxy to `1` over `2.5` seconds with `ease: "power3.out"`.
6. In `onUpdate`, progressively resolve the string from left to right. Unresolved characters should randomly cycle through the number pool.
7. This creates a dramatic, high-tech lock-in effect for statistical data rather than a boring counter.
8. Provide complete HTML5, CSS3, and JS files. Ensure GSAP and ScrollTrigger CDNs are included.
```
