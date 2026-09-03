gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".ipad-hero",
    start: "top top",
    end: "+=1500",
    pin: true,
    scrub: 1
  }
});

// Rotate the device
tl.to(".ipad-device", {
  rotation: -90, // rotate to portrait
  scale: 0.8, // scale down slightly to fit vertical
  duration: 1,
  ease: "power2.inOut",
  onUpdate: function() {
    // halfway through, toggle the internal UI classes
    if (this.progress() > 0.5) {
      document.querySelector(".ipad-device").classList.add("portrait-mode");
      document.getElementById("orientation-text").innerText = "Portrait.";
    } else {
      document.querySelector(".ipad-device").classList.remove("portrait-mode");
      document.getElementById("orientation-text").innerText = "Landscape.";
    }
  }
});
