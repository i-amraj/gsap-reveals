// MotionPath 04: Interactive Real-Time Bezier Path Editor with GSAP
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(Draggable, MotionPathPlugin);

  const stage = document.getElementById("stage");
  const curve = document.getElementById("bezierCurve");
  const line1 = document.getElementById("handleLine1");
  const line2 = document.getElementById("handleLine2");
  const pathCode = document.getElementById("pathCode");
  const copyPathBtn = document.getElementById("copyPathBtn");
  const orb = document.getElementById("orb");

  // Initial control points
  const points = [
    { x: 80, y: 350 },  // P0 (Start)
    { x: 220, y: 80 },  // C1
    { x: 550, y: 380 }, // C2
    { x: 720, y: 100 }  // P3 (End)
  ];

  const handles = [
    document.getElementById("p0"),
    document.getElementById("p1"),
    document.getElementById("p2"),
    document.getElementById("p3")
  ];

  // Set initial handle positions
  handles.forEach((handle, i) => {
    gsap.set(handle, { x: points[i].x, y: points[i].y });
  });

  let orbTween = null;

  // Redraw bezier curve & restart orb trajectory
  function updatePath() {
    const d = `M ${points[0].x} ${points[0].y} C ${points[1].x} ${points[1].y}, ${points[2].x} ${points[2].y}, ${points[3].x} ${points[3].y}`;
    
    curve.setAttribute("d", d);
    pathCode.textContent = d;

    // Update connector dashed lines
    line1.setAttribute("x1", points[0].x);
    line1.setAttribute("y1", points[0].y);
    line1.setAttribute("x2", points[1].x);
    line1.setAttribute("y2", points[1].y);

    line2.setAttribute("x1", points[3].x);
    line2.setAttribute("y1", points[3].y);
    line2.setAttribute("x2", points[2].x);
    line2.setAttribute("y2", points[2].y);

    // Restart orb tween along updated path
    if (orbTween) orbTween.kill();

    orbTween = gsap.to(orb, {
      motionPath: {
        path: curve,
        align: curve,
        alignOrigin: [0.5, 0.5]
      },
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }

  // Initialize Draggable on each handle
  handles.forEach((handle, i) => {
    Draggable.create(handle, {
      bounds: stage,
      onDrag: function() {
        points[i].x = this.x;
        points[i].y = this.y;
        updatePath();
      }
    });
  });

  updatePath();

  // Copy path string
  copyPathBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(pathCode.textContent).then(() => {
      copyPathBtn.textContent = "✓ Copied!";
      setTimeout(() => { copyPathBtn.textContent = "Copy Path"; }, 1500);
    });
  });
});
