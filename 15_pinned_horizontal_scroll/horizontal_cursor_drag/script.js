gsap.registerPlugin(Draggable);

const track = document.getElementById("track");

Draggable.create(track, {
  type: "x",
  bounds: {
    minX: -(track.scrollWidth - window.innerWidth),
    maxX: 0
  },
  inertia: true, // Note: requires InertiaPlugin for smooth throwing (premium), but acts as basic drag otherwise
  edgeResistance: 0.85
});
