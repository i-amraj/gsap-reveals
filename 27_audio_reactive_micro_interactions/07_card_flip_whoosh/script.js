let audioCtx = null;
let noiseBuffer = null;

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    buildNoiseBuffer();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Generate 1-second white noise buffer for whooshes
function buildNoiseBuffer() {
  const bufferSize = audioCtx.sampleRate * 1.0;
  noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    output[i] = Math.random() * 2 - 1;
  }
}

function playAirWhoosh() {
  const ctx = getAudioContext();
  const now = ctx.currentTime;
  const duration = 0.42;

  // Noise source
  const whiteNoise = ctx.createBufferSource();
  whiteNoise.buffer = noiseBuffer;

  // Sweeping bandpass filter to simulate air displacement whoosh
  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.Q.setValueAtTime(3.5, now);

  // Frequency envelope: low -> fast mid rise -> drop
  filter.frequency.setValueAtTime(250, now);
  filter.frequency.exponentialRampToValueAtTime(2800, now + duration * 0.45);
  filter.frequency.exponentialRampToValueAtTime(400, now + duration);

  // Gain envelope: curve in and curve out
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.001, now);
  gain.gain.exponentialRampToValueAtTime(0.4, now + duration * 0.4);
  gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

  whiteNoise.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  whiteNoise.start(now);
  whiteNoise.stop(now + duration + 0.05);
}

const flipCard = document.getElementById('flipCard');
let isFlipped = false;
let isAnimating = false;

flipCard.addEventListener('click', () => {
  if (isAnimating) return;
  isAnimating = true;

  playAirWhoosh();

  const targetRotation = isFlipped ? 0 : 180;
  isFlipped = !isFlipped;

  gsap.timeline({
    onComplete: () => {
      isAnimating = false;
    }
  })
  .to(flipCard, {
    scale: 1.08,
    duration: 0.18,
    ease: 'power2.out'
  })
  .to(flipCard, {
    rotateY: targetRotation,
    scale: 1,
    duration: 0.48,
    ease: 'back.inOut(1.4)'
  }, '-=0.08');
});
