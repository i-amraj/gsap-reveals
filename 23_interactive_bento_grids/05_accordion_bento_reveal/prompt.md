# 🤖 AI Prompt: Dynamic Bento Squeeze Accordion Reveal

Copy and paste this prompt into your AI assistant to replicate or adapt this effect in your project:

```markdown
Create an interactive accordion bento strip interaction where panels dynamically squeeze and expand using Flexbox and GSAP.

### Requirements:
1. **Layout & Structure**:
   - A horizontal flex strip container holding 4 panels.
   - Each panel has two zones:
     * A collapsed vertical rail showing index ("01") and vertical rotated text (`writing-mode: vertical-rl`).
     * An expanded content area with headlines, summary paragraphs, and pill tags.
   - Default state has one panel active (`flex-grow: 3.5`) while the other 3 panels are compressed (`flex-grow: 1`).

2. **GSAP Flex Expansion Mechanics (The Core Formula)**:
   - On `mouseenter` of any inactive panel:
     1. Animate all sibling panels back to `flexGrow: 1` using `gsap.to(p, { flexGrow: 1, duration: 0.55, ease: "power3.out" })`.
     2. Animate target panel to `flexGrow: 3.5` with a smooth deceleration curve.
     3. Animate internal content elements (badge, headline, paragraph, tags) with a staggered entrance:
        `gsap.fromTo(elements, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, stagger: 0.08, delay: 0.15 })`.

3. **Responsive Degradation**:
   - On screens `<= 768px`, swap flex direction to `column` so panels squeeze/expand vertically with horizontal collapsed bars.
```
