const card = document.querySelector(".card");
const wrapper = document.querySelector(".caption-wrapper");
const caption = document.querySelector(".scramble-caption");

const originalText = caption.innerText;
const chars = "!<>-_\\/[]{}—=+*^?#0123456789";

let proxy = { progress: 0 };
let currentTween = null;

card.addEventListener("mouseenter", () => {
  // 1. Slide the wrapper up
  gsap.to(wrapper, { y: 0, duration: 0.5, ease: "power3.out" });
  
  // 2. Scramble decrypt the caption text
  if (currentTween) currentTween.kill();
  proxy.progress = 0;
  
  currentTween = gsap.to(proxy, {
    progress: 1,
    duration: 1,
    ease: "power2.out",
    delay: 0.1, // Slight delay so the wrapper is visible first
    onUpdate: () => {
      let output = "";
      for (let i = 0; i < originalText.length; i++) {
        if (i < originalText.length * proxy.progress) {
          output += originalText[i];
        } else {
          if (originalText[i] === " ") output += " ";
          else output += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      caption.innerText = output;
    }
  });
});

card.addEventListener("mouseleave", () => {
  // 1. Slide the wrapper back down
  gsap.to(wrapper, { y: "100%", duration: 0.5, ease: "power3.in" });
});
