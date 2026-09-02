const textEl = document.querySelector(".loader-percentage");
const barEl = document.querySelector(".progress-bar");
const btn = document.querySelector(".replay-btn");

let currentTween = null;

function runSimulation() {
  if (currentTween) currentTween.kill();
  
  // Reset UI
  textEl.style.color = "#38bdf8";
  textEl.style.textShadow = "0 0 20px rgba(56, 189, 248, 0.4)";
  
  let proxy = { val: 0 };
  
  currentTween = gsap.to(proxy, {
    val: 100,
    duration: 5,
    ease: "power3.inOut",
    onUpdate: () => {
      // 1. Calculate actual integer value and format to 3 digits (e.g. 045)
      let intVal = Math.floor(proxy.val);
      let strVal = intVal.toString().padStart(3, "0");
      
      // 2. Introduce random glitching chaos during the load
      // 30% of frames will completely scramble the numbers if we aren't done yet
      if (intVal < 100 && Math.random() < 0.3) {
        strVal = "";
        for (let i = 0; i < 3; i++) {
          strVal += Math.floor(Math.random() * 10).toString(); // Random 0-9
        }
      }
      
      // Update DOM
      textEl.innerText = strVal + "%";
      barEl.style.width = proxy.val + "%";
    },
    onComplete: () => {
      // 3. Lock securely at 100% and flash green
      textEl.innerText = "100%";
      textEl.style.color = "#10b981";
      textEl.style.textShadow = "0 0 30px rgba(16, 185, 129, 0.8)";
      
      // We can also trigger GSAP to transition out the loader here!
    }
  });
}

// Run on load
runSimulation();

// Run on click
btn.addEventListener("click", runSimulation);
