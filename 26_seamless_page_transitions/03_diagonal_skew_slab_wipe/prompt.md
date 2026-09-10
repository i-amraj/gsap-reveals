# 🤖 AI Prompt: Diagonal Skew Slab Curtain Wipe (GSAP Timeline)

Copy and paste this prompt into your AI assistant to replicate or adapt this effect in your project:

```markdown
Create an Awwwards-agency style diagonal skew slab curtain wipe transition between views using Vanilla HTML, CSS, and GSAP Timelines.

### Requirements:
1. **Slab Overlay Styling**:
   - An overlay containing 3 stacked full-screen slabs with an angled CSS skew (`transform: skewX(-14deg)`).
   - Rich dark palette layers (`#1e1b4b`, `#0f172a`, `#080a10`) spanning past viewport boundaries (`width: 140%, height: 140%`).

2. **GSAP Timeline Choreography (The Core Formula)**:
   - Construct a synchronized transition timeline:
     ```javascript
     const tl = gsap.timeline();

     // 1. Slabs sweep across screen with stagger
     tl.fromTo(slabs, 
       { xPercent: -100 },
       { xPercent: 0, duration: 0.6, stagger: 0.08, ease: "power3.inOut" }
     );

     // 2. Swap DOM views at the peak coverage point
     tl.add(() => {
       activeView.classList.add("is-hidden");
       nextView.classList.remove("is-hidden");
     });

     // 3. Slabs exit smoothly to the right
     tl.to(slabs, {
       xPercent: 100, duration: 0.6, stagger: 0.08, ease: "power3.inOut"
     });

     // 4. Stagger entrance of new view elements
     tl.to(nextView.children, {
       y: 0, opacity: 1, duration: 0.45, stagger: 0.08, ease: "power2.out"
     }, "-=0.3");
     ```
   - Add animation lock state (`isAnimating = true/false`) to prevent spamming.
```
