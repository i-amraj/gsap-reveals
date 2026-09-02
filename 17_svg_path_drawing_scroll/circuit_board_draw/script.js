gsap.registerPlugin(ScrollTrigger);

const traces = gsap.utils.toArray(".trace");

traces.forEach(trace => {
  const length = trace.getTotalLength();
  gsap.set(trace, { strokeDasharray: length, strokeDashoffset: length });
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".circuit-section",
    start: "top 60%",
    toggleActions: "play none none reverse"
  }
});

tl.to(traces, { strokeDashoffset: 0, duration: 2, ease: "power1.inOut", stagger: 0.2 })
  .to(".node", { opacity: 1, duration: 0.3, stagger: 0.1, scale: 1.5, yoyo: true, repeat: 1 }, "-=0.5");
