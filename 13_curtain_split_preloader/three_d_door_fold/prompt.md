# 🤖 AI Master Prompt: 3D Door Fold (`three_d_door_fold`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a 3D Door Fold preloader (`three_d_door_fold`) using GSAP 3.

Requirements:
1. Setup a `.preloader-wrapper` (fixed, full screen) with CSS `perspective: 1500px;`.
2. Inside, create two doors: `.door-left` and `.door-right`, each taking `50vw` width and `100vh` height. Give them a solid background.
3. Critically, set `transform-origin: left center` on the left door, and `transform-origin: right center` on the right door.
4. Place a `.counter-container` with text dead center on top.
5. In JS, run a GSAP counter to 100%, then fade it out.
6. Animate `.door-left` to `rotateY: 90` and `.door-right` to `rotateY: -90` over 1.5 seconds with `ease: "power3.inOut"`.
7. This causes the preloader to swing open in true 3D space like massive saloon doors, revealing the hero section underneath.
8. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
