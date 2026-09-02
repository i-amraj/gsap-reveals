gsap.registerPlugin(ScrollTrigger);

// Since the path is dashed natively, animating dashoffset normally would ruin dashes.
// But we want to scrub it. Let's use the mask trick again dynamically!

// Wait, actually let's just animate a solid path for the map route for simplicity, 
// or implement the mask in JS. Let's dynamically add a mask.
const svg = document.querySelector(".map-svg");
const routePath = document.getElementById("route");

// Create mask elements
const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
const mask = document.createElementNS("http://www.w3.org/2000/svg", "mask");
mask.setAttribute("id", "route-mask");
const solidPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
solidPath.setAttribute("d", routePath.getAttribute("d"));
solidPath.setAttribute("fill", "none");
solidPath.setAttribute("stroke", "white");
solidPath.setAttribute("stroke-width", "20"); // thicker to cover fully

mask.appendChild(solidPath);
defs.appendChild(mask);
svg.appendChild(defs);

routePath.setAttribute("mask", "url(#route-mask)");

const length = solidPath.getTotalLength();
gsap.set(solidPath, { strokeDasharray: length, strokeDashoffset: length });

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".map-section",
    start: "top 50%",
    end: "+=500",
    scrub: 1
  }
});

tl.to(solidPath, { strokeDashoffset: 0, ease: "none" })
  .to(".end", { opacity: 1, duration: 0.1 });
