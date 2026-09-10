// Transition 08: Choreographed Staggered Layout Unfold with GSAP
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".nav-tab");
  const pages = {
    home: document.getElementById("pageHome"),
    about: document.getElementById("pageAbout")
  };

  let currentPage = "home";
  let isTransitioning = false;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetPage = tab.getAttribute("data-page");
      if (targetPage === currentPage || isTransitioning) return;

      isTransitioning = true;
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const fromView = pages[currentPage];
      const toView = pages[targetPage];

      const fromItems = fromView.querySelectorAll(".anim-item");
      const toItems = toView.querySelectorAll(".anim-item");

      const tl = gsap.timeline({
        onComplete: () => {
          currentPage = targetPage;
          isTransitioning = false;
        }
      });

      // 1. Exit stagger
      tl.to(fromItems, {
        y: -20,
        opacity: 0,
        duration: 0.35,
        stagger: 0.05,
        ease: "power2.in"
      });

      // 2. DOM swap
      tl.add(() => {
        fromView.classList.add("is-hidden");
        toView.classList.remove("is-hidden");
        gsap.set(toItems, { y: 25, opacity: 0 });
      });

      // 3. Entrance stagger
      tl.to(toItems, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out"
      }, "+=0.05");
    });
  });
});
