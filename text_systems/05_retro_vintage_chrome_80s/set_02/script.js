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
  heroText.textContent = e.target.value || 'GOLDEN LUXURY';
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
  const css = `font-family: 'Righteous', sans-serif;
font-weight: 400;
letter-spacing: 0.03em;
text-transform: uppercase;
font-size: clamp(2.5rem, 6vw, 4.8rem);
background: linear-gradient(180deg, #ffe066 0%, #f59e0b 45%, #78350f 50%, #fde68a 52%, #b45309 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 4px 12px rgba(245,158,11,0.5));`;
  navigator.clipboard.writeText(css).then(() => {
    showToast('Typography CSS copied to clipboard!');
  });
});

copyPromptBtn.addEventListener('click', () => {
  const p = `Use the 'Gold Bullion 1984' typography treatment from 'Retro Vintage Chrome 80s':
- Font Family: 'Righteous', sans-serif (Google Fonts)
- Weight: 400
- Tracking / Spacing: 0.03em
- Text Transform: uppercase
- Custom Styling: background: linear-gradient(180deg, #ffe066 0%, #f59e0b 45%, #78350f 50%, #fde68a 52%, #b45309 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 4px 12px rgba(245,158,11,0.5));
Ensure headings and display titles use these exact typography properties with responsive clamp scaling.`;
  navigator.clipboard.writeText(p).then(() => {
    showToast('AI Typography Prompt copied to clipboard!');
  });
});

// Initial reveal
triggerAnimation();
