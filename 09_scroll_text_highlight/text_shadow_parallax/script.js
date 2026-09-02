gsap.registerPlugin(ScrollTrigger);

const text = new SplitType('.split-text', { types: 'words' });

gsap.fromTo(text.words, {
  textShadow: "0px -30px 0px rgba(0,0,0,0)" // Light is below, no shadow visible
}, {
  textShadow: "0px 40px 15px rgba(0,0,0,0.8)", // Light moves up, casting heavy shadow down
  stagger: 0.1,
  ease: "none",
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true
  }
});
