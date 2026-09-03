gsap.registerPlugin(ScrollTrigger);

// Pin the box container
ScrollTrigger.create({
  trigger: "#pin-box",
  start: "center center",
  endTrigger: ".b3",
  end: "center center",
  pin: true,
  pinSpacing: false
});

// Animate the box across the blocks
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".b1",
    start: "center center",
    endTrigger: ".b3",
    end: "center center",
    scrub: 1
  }
});

tl.to(".box", { rotation: 180, borderRadius: "50%", backgroundColor: "#9d4edd", duration: 1 })
  .to(".box", { rotation: 360, borderRadius: "20px", backgroundColor: "#88ce02", duration: 1 });

// Highlight active text block dots
gsap.utils.toArray(".text-block").forEach(block => {
  ScrollTrigger.create({
    trigger: block,
    start: "center center+=100",
    end: "center center-=100",
    toggleClass: "active"
  });
});
