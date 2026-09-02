gsap.registerPlugin(ScrollTrigger);

const video = document.getElementById("scrub-video");

// We must wait for the video metadata to load to know its duration
video.addEventListener("loadedmetadata", () => {
  gsap.to(video, {
    currentTime: video.duration || 10,
    ease: "none",
    scrollTrigger: {
      trigger: ".video-section",
      pin: true,
      scrub: 1, // Smoothing helps video decoding catch up
      start: "top top",
      end: "+=2000"
    }
  });
});

// Force load to get metadata
video.load();
