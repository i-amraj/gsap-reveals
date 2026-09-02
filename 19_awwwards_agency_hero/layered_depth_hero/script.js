const hero = document.getElementById("hero");
const l1 = document.querySelector(".layer-1");
const l2 = document.querySelector(".layer-2");
const lText = document.querySelector(".layer-text h1");

const mX1 = gsap.quickTo(l1, "x", { duration: 1, ease: "power2" });
const mY1 = gsap.quickTo(l1, "y", { duration: 1, ease: "power2" });

const mX2 = gsap.quickTo(l2, "x", { duration: 0.8, ease: "power2" });
const mY2 = gsap.quickTo(l2, "y", { duration: 0.8, ease: "power2" });

const mXText = gsap.quickTo(lText, "x", { duration: 0.4, ease: "power2" });
const mYText = gsap.quickTo(lText, "y", { duration: 0.4, ease: "power2" });

hero.addEventListener("mousemove", (e) => {
  const normX = (e.clientX / window.innerWidth) - 0.5;
  const normY = (e.clientY / window.innerHeight) - 0.5;
  
  // Back layer moves opposite slowly
  mX1(normX * -30);
  mY1(normY * -30);
  
  // Mid layer moves opposite faster
  mX2(normX * -60);
  mY2(normY * -60);
  
  // Text moves with mouse
  mXText(normX * 40);
  mYText(normY * 40);
});
