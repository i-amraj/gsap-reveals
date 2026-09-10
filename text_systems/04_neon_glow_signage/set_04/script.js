const heroText = document.getElementById('heroText');
const textInput = document.getElementById('textInput');
const replayAnimBtn = document.getElementById('replayAnimBtn');
const copyCssBtn = document.getElementById('copyCssBtn');
const copyPromptBtn = document.getElementById('copyPromptBtn');
const toast = document.getElementById('toast');

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

// Live text input binding
textInput.addEventListener('input', (e) => {
  heroText.textContent = e.target.value || 'TOXIC ENERGY';
});

// Kinetic Animation
function triggerAnimation() {
  gsap.fromTo(heroText,
    { opacity: 0, y: 30, scale: 0.95 },
    { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.8)' }
  );
}

replayAnimBtn.addEventListener('click', triggerAnimation);

copyCssBtn.addEventListener('click', () => {
  const css = `font-family: 'Russo One', sans-serif;
font-weight: 400;
letter-spacing: 0.04em;
text-transform: uppercase;
font-size: clamp(2.5rem, 6vw, 4.8rem);
color: #fff; text-shadow: 0 0 5px #39ff14, 0 0 15px #39ff14, 0 0 30px #22c55e;`;
  navigator.clipboard.writeText(css).then(() => {
    showToast('Typography CSS copied to clipboard!');
  });
});

copyPromptBtn.addEventListener('click', () => {
  const p = `Use the 'Acid Lime Strobe' typography treatment from 'Neon Glow Signage':
- Font Family: 'Russo One', sans-serif (Google Fonts)
- Weight: 400
- Tracking / Spacing: 0.04em
- Text Transform: uppercase
- Custom Styling: color: #fff; text-shadow: 0 0 5px #39ff14, 0 0 15px #39ff14, 0 0 30px #22c55e;
Ensure headings and display titles use these exact typography properties with responsive clamp scaling.`;
  navigator.clipboard.writeText(p).then(() => {
    showToast('AI Typography Prompt copied to clipboard!');
  });
});

// Initial reveal
triggerAnimation();
