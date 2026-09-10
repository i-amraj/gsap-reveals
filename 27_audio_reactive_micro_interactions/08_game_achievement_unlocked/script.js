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

// Procedural Major Triad Fanfare (C5, E5, G5, C6) + Shimmer Reverb Tail
function playAchievementFanfare() {
  const ctx = getAudioContext();
  const now = ctx.currentTime;

  // Chime notes: C5 (523Hz), E5 (659Hz), G5 (784Hz), C6 (1046Hz)
  const arpeggio = [
    { freq: 523.25, time: 0.00, dur: 0.4 },
    { freq: 659.25, time: 0.09, dur: 0.4 },
    { freq: 783.99, time: 0.18, dur: 0.5 },
    { freq: 1046.50, time: 0.28, dur: 1.1 }
  ];

  arpeggio.forEach(note => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Bell chime uses combined fundamental sine + slight octave harmonic
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(note.freq, now + note.time);

    gain.gain.setValueAtTime(0.28, now + note.time);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + note.time + note.dur);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now + note.time);
    osc.stop(now + note.time + note.dur + 0.05);

    // High crystalline shimmer overtone for the last root note
    if (note.freq > 1000) {
      const shimmer = ctx.createOscillator();
      const shimmerGain = ctx.createGain();

      shimmer.type = 'sine';
      shimmer.frequency.setValueAtTime(note.freq * 2, now + note.time); // C7 octave

      shimmerGain.gain.setValueAtTime(0.12, now + note.time);
      shimmerGain.gain.exponentialRampToValueAtTime(0.0001, now + note.time + 1.2);

      shimmer.connect(shimmerGain);
      shimmerGain.connect(ctx.destination);

      shimmer.start(now + note.time);
      shimmer.stop(now + note.time + 1.25);
    }
  });
}

function spawnGoldConfetti() {
  const anchor = document.getElementById('confettiAnchor');
  anchor.innerHTML = '';
  const colors = ['#fbbf24', '#f59e0b', '#fde68a', '#ffffff', '#38bdf8'];

  for (let i = 0; i < 28; i++) {
    const spark = document.createElement('div');
    spark.className = 'gold-spark';
    const size = gsap.utils.random(4, 10);
    const color = gsap.utils.random(colors);

    spark.style.width = `${size}px`;
    spark.style.height = `${size}px`;
    spark.style.backgroundColor = color;
    spark.style.boxShadow = `0 0 10px ${color}`;
    anchor.appendChild(spark);

    const angle = (i / 28) * Math.PI * 2 + gsap.utils.random(-0.2, 0.2);
    const dist = gsap.utils.random(80, 220);
    const targetX = Math.cos(angle) * dist;
    const targetY = Math.sin(angle) * dist + 40; // gravity drift

    gsap.timeline({
      onComplete: () => spark.remove()
    })
    .fromTo(spark,
      { x: 0, y: 0, scale: 0.1, opacity: 1 },
      {
        x: targetX,
        y: targetY,
        scale: gsap.utils.random(1.2, 1.8),
        opacity: 0,
        duration: gsap.utils.random(0.6, 1.0),
        ease: 'power3.out'
      }
    );
  }
}

const triggerBtn = document.getElementById('triggerBtn');
const toast = document.getElementById('toast');
const closeToast = document.getElementById('closeToast');
const trophy = document.querySelector('.trophy-emoji');
const shimmer = document.querySelector('.toast-shimmer');

let toastTl = null;

function triggerAchievement() {
  playAchievementFanfare();
  spawnGoldConfetti();

  if (toastTl) toastTl.kill();

  toastTl = gsap.timeline();

  // Toast drop down with bouncy elastic overshoot
  toastTl
    .set(toast, { y: -140, opacity: 0 })
    .to(toast, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'back.out(1.6)'
    })
    // Trophy icon celebration bounce
    .fromTo(trophy,
      { scale: 0.3, rotate: -25 },
      { scale: 1.2, rotate: 10, duration: 0.35, ease: 'back.out(2)' },
      '-=0.3'
    )
    .to(trophy, {
      scale: 1,
      rotate: 0,
      duration: 0.2,
      ease: 'power2.out'
    })
    // Specular light sweep across gold badge
    .fromTo(shimmer,
      { left: '-120%' },
      { left: '200%', duration: 0.6, ease: 'power2.out' },
      '-=0.2'
    )
    // Auto-dismiss after 4 seconds
    .to(toast, {
      y: -140,
      opacity: 0,
      duration: 0.45,
      ease: 'power3.in',
      delay: 3.5
    });
}

triggerBtn.addEventListener('click', triggerAchievement);

closeToast.addEventListener('click', () => {
  if (toastTl) toastTl.kill();
  gsap.to(toast, {
    y: -140,
    opacity: 0,
    duration: 0.35,
    ease: 'power3.in'
  });
});
