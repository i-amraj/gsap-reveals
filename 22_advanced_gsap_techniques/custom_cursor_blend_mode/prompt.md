# Custom Cursor Blend Mode
A fixed circular `div` acts as a custom cursor, perfectly following the system pointer using `gsap.quickTo`. The magic is the `mix-blend-mode: difference` CSS property, which dynamically inverts the color of the cursor relative to what it is hovering over (white turns black, black turns white) without complex javascript collision detection.
