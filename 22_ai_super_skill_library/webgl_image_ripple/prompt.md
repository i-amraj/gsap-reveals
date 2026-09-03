# WebGL Image Ripple
Utilizes a custom GLSL shader inside Three.js applied to a 2D plane texture. When the user hovers over the canvas container, GSAP tweens a custom uniform `uHoverState` from 0 to 1. The fragment shader uses this value multiplied against sine waves based on time to displace the UV coordinates, creating a liquid ripple effect.
