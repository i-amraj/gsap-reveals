// Procedural 8-bit Sound Synthesizer via Web Audio API
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playCoinSound() {
  const ctx = getAudioContext();
  const now = ctx.currentTime;

  // 8-bit Mario style dual-tone coin sound (B5 -> E6)
  const osc1 = ctx.createOscillator();
  const gain1 = ctx.createGain();

  osc1.type = 'square';
  osc1.frequency.setValueAtTime(987.77, now); // B5
  osc1.frequency.setValueAtTime(1318.51, now + 0.08); // E6

  gain1.gain.setValueAtTime(0.2, now);
  gain1.gain.setValueAtTime(0.2, now + 0.08);
  gain1.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);

  osc1.connect(gain1);
  gain1.connect(ctx.destination);

  osc1.start(now);
  osc1.stop(now + 0.42);
}

function playBlipSound() {
  const ctx = getAudioContext();
  const now = ctx.currentTime;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'square';
  osc.frequency.setValueAtTime(440, now);
  osc.frequency.exponentialRampToValueAtTime(880, now + 0.04);

  gain.gain.setValueAtTime(0.15, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.055);
}

const gameRows = document.querySelectorAll('.game-row');
const upBtn = document.getElementById('upBtn');
const downBtn = document.getElementById('downBtn');
const startBtn = document.getElementById('startBtn');
const coinBtn = document.getElementById('coinBtn');
const creditsText = document.getElementById('creditsText');

let activeIndex = 0;
let credits = 0;

function updateSelection(newIdx) {
  playBlipSound();
  gameRows.forEach(row => row.classList.remove('active'));
  activeIndex = (newIdx + gameRows.length) % gameRows.length;
  gameRows[activeIndex].classList.add('active');

  gsap.fromTo(gameRows[activeIndex],
    { x: -5 },
    { x: 0, duration: 0.15, ease: 'back.out(2)' }
  );
}

upBtn.addEventListener('click', () => updateSelection(activeIndex - 1));
downBtn.addEventListener('click', () => updateSelection(activeIndex + 1));

// Keyboard Navigation
window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') {
    updateSelection(activeIndex - 1);
  } else if (e.key === 'ArrowDown') {
    updateSelection(activeIndex + 1);
  } else if (e.key === 'Enter' || e.code === 'Space') {
    launchActiveGame();
  }
});

coinBtn.addEventListener('click', () => {
  credits++;
  playCoinSound();
  creditsText.textContent = `CREDITS [${credits}]`;
  creditsText.style.color = '#facc15';

  gsap.fromTo(creditsText,
    { scale: 1.3 },
    { scale: 1, duration: 0.3, ease: 'back.out(2)' }
  );
});

function launchActiveGame() {
  const targetUrl = gameRows[activeIndex].getAttribute('data-url');
  window.location.href = targetUrl;
}

startBtn.addEventListener('click', launchActiveGame);

gameRows.forEach((row, idx) => {
  row.addEventListener('click', () => {
    updateSelection(idx);
  });
});
