# SVG DrawSVG Blueprint
Simulates the Club GreenSock `DrawSVGPlugin`. Instead of the plugin, the script iterates through all SVG shapes (`path`, `rect`, `circle`, `line`), calculates their `getTotalLength()`, and dynamically assigns `strokeDasharray` and `strokeDashoffset`. On scroll, GSAP staggers the offset to `0`, creating a beautiful, glowing blueprint wireframe drawing effect.
