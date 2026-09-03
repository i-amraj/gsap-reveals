# Plugin Showcase Carousel
Constructs a pure CSS 3D cylinder/carousel of cards using `rotateY` and `translateZ`. An infinite GSAP tween spins the parent container. ScrollTrigger `onUpdate` is used to query `.getVelocity()`, actively adjusting the GSAP timeline's `timeScale` so the carousel spins rapidly when the user scrolls quickly, mirroring advanced velocity-based interaction techniques.
