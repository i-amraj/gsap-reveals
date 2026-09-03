gsap.registerPlugin(ScrollTrigger);

// Custom object to hold the percentage value so we can animate it
let batteryObj = { val: 0 };

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".battery-hero",
    start: "top top",
    end: "+=1500",
    pin: true,
    scrub: 1
  }
});

tl.to(".battery-fill", {
  width: "100%", // Fill the battery visual
  duration: 2,
  ease: "power2.inOut"
})
.to(batteryObj, {
  val: 100, // Animate the number 0 to 100
  duration: 2,
  ease: "power2.inOut",
  onUpdate: function() {
    // Round and update DOM
    document.getElementById("percent").innerText = Math.round(batteryObj.val) + "%";
  }
}, "<"); // Run at same time as width
