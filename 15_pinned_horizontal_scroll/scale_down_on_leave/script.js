gsap.registerPlugin(ScrollTrigger);

const track = document.getElementById("track");
const cards = gsap.utils.toArray(".card");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#pin-wrap",
    pin: true,
    scrub: 1,
    end: () => "+=" + track.scrollWidth,
    invalidateOnRefresh: true
  }
});

tl.to(track, {
  x: () => -(track.scrollWidth - window.innerWidth) + "px",
  ease: "none"
}, 0);

// As the track moves, cards scale down when they pass the center
cards.forEach((card, i) => {
  // We calculate the point in the scroll where this card hits the center
  const progressStart = i / cards.length;
  const progressEnd = (i + 1) / cards.length;
  
  tl.to(card, {
    scale: 0.6,
    opacity: 0.5,
    ease: "power2.in"
  }, (progressStart + 0.1) * track.scrollWidth / window.innerWidth); 
  // It scales down slightly after its starting time
});
