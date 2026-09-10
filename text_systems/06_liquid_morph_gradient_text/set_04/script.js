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
  heroText.textContent = e.target.value || 'NEON STREAM';
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
  const css = `font-family: 'Orbitron', sans-serif;
font-weight: 800;
letter-spacing: 0.03em;
text-transform: uppercase;
font-size: clamp(2.5rem, 6vw, 4.8rem);
background: linear-gradient(135deg, #00f3ff 0%, #ff0055 50%, #39ff14 100%); background-size: 300% 300%; -webkit-background-clip: text; -webkit-text-fill-color: transparent;`;
  navigator.clipboard.writeText(css).then(() => {
    showToast('Typography CSS copied to clipboard!');
  });
});

copyPromptBtn.addEventListener('click', () => {
  const p = `Use the 'Cyberpunk Neon Gradient' typography treatment from 'Liquid Morph Gradient Text':
- Font Family: 'Orbitron', sans-serif (Google Fonts)
- Weight: 800
- Tracking / Spacing: 0.03em
- Text Transform: uppercase
- Custom Styling: background: linear-gradient(135deg, #00f3ff 0%, #ff0055 50%, #39ff14 100%); background-size: 300% 300%; -webkit-background-clip: text; -webkit-text-fill-color: transparent;
Ensure headings and display titles use these exact typography properties with responsive clamp scaling.`;
  navigator.clipboard.writeText(p).then(() => {
    showToast('AI Typography Prompt copied to clipboard!');
  });
});

// Initial reveal
triggerAnimation();
