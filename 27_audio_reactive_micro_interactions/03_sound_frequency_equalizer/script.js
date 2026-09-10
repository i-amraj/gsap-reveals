const NUM_BARS = 24;
const visualizer = document.getElementById('visualizer');

// Build EQ Columns with peak floater indicator
const bars = [];
const peaks = [];
const peakLevels = new Array(NUM_BARS).fill(0);

for (let i = 0; i < NUM_BARS; i++) {
  const col = document.createElement('div');
  col.className = 'eq-column';

  const peak = document.createElement('div');
  peak.className = 'eq-peak';

  const bar = document.createElement('div');
  bar.className = 'eq-bar';

  col.appendChild(peak);
  col.appendChild(bar);
  visualizer.appendChild(col);

  bars.push(bar);
  peaks.push(peak);
}

// Web Audio API Synthesizer + Analyser
let audioCtx = null;
let analyser = null;
let isPlaying = false;
let sequenceTimer = null;
let currentFreqData = null;

// Musical Pentatonic Chords frequencies
const notes = [
  130.81, 146.83, 164.81, 196.00, 220.00, // C3, D3, E3, G3, A3
  261.63, 293.66, 329.63, 392.00, 440.00, // C4, D4, E4, G4, A4
  523.25, 587.33, 659.25, 783.99, 880.00  // C5, D5, E5, G5, A5
];

function initAudioEngine() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 64; // 32 frequency bins
    analyser.smoothingTimeConstant = 0.8;
    currentFreqData = new Uint8Array(analyser.frequencyBinCount);
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function playSynthNote(freq, dur = 0.3) {
  if (!audioCtx || !analyser) return;

  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const filter = audioCtx.createBiquadFilter();
  const gain = audioCtx.createGain();

  osc.type = 'triangle';
  osc.frequency.setValueAtTime(freq, now);

  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(freq * 3.5, now);
  filter.Q.setValueAtTime(3, now);

  gain.gain.setValueAtTime(0.22, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + dur);

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(analyser);
  analyser.connect(audioCtx.destination);

  osc.start(now);
  osc.stop(now + dur + 0.05);

  document.getElementById('freqReadout').textContent = `${(freq / 1000).toFixed(2)} kHz`;
}

// Sequence Arpeggiator Loop
let noteStep = 0;
function startArpeggiator() {
  const chordSteps = [0, 4, 7, 9, 12, 11, 7, 4, 2, 7, 9, 14];
  sequenceTimer = setInterval(() => {
    const noteIdx = chordSteps[noteStep % chordSteps.length];
    playSynthNote(notes[noteIdx], 0.28);
    noteStep++;
  }, 220);
}

function stopArpeggiator() {
  if (sequenceTimer) {
    clearInterval(sequenceTimer);
    sequenceTimer = null;
  }
}

// GSAP Ticker for 60fps real-time audio visualization
gsap.ticker.add(() => {
  if (analyser && isPlaying) {
    analyser.getByteFrequencyData(currentFreqData);

    for (let i = 0; i < NUM_BARS; i++) {
      // Map bar index to frequency bin
      const binIdx = Math.min(i + 2, currentFreqData.length - 1);
      const rawVal = currentFreqData[binIdx] || 0;
      const heightPercent = Math.max(6, (rawVal / 255) * 98);

      // Smooth bar scale
      bars[i].style.height = `${heightPercent}%`;

      // Gravity peak logic
      if (heightPercent >= peakLevels[i]) {
        peakLevels[i] = heightPercent;
      } else {
        peakLevels[i] -= 1.8; // Peak decay speed
        if (peakLevels[i] < 6) peakLevels[i] = 6;
      }
      peaks[i].style.top = `${100 - peakLevels[i]}%`;
    }
  } else {
    // Idle gentle wave breathing
    const time = Date.now() * 0.003;
    for (let i = 0; i < NUM_BARS; i++) {
      const idleH = 6 + Math.sin(time + i * 0.3) * 4;
      bars[i].style.height = `${idleH}%`;
      peaks[i].style.top = `${100 - idleH}%`;
    }
  }
});

// UI Event Handlers
const togglePlayBtn = document.getElementById('togglePlayBtn');
const statusDot = document.getElementById('statusDot');
const trackName = document.getElementById('trackName');
const btnLabel = document.getElementById('btnLabel');

togglePlayBtn.addEventListener('click', () => {
  initAudioEngine();
  isPlaying = !isPlaying;

  if (isPlaying) {
    startArpeggiator();
    statusDot.classList.add('active');
    trackName.textContent = 'SYNTH ENGINE: 136 BPM ARPEGGIATOR';
    btnLabel.textContent = 'STOP SYNTH LOOP';
    togglePlayBtn.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
  } else {
    stopArpeggiator();
    statusDot.classList.remove('active');
    trackName.textContent = 'SYNTH ENGINE: IDLE';
    btnLabel.textContent = 'START SYNTH CHORD LOOP';
    togglePlayBtn.style.background = 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)';
    document.getElementById('freqReadout').textContent = '0.00 kHz';
  }
});

// Theme Style Toggles
document.querySelectorAll('.style-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.style-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const mode = btn.getAttribute('data-mode');
    document.body.setAttribute('data-theme', mode);
  });
});
