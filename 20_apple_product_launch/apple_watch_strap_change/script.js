gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".watch-hero",
    start: "top top",
    end: "+=2000",
    pin: true,
    scrub: true
  }
});

// Color 1 to Color 2 (Starlight)
tl.to([".top-strap", ".bottom-strap"], { backgroundColor: "#fef08a", duration: 1 })
  .to("#color-name", { color: "#fef08a", duration: 1 }, "<")
  .add(() => { document.getElementById("color-name").innerText = "Starlight"; }, "-=0.5")
  
// Color 2 to Color 3 (Product RED)
  .to([".top-strap", ".bottom-strap"], { backgroundColor: "#ef4444", duration: 1 })
  .to("#color-name", { color: "#ef4444", duration: 1 }, "<")
  .add(() => { document.getElementById("color-name").innerText = "(PRODUCT)RED"; }, "-=0.5");
