gsap.registerPlugin(Draggable);

// Initialize Draggable with bounds
Draggable.create(".dragger", {
  type: "x,y",
  bounds: "#drag-bounds",
  edgeResistance: 0.65, // How "bouncy" the edges feel when dragged against
  // Inertia/ThrowProps requires Club GreenSock, 
  // but standard Draggable handles smooth bounds and dragging out of the box!
  onDragStart: function() {
    gsap.to(this.target, { scale: 1.1, duration: 0.2 });
  },
  onDragEnd: function() {
    gsap.to(this.target, { scale: 1, duration: 0.2 });
  }
});

// Intro animation
gsap.from(".dragger", {
  scale: 0,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: "back.out(1.5)"
});
