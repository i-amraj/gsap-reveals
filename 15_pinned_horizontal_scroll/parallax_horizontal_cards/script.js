gsap.registerPlugin(ScrollTrigger);

const track = document.getElementById("card-track");
const cards = gsap.utils.toArray(".card");
const images = gsap.utils.toArray(".card-img");

// Create the main horizontal scroll timeline
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#pin-wrap",
    pin: true,
    scrub: 1,
    end: () => "+=" + track.scrollWidth,
    invalidateOnRefresh: true
  }
});

// Move the track left
tl.to(track, {
  x: () => -(track.scrollWidth - window.innerWidth) + "px",
  ease: "none"
}, 0);

// For each image, move it slightly right relative to the card to create parallax
images.forEach((img) => {
  tl.to(img, {
    x: "20vw", // Matches the extra width added in CSS
    ease: "none"
  }, 0);
});
