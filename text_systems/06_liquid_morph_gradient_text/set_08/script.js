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
  heroText.textContent = e.target.value || 'PLAYFUL DREAMS';
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
  const css = `font-family: 'Syne', sans-serif;
font-weight: 700;
letter-spacing: -0.02em;
text-transform: uppercase;
font-size: clamp(2.5rem, 6vw, 4.8rem);
background: linear-gradient(135deg, #f472b6 0%, #c084fc 33%, #38bdf8 66%, #34d399 100%); background-size: 300% 300%; -webkit-background-clip: text; -webkit-text-fill-color: transparent;`;
  navigator.clipboard.writeText(css).then(() => {
    showToast('Typography CSS copied to clipboard!');
  });
});

copyPromptBtn.addEventListener('click', () => {
  const p = `Use the 'Pastel Rainbow Sorbet' typography treatment from 'Liquid Morph Gradient Text':
- Font Family: 'Syne', sans-serif (Google Fonts)
- Weight: 700
- Tracking / Spacing: -0.02em
- Text Transform: uppercase
- Custom Styling: background: linear-gradient(135deg, #f472b6 0%, #c084fc 33%, #38bdf8 66%, #34d399 100%); background-size: 300% 300%; -webkit-background-clip: text; -webkit-text-fill-color: transparent;
Ensure headings and display titles use these exact typography properties with responsive clamp scaling.`;
  navigator.clipboard.writeText(p).then(() => {
    showToast('AI Typography Prompt copied to clipboard!');
  });
});

// Initial reveal
triggerAnimation();
