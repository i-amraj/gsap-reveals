gsap.registerPlugin(ScrollTrigger);

const text = new SplitType('.split-text', { types: 'chars' });

gsap.to(text.chars, {
  y: -40,
  color: "#38bdf8",
  ease: "sine.inOut",
  // A yoyo repeat in a stagger means each char goes up (0 to -40) then down (-40 to 0)
  // And because they are staggered, the up/down motion ripples across the text like a wave
  stagger: {
    amount: 1, 
    yoyo: true, 
    repeat: 1 
  },
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true
  }
});
