gsap.registerPlugin(ScrollTrigger);

// Helper function to link Lottie to ScrollTrigger
function LottieScrollTrigger(vars) {
  let playhead = {frame: 0},
      target = gsap.utils.toArray(vars.target)[0],
      animation = lottie.loadAnimation({
        container: target,
        renderer: vars.renderer || "svg",
        loop: false,
        autoplay: false,
        path: vars.path
      });
      
  animation.addEventListener("DOMLoaded", function() {
    gsap.to(playhead, {
      frame: animation.totalFrames - 1,
      ease: "none",
      onUpdate: () => animation.goToAndStop(playhead.frame, true),
      scrollTrigger: {
        trigger: target,
        start: "center center",
        end: "+=1000",
        scrub: 1,
        pin: true,
      }
    });
  });
  return animation;
}

LottieScrollTrigger({
  target: "#lottie-container",
  path: "https://assets4.lottiefiles.com/packages/lf20_zyquagfl.json" // Sample Lottie JSON
});
