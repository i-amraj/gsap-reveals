# 3D Tilt Hero
Uses CSS `perspective` and `transform-style: preserve-3d`. The internal elements (background, title, subtitle) are pushed forward/backward along the Z-axis using `translateZ`. GSAP `quickTo()` tracks the mouse position to apply `rotationX` and `rotationY` to the parent card, creating a stunning 3D holographic depth effect.
