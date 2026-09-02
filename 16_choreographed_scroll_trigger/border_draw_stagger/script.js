gsap.registerPlugin(ScrollTrigger);

const boxes = gsap.utils.toArray(".box-wrap");

boxes.forEach((box, i) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: box,
      start: "top 75%",
      toggleActions: "play none none reverse"
    },
    // Adding a delay based on index to simulate stagger across separate ScrollTriggers
    delay: i * 0.2 
  });

  // Animate width first, then height for top/right pseudo element
  tl.to(CSSRulePlugin.getRule(".box-wrap::before"), { width: "100%", duration: 0.25, ease: "none" })
    .to(CSSRulePlugin.getRule(".box-wrap::before"), { height: "100%", duration: 0.25, ease: "none" })
    // Then animate width, then height for bottom/left pseudo element
    .to(CSSRulePlugin.getRule(".box-wrap::after"), { width: "100%", duration: 0.25, ease: "none" })
    .to(CSSRulePlugin.getRule(".box-wrap::after"), { height: "100%", duration: 0.25, ease: "none" })
    // Fade in text
    .to(box.querySelector(".border-box"), { opacity: 1, duration: 0.5 });
});

// Note: CSSRulePlugin is deprecated in modern GSAP, but often used for pseudo-elements. 
// A better modern approach is animating CSS variables. Let's rewrite using CSS variables in the CSS.
