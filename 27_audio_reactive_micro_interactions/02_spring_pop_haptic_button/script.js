let audioCtx = null;
let currentTone = 'bubble';
let count = 0;

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playHapticPop(toneType) {
  const ctx = getAudioContext();
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  if (toneType === 'bubble') {
    // Upward chirp bubble pop
    osc.type = 'sine';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(780, now + 0.05);

    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.075);

  } else if (toneType === 'laser') {
    // Downward retro laser blip
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(1400, now);
    osc.frequency.exponentialRampToValueAtTime(220, now + 0.09);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.095);

  } else if (toneType === 'subthump') {
    // Deep punchy kick sub thump
    osc.type = 'sine';
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.exponentialRampToValueAtTime(45, now + 0.12);

    gain.gain.setValueAtTime(0.6, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.13);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.14);
  }
}

function spawnParticles() {
  const anchor = document.getElementById('particleAnchor');
  const colors = ['#a855f7', '#ec4899', '#38bdf8', '#fbbf24', '#ffffff'];
  
  for (let i = 0; i < 14; i++) {
    const p = document.createElement('div');
    p.className = 'bubble-particle';
    const size = gsap.utils.random(6, 16);
    const color = gsap.utils.random(colors);
    
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.background = color;
    p.style.boxShadow = `0 0 10px ${color}`;
    anchor.appendChild(p);

    const angle = (i / 14) * Math.PI * 2 + gsap.utils.random(-0.3, 0.3);
    const distance = gsap.utils.random(60, 130);
    const targetX = Math.cos(angle) * distance;
    const targetY = Math.sin(angle) * distance;

    gsap.timeline({
      onComplete: () => p.remove()
    })
    .fromTo(p, 
      { x: 0, y: 0, scale: 0.2, opacity: 1 },
      {
        x: targetX,
        y: targetY,
        scale: gsap.utils.random(1.2, 1.8),
        opacity: 0,
        duration: gsap.utils.random(0.45, 0.7),
        ease: 'power2.out'
      }
    );
  }
}

const popBtn = document.getElementById('popBtn');
const counterEl = document.getElementById('counter');
const shine = document.querySelector('.btn-shine');

popBtn.addEventListener('click', () => {
  count++;
  counterEl.textContent = count;
  
  // Play Web Audio Tone
  playHapticPop(currentTone);

  // Particle explosion
  spawnParticles();

  // Squash & Stretch spring bounce animation
  gsap.timeline()
    .to(popBtn, {
      scaleX: 1.22,
      scaleY: 0.8,
      duration: 0.08,
      ease: 'power2.in'
    })
    .to(popBtn, {
      scaleX: 0.88,
      scaleY: 1.18,
      duration: 0.15,
      ease: 'power2.out'
    })
    .to(popBtn, {
      scaleX: 1,
      scaleY: 1,
      duration: 0.45,
      ease: 'elastic.out(1.4, 0.3)'
    });

  // Light flare swipe
  gsap.fromTo(shine,
    { left: '-100%' },
    { left: '200%', duration: 0.4, ease: 'power2.out' }
  );

  // Pulse badge
  gsap.fromTo(counterEl,
    { scale: 1.5 },
    { scale: 1, duration: 0.3, ease: 'back.out(2)' }
  );
});

// Switch tone pill
document.querySelectorAll('.tone-pill').forEach(pill => {
  pill.addEventListener('click', () => {
    document.querySelectorAll('.tone-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    currentTone = pill.getAttribute('data-tone');
    playHapticPop(currentTone);
  });
});
