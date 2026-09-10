# 🤖 AI Prompt: Grid Card to Fullscreen Hero Transition (GSAP Flip)

Copy and paste this prompt into your AI assistant to replicate or adapt this effect in your project:

```markdown
Create an award-winning shared-element page transition where a grid card's thumbnail seamlessly morphs into the full-width hero header of a dedicated case study view using GSAP and the GSAP Flip Plugin.

### Requirements:
1. **Layouts**:
   - Portfolio Grid view with 3 project cards displaying thumbnail visuals (`.card-media`), client tags, and titles.
   - Case Study overlay view (`position: fixed, inset: 0`) with a designated hero media slot (`#heroSlot`) and narrative copy.

2. **GSAP Flip Shared-Element Morph Mechanics (The Core Formula)**:
   - On clicking any grid card:
     1. Capture geometry of the thumbnail: `const state = Flip.getState(activeMedia)`.
     2. Reveal case study overlay and reparent DOM node: `heroSlot.appendChild(activeMedia)`.
     3. Animate layout transition: `Flip.from(state, { duration: 0.65, ease: "power3.inOut" })`.
     4. Stagger entrance of the narrative text (`studyBody.children`) upon completion.
   - On clicking the "Back" button:
     1. Fade out narrative copy.
     2. Capture state of media in hero slot: `const state = Flip.getState(activeMedia)`.
     3. Reparent back to the originating card: `activeCard.prepend(activeMedia)`.
     4. Reverse layout morph: `Flip.from(state, { duration: 0.55, ease: "power3.inOut" })` and hide overlay.
```
