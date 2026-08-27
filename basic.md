# ⚙️ GSAP Setup & Core Mechanics Fundamentals (basic.md)

---

### 1. 🔌 Setup: HTML me GSAP kaise Connect karein?

Vanilla HTML/CSS/JS web pages me GSAP ko connect karne ke liye aapko `</body>` tag ke thik pehle **CDNs (Script Tags)** include karne hote hain:

```html
<!-- 1. GSAP Core (Main Animation Engine) -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>

<!-- 2. ScrollTrigger Plugin (Scroll Animations ke liye) -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>

<!-- 3. Aapka Main JS File -->
<script src="script.js"></script>
```

> 💡 **NPM/React Workflow Note:** Agar aap React/Next.js me work karte hain, toh `npm install gsap` chala kar `import { gsap } from "gsap"; import { ScrollTrigger } from "gsap/ScrollTrigger";` kiya jata hai.

---

### 2. ⚡ Plugin Register Rule

Jab bhi hum ScrollTrigger plugin use karenge, apni `script.js` ke top par ye 1 line zaroor likhenge:
```javascript
gsap.registerPlugin(ScrollTrigger);
```

---

### 3. 🧠 GSAP ke 3 Core Formulas (Sabhi Animation ka Base)

GSAP me kisi bhi element ko animate karne ke 3 tarike hote hain:

1. **`gsap.to(target, { properties })`**
   * **Matlab:** Element apni current CSS state se **nayi state tak animate hoke jaaye**.
   * *Example:* `gsap.to(".btn", { scale: 1.2, duration: 0.5 });`

2. **`gsap.from(target, { properties })`**
   * **Matlab:** Element starting me alag state (hidden/small/offset) me ho, aur **apni normal position par aaye**. (Hero Section Reveal ke liye sabse best!).
   * *Example:* `gsap.from(".hero-title", { y: 100, opacity: 0, duration: 1 });`

3. **`gsap.fromTo(target, { fromProps }, { toProps })`**
   * **Matlab:** Jab aap starting state aur ending state **dono exact control** karna chahte ho.

---

### 4. 🎛️ Common Animation Properties Cheat Sheet

* `x: 100` ➔ Right 100px slide karna (`translateX`)
* `y: -50` ➔ Up 50px slide karna (`translateY`)
* `scale: 1.5` ➔ 50% Zoom in karna
* `opacity: 0` ➔ Completely invisible karna
* `rotation: 360` ➔ Full 360 degree 2D turn
* `rotateX: 90` / `rotateY: 90` ➔ 3D Flip Effects
* `duration: 1.5` ➔ Animation kitne seconds chalegi
* `stagger: 0.2` ➔ Agar 5 cards hain toh har card ke beech 0.2s ka gap hoga
* `ease: "power2.out"` ➔ Smooth deceleration (slow down effect)
