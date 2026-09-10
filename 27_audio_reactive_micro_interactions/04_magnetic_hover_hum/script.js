let audioCtx = null;
let osc1 = null;
let osc2 = null;
let gainNode = null;
let isAudioRunning = false;

function initAudioDrone() {
  if (isAudioRunning) return;
  
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  
  // Dual-oscillator drone (Osc 1: Fundamental Sine, Osc 2: Detuned Sawtooth Harmonic)
  osc1 = audioCtx.createOscillator();
  osc2 = audioCtx.createOscillator();
  gainNode = audioCtx.createGain();

  osc1.type = 'sine';
  osc1.frequency.setValueAtTime(110, audioCtx.currentTime); // Low A2

  osc2.type = 'triangle';
  osc2.frequency.setValueAtTime(110.5, audioCtx.currentTime); // Slight detune phase beating

  gainNode.gain.setValueAtTime(0.001, audioCtx.currentTime);

  osc1.connect(gainNode);
  osc2.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  osc1.start();
  osc2.start();
  isAudioRunning = true;
}

const arena = document.getElementById('arena');
const core = document.getElementById('core');
const freqMeter = document.getElementById('freqMeter');
const distStat = document.getElementById('distStat');
const intensityStat = document.getElementById('intensityStat');

// Sonar background breathing
gsap.to('#sonar1', {
  scale: 1.25,
  opacity: 0.1,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut'
});

gsap.to('#sonar2', {
  scale: 1.15,
  opacity: 0.05,
  duration: 4.5,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut'
});

arena.addEventListener('mousemove', (e) => {
  initAudioDrone();
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  const rect = arena.getBoundingClientRect();
  const arenaCenterX = rect.width / 2;
  const arenaCenterY = rect.height / 2;

  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const deltaX = mouseX - arenaCenterX;
  const deltaY = mouseY - arenaCenterY;
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

  const maxRadius = 260;
  const proximityNorm = Math.max(0, Math.min(1, 1 - (distance / maxRadius)));

  // Audio pitch modulation (100Hz when far -> 440Hz when right on top)
  const targetFreq = 100 + proximityNorm * 340;
  const targetGain = proximityNorm * 0.35;

  if (osc1 && osc2 && gainNode) {
    const now = audioCtx.currentTime;
    osc1.frequency.setTargetAtTime(targetFreq, now, 0.04);
    osc2.frequency.setTargetAtTime(targetFreq * 1.5, now, 0.04); // Fifth harmonic
    gainNode.gain.setTargetAtTime(targetGain, now, 0.04);
  }

  // Magnetic visual pull toward cursor
  const pullStrength = proximityNorm * 38;
  const pullAngle = Math.atan2(deltaY, deltaX);
  const coreX = Math.cos(pullAngle) * pullStrength;
  const coreY = Math.sin(pullAngle) * pullStrength;

  gsap.to(core, {
    x: coreX,
    y: coreY,
    scale: 1 + proximityNorm * 0.18,
    boxShadow: `0 0 ${35 + proximityNorm * 50}px rgba(6, 182, 212, ${0.35 + proximityNorm * 0.5})`,
    duration: 0.2,
    ease: 'power2.out',
    overwrite: 'auto'
  });

  // Update telemetry
  freqMeter.textContent = `${Math.round(targetFreq)} Hz`;
  distStat.textContent = `${Math.round(distance)} px`;
  intensityStat.textContent = `${Math.round(proximityNorm * 100)}%`;
});

arena.addEventListener('mouseleave', () => {
  // Gracefully silence and center
  if (gainNode && audioCtx) {
    gainNode.gain.setTargetAtTime(0.001, audioCtx.currentTime, 0.2);
  }

  gsap.to(core, {
    x: 0,
    y: 0,
    scale: 1,
    boxShadow: '0 0 35px rgba(6, 182, 212, 0.35)',
    duration: 0.6,
    ease: 'elastic.out(1, 0.4)'
  });

  freqMeter.textContent = '100 Hz';
  distStat.textContent = 'Out of Range';
  intensityStat.textContent = '0%';
});
