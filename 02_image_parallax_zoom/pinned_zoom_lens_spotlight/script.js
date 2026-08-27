gsap.registerPlugin(ScrollTrigger);

const lens = document.querySelector(".magnifier-lens");
const zoomedImg = document.querySelector(".zoomed-img");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".lens-pin",
    start: "top top",
    end: "+=2000",
    scrub: 1,
    pin: true
  }
});

// Traverse lens across key coordinates
tl.to(lens, { left: "65%", top: "25%", ease: "none" }, 0)
  .to(zoomedImg, { left: "-150px", top: "-50px", ease: "none" }, 0)
  .to(lens, { left: "40%", top: "60%", ease: "none" }, 1)
  .to(zoomedImg, { left: "-80px", top: "-180px", ease: "none" }, 1)
  .to(lens, { left: "15%", top: "35%", ease: "none" }, 2)
  .to(zoomedImg, { left: "0px", top: "-80px", ease: "none" }, 2);
