# 🤖 AI Prompt: 3D Depth Multi-Layer Parallax Bento Card

Copy and paste this prompt into your AI assistant to replicate or adapt this effect in your project:

```markdown
Create a 3D multi-layer spatial parallax bento card component using Vanilla CSS 3D transforms and GSAP.

### Requirements:
1. **Layout & Spatial Layering**:
   - Container has CSS `perspective: 1200px` and cards have `transform-style: preserve-3d`.
   - Each card contains multiple independent layers marked with `data-depth` attributes:
     * Background grid / gradient layer (`data-depth="0.1"`)
     * Text & typography layer (`data-depth="0.4"`)
     * Floating UI badge / glass chip (`data-depth="0.8"`)
     * Secondary chip popout (`data-depth="0.95"`)

2. **GSAP Differential Parallax Mechanics (The Core Formula)**:
   - On `mousemove` inside the card:
     * Normalize mouse position `normX = (x - centerX) / centerX` (-1 to 1).
     * Tilt the card slightly with `rotateX: normY * -8`, `rotateY: normX * 8`.
     * Iterate through each layer and calculate differential translation:
       `x: normX * (depth * 45)`, `y: normY * (depth * 45)`, `z: depth * 60`.
     * Higher `data-depth` elements pop forward toward the screen in physical 3D space.

3. **Elastic Recovery**:
   - On `mouseleave`, animate both the card rotation and all layer transforms back to 0 using an elastic spring ease (`ease: "elastic.out(1, 0.6)"`).
```
