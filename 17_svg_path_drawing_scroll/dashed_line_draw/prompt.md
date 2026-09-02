# Dashed Line Draw
Animating `stroke-dashoffset` on a dashed line natively messes up the dashes. The clever CSS/SVG trick here is to use a solid white line as a `<mask id="...">`, animate that mask's `stroke-dashoffset`, and let it reveal a static dashed line underneath.
