gsap.registerPlugin(ScrollTrigger);

const card = document.querySelector(".ripple-card");
const dispMap = document.querySelector("#dispMap");

let clampVelocity = gsap.utils.clamp(-80, 80);

ScrollTrigger.create({
  onUpdate: (self) => {
    let vel = clampVelocity(self.getVelocity() / 40);
    
    // Animate SVG displacement wave scale & card Y-skew on scroll speed
    gsap.to(dispMap, {
      attr: { scale: Math.abs(vel) * 0.8 },
      duration: 0.2,
      overwrite: "auto"
    });

    gsap.to(card, {
      skewY: vel * 0.05,
      duration: 0.2,
      overwrite: "auto"
    });
  }
});
