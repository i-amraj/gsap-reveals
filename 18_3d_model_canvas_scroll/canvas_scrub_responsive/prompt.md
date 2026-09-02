# Canvas Scrub Responsive
Implements a robust `window.addEventListener('resize', ...)` hook that recalculates canvas dimensions, respects `window.devicePixelRatio` for retina displays, and triggers a synchronous re-render to ensure the scrubbing animation never breaks or pixelates on device rotation or window resize.
