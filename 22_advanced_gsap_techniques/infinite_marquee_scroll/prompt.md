# Infinite Marquee Scroll
An infinite ticker tape element using an endless `-50% xPercent` translation tween. It integrates ScrollTrigger's `onUpdate` to read `self.getVelocity()`. Based on scroll speed and direction, GSAP dynamically tweens the `timeScale` of the marquee timeline, forcing it to speed up or reverse direction interactively before settling back to normal speed.
