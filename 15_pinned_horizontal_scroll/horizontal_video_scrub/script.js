gsap.registerPlugin(ScrollTrigger);

const video = document.getElementById("video");
const overlayText = document.getElementById("overlay-text");

// Ensure video metadata is loaded so we have a duration
video.onloadedmetadata = function() {
  gsap.to(video, {
    currentTime: video.duration,
    ease: "none",
    scrollTrigger: {
      trigger: "#pin-wrap",
      pin: true,
      scrub: true,
      end: "+=3000",
      onUpdate: (self) => {
        overlayText.innerText = Math.round(self.progress * 100) + "%";
      }
    }
  });
};
