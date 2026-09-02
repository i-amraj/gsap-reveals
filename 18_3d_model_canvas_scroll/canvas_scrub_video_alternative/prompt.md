# Video Scrub Alternative
Instead of a canvas image sequence, this scrubs an HTML5 `<video>` element by animating its `currentTime` property via GSAP. Note: This is computationally heavier than canvas rendering and relies heavily on the video being encoded with many I-frames (keyframes) for smooth scrubbing.
