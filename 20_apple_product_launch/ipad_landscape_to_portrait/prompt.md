# iPad Landscape to Portrait
A pinned device mock-up that physically rotates (`rotation: -90`) as the user scrolls. Utilizing GSAP's `onUpdate` callback within the timeline, at 50% scroll progress, a CSS class is toggled that causes the abstract UI elements *inside* the screen to fluidly rearrange themselves into a responsive vertical layout via CSS transitions.
