gsap.registerPlugin(ScrollTrigger);

const text = new SplitType('.split-text', { types: 'lines' });

gsap.to(text.lines, {
  letterSpacing: "0px",
  opacity: 1,
  stagger: 0.1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    end: "bottom 30%",
    scrub: true
  }
});
