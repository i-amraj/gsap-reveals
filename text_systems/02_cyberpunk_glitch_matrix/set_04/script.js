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
  heroText.textContent = e.target.value || 'CORE_OVERCLOCK://88';
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
  const css = `font-family: 'Space Mono', sans-serif;
font-weight: 700;
letter-spacing: -0.02em;
text-transform: uppercase;
font-size: clamp(2.5rem, 6vw, 4.8rem);
color: #a3e635; text-shadow: 0 0 12px rgba(163,230,53,0.6);`;
  navigator.clipboard.writeText(css).then(() => {
    showToast('Typography CSS copied to clipboard!');
  });
});

copyPromptBtn.addEventListener('click', () => {
  const p = `Use the 'Cybernetic Acid Monospace' typography treatment from 'Cyberpunk Glitch Matrix':
- Font Family: 'Space Mono', sans-serif (Google Fonts)
- Weight: 700
- Tracking / Spacing: -0.02em
- Text Transform: uppercase
- Custom Styling: color: #a3e635; text-shadow: 0 0 12px rgba(163,230,53,0.6);
Ensure headings and display titles use these exact typography properties with responsive clamp scaling.`;
  navigator.clipboard.writeText(p).then(() => {
    showToast('AI Typography Prompt copied to clipboard!');
  });
});

// Initial reveal
triggerAnimation();
