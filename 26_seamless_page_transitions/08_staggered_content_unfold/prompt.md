# 🤖 AI Prompt: Choreographed Staggered Layout Unfold (GSAP)

Copy and paste this prompt into your AI assistant to replicate or adapt this effect in your project:

```markdown
Create an organic multi-component page transition without curtain overlays where components exit and enter in choreographed staggered waves using GSAP Timelines.

### Requirements:
1. **Layout Structure**:
   - Shared top navigation bar with persistent branding and active tab pills.
   - Page container holding multiple views (`#pageHome`, `#pageAbout`), each containing elements marked with class `.anim-item` (badge, title, description, stats card trio).

2. **GSAP Staggered Exit and Entrance Mechanics (The Core Formula)**:
   - On switching pages/tabs:
     ```javascript
     const tl = gsap.timeline();

     // 1. Current view elements exit upwards with stagger
     tl.to(fromItems, {
       y: -20, opacity: 0, duration: 0.35, stagger: 0.05, ease: "power2.in"
     });

     // 2. Switch DOM views
     tl.add(() => {
       fromView.classList.add("is-hidden");
       toView.classList.remove("is-hidden");
       gsap.set(toItems, { y: 25, opacity: 0 });
     });

     // 3. New view elements cascade into view smoothly
     tl.to(toItems, {
       y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power3.out"
     }, "+=0.05");
     ```
   - Clean, lightweight, and ideal for SPA-like multi-section websites.
```
