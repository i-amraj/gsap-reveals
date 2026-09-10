gsap.registerPlugin(Draggable);

// Web Audio API Synthesizer & Oscilloscope
let audioCtx = null;
let osc = null;
let gainNode = null;
let analyser = null;
let currentWaveType = 'sawtooth';

function initSynth() {
  if (audioCtx) return;

  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  osc = audioCtx.createOscillator();
  gainNode = audioCtx.createGain();
  analyser = audioCtx.createAnalyser();

  analyser.fftSize = 2048;
  osc.type = currentWaveType;
  osc.frequency.setValueAtTime(440, audioCtx.currentTime);

  gainNode.gain.setValueAtTime(0.001, audioCtx.currentTime);

  osc.connect(gainNode);
  gainNode.connect(analyser);
  analyser.connect(audioCtx.destination);

  osc.start();
}

const trackBox = document.getElementById('trackBox');
const sliderHandle = document.getElementById('sliderHandle');
const trackFill = document.getElementById('trackFill');
const freqDisplay = document.getElementById('freqDisplay');

// Setup Draggable
let maxDrag = trackBox.clientWidth - sliderHandle.clientWidth - 12;

window.addEventListener('resize', () => {
  maxDrag = trackBox.clientWidth - sliderHandle.clientWidth - 12;
  Draggable.get(sliderHandle).applyBounds({ minX: 0, maxX: maxDrag });
});

Draggable.create(sliderHandle, {
  type: 'x',
  bounds: { minX: 0, maxX: maxDrag },
  edgeResistance: 0.8,
  onPress: function () {
    initSynth();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    // Smooth volume fade-in on touch/click
    gainNode.gain.setTargetAtTime(0.25, audioCtx.currentTime, 0.03);
  },
  onDrag: function () {
    const progress = this.x / maxDrag;
    trackFill.style.width = `${progress * 100}%`;

    // Exponential frequency mapping from 65Hz to 1320Hz (A1 to E6)
    const minFreq = 65;
    const maxFreq = 1320;
    const freq = minFreq * Math.pow(maxFreq / minFreq, progress);

    if (osc) {
      osc.frequency.setTargetAtTime(freq, audioCtx.currentTime, 0.02);
    }
    freqDisplay.textContent = `${freq.toFixed(1)} Hz`;
  },
  onRelease: function () {
    // Snap back to 440Hz center detent or fade out
    if (gainNode) {
      gainNode.gain.setTargetAtTime(0.001, audioCtx.currentTime, 0.2);
    }
  }
});

// Position handle initially in center
gsap.set(sliderHandle, { x: maxDrag * 0.5 });
trackFill.style.width = '50%';

// Waveform Canvas Oscilloscope Loop
const canvas = document.getElementById('scopeCanvas');
const canvasCtx = canvas.getContext('2d');
const timeData = new Uint8Array(1024);

function renderScope() {
  requestAnimationFrame(renderScope);

  canvasCtx.fillStyle = '#090d16';
  canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw grid
  canvasCtx.lineWidth = 1;
  canvasCtx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
  canvasCtx.beginPath();
  canvasCtx.moveTo(0, canvas.height / 2);
  canvasCtx.lineTo(canvas.width, canvas.height / 2);
  canvasCtx.stroke();

  if (analyser && gainNode && gainNode.gain.value > 0.01) {
    analyser.getByteTimeDomainData(timeData);

    canvasCtx.lineWidth = 2.5;
    canvasCtx.strokeStyle = '#f59e0b';
    canvasCtx.shadowColor = '#f59e0b';
    canvasCtx.shadowBlur = 10;
    canvasCtx.beginPath();

    const sliceWidth = canvas.width / 1024;
    let x = 0;

    for (let i = 0; i < 1024; i++) {
      const v = timeData[i] / 128.0;
      const y = (v * canvas.height) / 2;

      if (i === 0) canvasCtx.moveTo(x, y);
      else canvasCtx.lineTo(x, y);

      x += sliceWidth;
    }
    canvasCtx.stroke();
    canvasCtx.shadowBlur = 0;
  } else {
    // Idle flat line
    canvasCtx.lineWidth = 1.5;
    canvasCtx.strokeStyle = 'rgba(245, 158, 11, 0.3)';
    canvasCtx.beginPath();
    canvasCtx.moveTo(0, canvas.height / 2);
    canvasCtx.lineTo(canvas.width, canvas.height / 2);
    canvasCtx.stroke();
  }
}
renderScope();

// Waveform Switchers
document.querySelectorAll('.wave-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.wave-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentWaveType = btn.getAttribute('data-wave');
    if (osc) osc.type = currentWaveType;
  });
});
