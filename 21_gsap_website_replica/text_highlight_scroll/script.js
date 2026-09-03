gsap.registerPlugin(ScrollTrigger);

const highlights = document.querySelectorAll(".highlight");

highlights.forEach(el => {
  // We animate the pseudo-element width via CSSRulePlugin or directly via GSAP 3's pseudo-element support (CSSRulePlugin deprecated).
  // Easiest robust cross-browser way without plugin is animating a real child div or background-size.
  // Here we use background-size mapped to linear-gradient, or since we have a pseudo element, we'll just animate a real span we inject for simplicity.
  
  // Actually, GSAP can't easily animate pseudo-elements directly without CSSRulePlugin, so let's modify the DOM slightly:
  const bg = document.createElement("span");
  bg.style.position = "absolute";
  bg.style.bottom = "0";
  bg.style.left = "0";
  bg.style.width = "0%";
  bg.style.height = "100%";
  bg.style.backgroundColor = "#88ce02";
  bg.style.zIndex = "-1";
  bg.style.borderRadius = "10px";
  
  el.appendChild(bg);
  el.style.color = "#fff"; // Initial text color
  
  // The animation
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "top 75%",
      end: "bottom 60%",
      scrub: 1
    }
  });
  
  tl.to(bg, { width: "100%", ease: "none" })
    .to(el, { color: "#111", duration: 0.1 }, "-=0.2"); // Text turns dark as highlight covers it
});
