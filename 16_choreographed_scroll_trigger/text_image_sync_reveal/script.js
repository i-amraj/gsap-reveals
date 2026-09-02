gsap.registerPlugin(ScrollTrigger);

const items = gsap.utils.toArray(".sync-item");

items.forEach(item => {
  const imgWrap = item.querySelector(".img-wrap");
  const img = item.querySelector("img");
  const h2 = item.querySelector("h2");
  const p = item.querySelector("p");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top 75%", // Trigger when top of item is 75% down the viewport
      toggleActions: "play none none reverse"
    }
  });

  // Choreograph the synced reveal
  tl.to(imgWrap, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1, ease: "power3.inOut" })
    .to(img, { scale: 1, duration: 1, ease: "power3.inOut" }, "<")
    .to(h2, { opacity: 1, x: 0, duration: 0.8, ease: "back.out(1.5)" }, "-=0.6")
    .to(p, { opacity: 1, x: 0, duration: 0.8, ease: "back.out(1.5)" }, "-=0.6");
});
