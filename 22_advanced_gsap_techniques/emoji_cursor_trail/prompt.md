# Emoji Cursor Trail
A performant particle system attached to the cursor. On mouse move, random emoji elements are spawned into the DOM. GSAP tweens apply random gravity (`y`), spread (`x`), rotation, and opacity fade out over 1-2 seconds. An `onComplete` callback removes the DOM node to prevent memory leaks.
