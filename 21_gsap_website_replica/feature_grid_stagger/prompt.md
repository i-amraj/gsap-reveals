# Feature Grid Stagger
Mimics the GSAP homepage feature cards. Uses CSS 3D transforms (`rotateY`) in the initial state. When scrolled into view, ScrollTrigger uses `toggleActions: "play none none reverse"` to play a `stagger` animation with `ease: "back.out(1.5)"`, causing the cards to flip forward and bounce into place sequentially.
