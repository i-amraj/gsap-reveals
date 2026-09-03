gsap.registerPlugin(ScrollTrigger);

const video = document.getElementById("scroll-video");

// Wait for video metadata to load so we know the total duration
video.onloadedmetadata = function() {
  
  // We use a proxy object to handle the tweening of time
  // because direct DOM property tweening of currentTime can sometimes be jerky depending on video encoding
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".video-section",
      start: "top top",
      end: "+=2000", // Scroll distance
      scrub: true,
      pin: true
    }
  });

  tl.fromTo(video, {
    currentTime: 0
  }, {
    currentTime: video.duration || 1, // Fallback if duration isn't parsed
    ease: "none"
  });
};
