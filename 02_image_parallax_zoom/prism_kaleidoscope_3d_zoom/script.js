gsap.registerPlugin(ScrollTrigger);

const tlFacet = document.querySelector(".facet-tl");
const trFacet = document.querySelector(".facet-tr");
const blFacet = document.querySelector(".facet-bl");
const brFacet = document.querySelector(".facet-br");

// Initial 3D folded prism state
gsap.set(tlFacet, { rotateX: 60, rotateY: -60, z: 250 });
gsap.set(trFacet, { rotateX: 60, rotateY: 60, z: 250 });
gsap.set(blFacet, { rotateX: -60, rotateY: -60, z: 250 });
gsap.set(brFacet, { rotateX: -60, rotateY: 60, z: 250 });

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".prism-pin",
    start: "top top",
    end: "+=2000",
    scrub: 1,
    pin: true
  }
});

// Unfold 4 facets into a flat 2D image
tl.to([tlFacet, trFacet, blFacet, brFacet], {
  rotateX: 0,
  rotateY: 0,
  z: 0,
  ease: "none"
});
