# 🤖 AI Master Prompt: E-Commerce Cart Fly (`ecommerce_cart_fly`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create an E-Commerce Cart Fly effect (`ecommerce_cart_fly`) using GSAP 3 and the GSAP Flip plugin.

Requirements:
1. Create a grid of product cards and a fixed Cart icon in the top right corner.
2. Provide an "Add to Cart" button on each product.
3. When clicked, clone the product's image node. Position it temporarily exactly over the original using `Flip.fit`.
4. Then, use GSAP Flip to animate the clone:
   - Call `const state = Flip.getState(clone);`
   - Append the clone into the Cart icon container (`cartIcon.appendChild(clone)`).
   - Call `Flip.from(state, { duration: 0.8, ease: "power3.in", absolute: true, onComplete: () => clone.remove() });`
5. The image should perfectly fly from the grid, shrink down, and land exactly inside the cart icon, disappearing when it arrives.
6. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP Flip CDN is included.
```
