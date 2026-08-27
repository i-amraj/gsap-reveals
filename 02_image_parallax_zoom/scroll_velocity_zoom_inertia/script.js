gsap.registerPlugin(ScrollTrigger);

const cards = document.querySelectorAll(".velocity-card");

cards.forEach((card) => {
  const skewSetter = gsap.quickTo(card, "skewY", { duration: 0.5, ease: "power3.out" });
  const scaleSetter = gsap.quickTo(card, "scaleY", { duration: 0.5, ease: "power3.out" });

  ScrollTrigger.create({
    trigger: card,
    start: "top bottom",
    end: "bottom top",
    onUpdate: (self) => {
      const velocity = self.getVelocity();
      const clampedVelocity = gsap.utils.clamp(-8000, 8000, velocity);
      
      const skewAngle = (clampedVelocity / 8000) * 8; // Max 8 deg
      const scaleValue = 1 + Math.abs(clampedVelocity / 8000) * 0.15; // Max 1.15 scale

      skewSetter(skewAngle);
      scaleSetter(scaleValue);
    }
  });
});
