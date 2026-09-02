const wrapper = document.querySelector(".hover-image-wrapper");
const img = document.getElementById("reveal-img");
const items = document.querySelectorAll(".menu-item");

// Follow cursor
const xTo = gsap.quickTo(wrapper, "x", { duration: 0.6, ease: "power3" });
const yTo = gsap.quickTo(wrapper, "y", { duration: 0.6, ease: "power3" });

window.addEventListener("mousemove", (e) => {
  xTo(e.clientX);
  yTo(e.clientY);
});

// Reveal logic
let activeImgUrl = "";

items.forEach(item => {
  item.addEventListener("mouseenter", () => {
    const url = item.getAttribute("data-img");
    
    // Only swap background if it's different to prevent flicker
    if (activeImgUrl !== url) {
      img.style.backgroundImage = `url(${url})`;
      activeImgUrl = url;
    }
    
    gsap.to(wrapper, { opacity: 1, duration: 0.4, ease: "power2.out" });
    gsap.to(img, { scale: 1, duration: 0.6, ease: "power3.out" }); // Parallax scale inside
  });
  
  item.addEventListener("mouseleave", () => {
    gsap.to(wrapper, { opacity: 0, duration: 0.4, ease: "power2.in" });
    gsap.to(img, { scale: 1.2, duration: 0.4, ease: "power2.in" });
  });
});
