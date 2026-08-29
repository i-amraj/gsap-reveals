# 🤖 AI Master Prompt: Spring Elastic Lag Trail (`spring_elastic_lag`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Spring Elastic Lag Mouse Trail (`spring_elastic_lag`) using GSAP 3 `quickTo`.

Requirements:
1. Hardcode 5 `img` elements in the HTML container, absolutely positioned.
2. On `mousemove`, iterate through these 5 images.
3. Instead of moving them all instantly, use `gsap.quickTo` for the `x` and `y` properties.
4. Apply an increasing duration and an elastic ease (e.g., `elastic.out(1, 0.4)`) based on their index. For example, Image 0 follows instantly, Image 1 follows with 0.2s duration, Image 2 with 0.4s duration, etc.
5. This creates a rubber-band/stretchy trailing effect where the images lag behind the cursor.
6. Provide complete self-contained HTML5, CSS3, and JS files.
```
