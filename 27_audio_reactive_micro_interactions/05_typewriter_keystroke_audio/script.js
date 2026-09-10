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

// Procedural Keystroke Audio Synthesizer
function playKeystrokeSound(keyType = 'char') {
  const ctx = getAudioContext();
  const now = ctx.currentTime;

  if (keyType === 'enter') {
    // Vintage carriage return chime bell
    const bellOsc = ctx.createOscillator();
    const bellGain = ctx.createGain();

    bellOsc.type = 'sine';
    bellOsc.frequency.setValueAtTime(1760, now); // A6 bell
    bellGain.gain.setValueAtTime(0.3, now);
    bellGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);

    bellOsc.connect(bellGain);
    bellGain.connect(ctx.destination);
    bellOsc.start(now);
    bellOsc.stop(now + 0.85);

  } else if (keyType === 'space') {
    // Deeper wooden spacebar thud
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(60, now + 0.06);

    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.075);

  } else {
    // Standard character key click (Cherry MX Blue sharp click + bounce)
    // 1. High transient plastic snap
    const clickOsc = ctx.createOscillator();
    const clickGain = ctx.createGain();
    
    // Slight random pitch variation like real mechanical keys
    const randPitch = gsap.utils.random(1800, 2400);
    clickOsc.type = 'sawtooth';
    clickOsc.frequency.setValueAtTime(randPitch, now);
    clickOsc.frequency.exponentialRampToValueAtTime(randPitch * 0.4, now + 0.02);

    clickGain.gain.setValueAtTime(0.18, now);
    clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.025);

    clickOsc.connect(clickGain);
    clickGain.connect(ctx.destination);
    clickOsc.start(now);
    clickOsc.stop(now + 0.03);

    // 2. Bottom-out thud
    const thudOsc = ctx.createOscillator();
    const thudGain = ctx.createGain();

    thudOsc.type = 'sine';
    thudOsc.frequency.setValueAtTime(gsap.utils.random(300, 360), now);
    thudOsc.frequency.exponentialRampToValueAtTime(80, now + 0.04);

    thudGain.gain.setValueAtTime(0.2, now);
    thudGain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);

    thudOsc.connect(thudGain);
    thudGain.connect(ctx.destination);
    thudOsc.start(now);
    thudOsc.stop(now + 0.05);
  }
}

// Blinking Cursor
gsap.to('#cursor', {
  opacity: 0,
  duration: 0.5,
  repeat: -1,
  yoyo: true,
  ease: 'steps(1)'
});

const typedOutput = document.getElementById('typedOutput');
const liveInput = document.getElementById('liveInput');
const replayBtn = document.getElementById('replayBtn');
const clearBtn = document.getElementById('clearBtn');

// Autoplay Demo Text
const demoPhrase = "gsap.to(world, { tactileFeedback: true, audioReactivity: 100 });";
let autoTypingTimer = null;

function autoType(text, i = 0) {
  if (i < text.length) {
    const char = text.charAt(i);
    typedOutput.textContent += char;

    if (char === ' ') {
      playKeystrokeSound('space');
    } else {
      playKeystrokeSound('char');
    }

    // Natural human typing rhythm jitter
    const delay = gsap.utils.random(55, 120);
    autoTypingTimer = setTimeout(() => {
      autoType(text, i + 1);
    }, delay);
  } else {
    // Finished text, ring carriage return bell
    setTimeout(() => {
      playKeystrokeSound('enter');
      typedOutput.innerHTML += "<br>&gt; <span style='color: #10b981'>[OK] Pipeline Executed Successfully.</span>";
    }, 250);
  }
}

replayBtn.addEventListener('click', () => {
  clearTimeout(autoTypingTimer);
  typedOutput.textContent = '';
  autoType(demoPhrase);
});

clearBtn.addEventListener('click', () => {
  clearTimeout(autoTypingTimer);
  typedOutput.textContent = '';
  liveInput.value = '';
});

// Live Physical Keyboard Typing
liveInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    playKeystrokeSound('enter');
    typedOutput.innerHTML += "<br>&gt; ";
    liveInput.value = '';
    e.preventDefault();
  } else if (e.key === ' ') {
    playKeystrokeSound('space');
    typedOutput.textContent += ' ';
  } else if (e.key === 'Backspace') {
    playKeystrokeSound('char');
    typedOutput.textContent = typedOutput.textContent.slice(0, -1);
  } else if (e.key.length === 1) {
    playKeystrokeSound('char');
    typedOutput.textContent += e.key;
  }
});
