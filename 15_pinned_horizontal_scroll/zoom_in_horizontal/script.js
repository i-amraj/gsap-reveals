gsap.registerPlugin(ScrollTrigger);

const track = document.getElementById("track");
const cards = gsap.utils.toArray(".zoom-card");

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

// Animate each card to zoom in when it reaches the center, then zoom out
cards.forEach((card, i) => {
  const centerPos = i / (cards.length - 1 || 1); // 0 to 1 based on index
  
  // Create a sub-timeline for each card mapped to the main timeline
  const cardTl = gsap.timeline();
  cardTl.to(card, { scale: 1.2, opacity: 1, duration: 0.5, ease: "power1.inOut" })
        .to(card, { scale: 0.5, opacity: 0.3, duration: 0.5, ease: "power1.inOut" });
        
  // Inject into main timeline at the right spot.
  // The exact math here requires mapping the 0-1 progress of the card index.
  // We use the 'position' parameter in GSAP timeline
  let startOffset = (centerPos * track.scrollWidth / window.innerWidth) - 0.5;
  if (startOffset < 0) startOffset = 0;
  
  tl.add(cardTl, startOffset);
});
