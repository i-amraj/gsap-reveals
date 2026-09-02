const slides = gsap.utils.toArray(".slide");
let currentIndex = 0;
let isAnimating = false;

// Init first slide
gsap.to(slides[0].querySelector(".slide-bg"), { scale: 1, duration: 2, ease: "power2.out" });
gsap.to(slides[0].querySelector("h1"), { y: "0%", duration: 1, ease: "power4.out", delay: 0.5 });

function goToSlide(index, direction) {
  if (isAnimating || index === currentIndex) return;
  isAnimating = true;
  
  const currentSlide = slides[currentIndex];
  const nextSlide = slides[index];
  
  const tl = gsap.timeline({ onComplete: () => {
    isAnimating = false;
    currentIndex = index;
    document.querySelector(".pagination").innerText = `${currentIndex + 1} / ${slides.length}`;
  }});
  
  // Set initial states for incoming slide
  gsap.set(nextSlide, { zIndex: 2 }); // Next slide on top
  gsap.set(currentSlide, { zIndex: 1 }); // Current slide below
  
  // Wipe direction (up/down)
  const clipStart = direction === "next" ? "inset(100% 0% 0% 0%)" : "inset(0% 0% 100% 0%)";
  const bgScale = 1.2;
  
  gsap.set(nextSlide, { clipPath: clipStart });
  gsap.set(nextSlide.querySelector(".slide-bg"), { scale: bgScale });
  gsap.set(nextSlide.querySelector("h1"), { y: "100%" });

  // Animate Next Slide
  tl.to(nextSlide, {
    clipPath: "inset(0% 0% 0% 0%)",
    duration: 1.5,
    ease: "power4.inOut"
  })
  .to(nextSlide.querySelector(".slide-bg"), {
    scale: 1,
    duration: 2,
    ease: "power2.out"
  }, "-=1.5")
  .to(nextSlide.querySelector("h1"), {
    y: "0%",
    duration: 1,
    ease: "power4.out"
  }, "-=1")
  
  // Animate Current Slide (pushes out slightly)
  .to(currentSlide.querySelector(".slide-bg"), {
    scale: direction === "next" ? 0.9 : 1.1,
    duration: 1.5,
    ease: "power4.inOut"
  }, 0)
  .to(currentSlide.querySelector("h1"), {
    y: direction === "next" ? "-100%" : "100%",
    duration: 1,
    ease: "power4.inOut"
  }, 0)
  // Hide current slide fully after transition
  .set(currentSlide, { clipPath: "inset(0% 0% 100% 0%)" });
}

document.getElementById("next-btn").addEventListener("click", () => {
  const nextIndex = (currentIndex + 1) % slides.length;
  goToSlide(nextIndex, "next");
});

document.getElementById("prev-btn").addEventListener("click", () => {
  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  goToSlide(prevIndex, "prev");
});
