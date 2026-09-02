gsap.registerPlugin(ScrollTrigger);

const counter = document.querySelector(".scramble-counter");
const finalNumber = counter.innerText;
// Character pool exclusively of numbers and commas to mimic formatting
const chars = "0123456789,";

// Immediately scramble on load so it looks busy before it enters the viewport
let initialOutput = "";
for (let i = 0; i < finalNumber.length; i++) {
  initialOutput += chars[Math.floor(Math.random() * chars.length)];
}
counter.innerText = initialOutput;

let proxy = { progress: 0 };

gsap.to(proxy, {
  progress: 1,
  duration: 2.5,
  ease: "power3.out", // Fast start, long decelerating lock-in
  scrollTrigger: {
    trigger: counter,
    start: "top 85%",
    toggleActions: "play none none none"
  },
  onUpdate: () => {
    let output = "";
    
    for (let i = 0; i < finalNumber.length; i++) {
      // Resolve left-to-right
      if (i < finalNumber.length * proxy.progress) {
        output += finalNumber[i];
      } 
      // Keep scrambling unresolved slots
      else {
        output += chars[Math.floor(Math.random() * chars.length)];
      }
    }
    
    counter.innerText = output;
  }
});
