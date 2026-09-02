gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById("scrub-canvas");
const ctx = canvas.getContext("2d");
const ui = document.getElementById("audio-ui");

const frameCount = 100;
const currentFrame = { frame: 0 };

// Web Audio API for synthesizing a continuous hum
let audioCtx, oscillator, gainNode;
let audioEnabled = false;

document.getElementById("start-btn").addEventListener("click", () => {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    oscillator = audioCtx.createOscillator();
    gainNode = audioCtx.createGain();
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(100, audioCtx.currentTime); // Low hum
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime); // Start silent
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.start();
    audioEnabled = true;
    document.getElementById("start-btn").innerText = "Audio Enabled!";
  }
});

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const prog = currentFrame.frame / frameCount;
  
  ctx.save();
  ctx.translate(canvas.width/2, canvas.height/2);
  ctx.rotate(prog * Math.PI * 8); // Spin fast
  
  ctx.beginPath();
  ctx.moveTo(0, -100);
  ctx.lineTo(50, 50);
  ctx.lineTo(-50, 50);
  ctx.closePath();
  ctx.fillStyle = `hsl(${prog * 100}, 100%, 50%)`;
  ctx.fill();
  
  ctx.restore();
}
render();

gsap.to(currentFrame, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    trigger: ".canvas-section",
    pin: true,
    scrub: 1,
    start: "top top",
    end: "+=2000",
    onUpdate: (self) => {
      render();
      // Adjust audio volume based on scrub progress (louder in the middle)
      // Math: sine wave based on progress makes it peak at 50% scroll
      const volume = Math.sin(self.progress * Math.PI); 
      ui.innerText = `Volume: ${Math.round(volume * 100)}%`;
      
      if (audioEnabled && gainNode) {
        // Smoothly ramp to new volume
        gainNode.gain.setTargetAtTime(volume * 0.5, audioCtx.currentTime, 0.1);
        // Change pitch slightly based on progress
        oscillator.frequency.setTargetAtTime(100 + (self.progress * 200), audioCtx.currentTime, 0.1);
      }
    }
  }
});
