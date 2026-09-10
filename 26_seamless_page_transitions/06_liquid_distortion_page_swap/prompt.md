# 🤖 AI Prompt: Liquid Displacement Ripple Page Swap (GSAP + SVG Filters)

Copy and paste this prompt into your AI assistant to replicate or adapt this effect in your project:

```markdown
Create an Awwwards-winning liquid ripple distortion page swap using dynamic SVG `<feDisplacementMap>` and GSAP.

### Requirements:
1. **SVG Filter Definition**:
   - An SVG filter with `<feTurbulence id="turbulence">` and `<feDisplacementMap id="displaceMap">`.
   - Apply the filter dynamically to the page container during transition: `filter: url(#liquidDisplace)`.

2. **GSAP Fluid Distortion Modulation (The Core Formula)**:
   - On transition trigger:
     1. Ramp up the displacement scale from 0 to 75 and increase baseFrequency:
        ```javascript
        tl.to(filterObj, {
          scale: 75,
          freq: 0.04,
          duration: 0.5,
          ease: "power2.in",
          onUpdate: () => {
            displaceMap.setAttribute("scale", filterObj.scale);
            turbulence.setAttribute("baseFrequency", filterObj.freq);
          }
        });
        ```
     2. Crossfade views at peak distortion (`opacity: 0 -> opacity: 1`).
     3. Relax the displacement scale back to 0 with deceleration (`ease: "power3.out"`) so the new page snaps back into crystal-clear focus.
     4. Remove filter class upon completion to free up GPU resources.
```
