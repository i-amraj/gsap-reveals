# Lottie Alternative
Instead of an image sequence on a canvas, this uses Airbnb's `lottie-web` player. GSAP's ScrollTrigger animates a proxy `frame` variable, which calls `anim.goToAndStop(frame, true)` on the Lottie instance, creating a perfectly smooth, resolution-independent vector scrub.
