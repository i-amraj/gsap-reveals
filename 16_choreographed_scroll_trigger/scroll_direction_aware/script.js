gsap.registerPlugin(ScrollTrigger);

const nav = document.getElementById("nav");

// 1. Direction-aware Navigation Bar
ScrollTrigger.create({
  start: "top -50",
  end: 99999,
  onUpdate: (self) => {
    // direction 1 is scrolling down, -1 is scrolling up
    if (self.direction === 1) {
      gsap.to(nav, { yPercent: -100, duration: 0.3, ease: "power2.out" }); // Hide nav
    } else {
      gsap.to(nav, { yPercent: 0, duration: 0.3, ease: "power2.out" });    // Show nav
    }
  }
});

// 2. Direction-aware Card Reveal
// Cards animate in one way when scrolling down, and a different way when scrolling up
const cards = gsap.utils.toArray(".card");
cards.forEach(card => {
  ScrollTrigger.create({
    trigger: card,
    start: "top 80%",
    onEnter: () => { // Scrolling down
      gsap.to(card, { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "back.out(1.5)" });
    },
    onEnterBack: () => { // Scrolling up from below
      gsap.fromTo(card, 
        { opacity: 0, y: -50, scale: 0.9 }, // Start slightly above
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.5)" }
      );
    },
    onLeave: () => gsap.to(card, { opacity: 0, y: -50, scale: 0.9, duration: 0.4 }),
    onLeaveBack: () => gsap.to(card, { opacity: 0, y: 50, scale: 0.9, duration: 0.4 })
  });
});
