# Staggered Text Reveal
A fundamental GSAP typography technique heavily used across their site. It relies on wrapping lines of text in a `.text-mask` with `overflow: hidden`. The actual text begins translated `y: 100%` (hidden below the mask). On scroll, `stagger` and `ease: "power4.out"` animate the text up cleanly, resulting in a premium, hardware-accelerated reveal.
