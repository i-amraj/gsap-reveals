// Web Audio Context Synthesizer for Mechanical Click
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

function playMechanicalClick(isOn) {
  const ctx = getAudioContext();
  const now = ctx.currentTime;

  // 1. High transient "click" burst (snap)
  const clickOsc = ctx.createOscillator();
  const clickGain = ctx.createGain();
  
  clickOsc.type = 'sine';
  const startFreq = isOn ? 1400 : 900;
  const endFreq = isOn ? 800 : 400;
  
  clickOsc.frequency.setValueAtTime(startFreq, now);
  clickOsc.frequency.exponentialRampToValueAtTime(endFreq, now + 0.035);

  clickGain.gain.setValueAtTime(0.3, now);
  clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

  clickOsc.connect(clickGain);
  clickGain.connect(ctx.destination);

  clickOsc.start(now);
  clickOsc.stop(now + 0.045);

  // 2. Low resonant "thud" body
  const thudOsc = ctx.createOscillator();
  const thudGain = ctx.createGain();

  thudOsc.type = 'triangle';
  const thudBase = isOn ? 160 : 120;
  thudOsc.frequency.setValueAtTime(thudBase, now);
  thudOsc.frequency.exponentialRampToValueAtTime(30, now + 0.08);

  thudGain.gain.setValueAtTime(0.45, now);
  thudGain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

  thudOsc.connect(thudGain);
  thudGain.connect(ctx.destination);

  thudOsc.start(now);
  thudOsc.stop(now + 0.1);
}

// GSAP Switch Physics and Click Bindings
document.querySelectorAll('.tactile-switch').forEach((btn, index) => {
  const thumb = btn.querySelector('.switch-thumb');
  const statusBadge = document.getElementById(`status-${index + 1}`);

  btn.addEventListener('click', () => {
    const isActive = btn.getAttribute('data-active') === 'true';
    const nextState = !isActive;
    btn.setAttribute('data-active', nextState ? 'true' : 'false');

    // Trigger procedural audio
    playMechanicalClick(nextState);

    // GSAP Spring Knob Physics
    const targetX = nextState ? 34 : 0;
    
    gsap.timeline()
      .to(thumb, {
        scaleX: 1.25,
        scaleY: 0.85,
        duration: 0.08,
        ease: 'power2.in'
      })
      .to(thumb, {
        x: targetX,
        scaleX: 0.9,
        scaleY: 1.15,
        duration: 0.15,
        ease: 'power3.out'
      })
      .to(thumb, {
        scaleX: 1,
        scaleY: 1,
        duration: 0.28,
        ease: 'elastic.out(1.2, 0.4)'
      });

    // Animate badge text & state
    if (statusBadge) {
      statusBadge.textContent = nextState ? 'ONLINE' : 'OFFLINE';
      statusBadge.className = `status-badge ${nextState ? 'on' : 'off'}`;
      gsap.fromTo(statusBadge, 
        { scale: 0.8, opacity: 0.5 },
        { scale: 1, opacity: 1, duration: 0.25, ease: 'back.out(2)' }
      );
    }
  });
});
