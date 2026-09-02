const targets = document.querySelectorAll(".vertical-scramble");
const chars = "!<>-_\\/[]{}—=+*^?#0123456789";

targets.forEach((target) => {
  const originalText = target.innerText;
  
  // Clean string by removing whitespace caused by HTML formatting
  const cleanOriginal = originalText.replace(/\s+/g, '');
  
  target.addEventListener("mouseenter", () => {
    let proxy = { progress: 0 };
    gsap.killTweensOf(target);
    
    gsap.to(proxy, {
      progress: 1,
      duration: 1,
      ease: "power2.out",
      onUpdate: () => {
        let output = "";
        for (let i = 0; i < cleanOriginal.length; i++) {
          if (i < cleanOriginal.length * proxy.progress) {
            output += cleanOriginal[i];
          } else {
            output += chars[Math.floor(Math.random() * chars.length)];
          }
        }
        target.innerText = output;
      }
    });
  });
});
