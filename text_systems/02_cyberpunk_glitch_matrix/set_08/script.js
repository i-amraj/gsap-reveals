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
  heroText.textContent = e.target.value || 'ARCADE PROTOCOL';
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
  const css = `font-family: 'Silkscreen', sans-serif;
font-weight: 700;
letter-spacing: 0.05em;
text-transform: uppercase;
font-size: clamp(2.5rem, 6vw, 4.8rem);
color: #c084fc; text-shadow: -2px 0 #38bdf8, 2px 0 #ec4899;`;
  navigator.clipboard.writeText(css).then(() => {
    showToast('Typography CSS copied to clipboard!');
  });
});

copyPromptBtn.addEventListener('click', () => {
  const p = `Use the 'Silkscreen 8-Bit Cyber' typography treatment from 'Cyberpunk Glitch Matrix':
- Font Family: 'Silkscreen', sans-serif (Google Fonts)
- Weight: 700
- Tracking / Spacing: 0.05em
- Text Transform: uppercase
- Custom Styling: color: #c084fc; text-shadow: -2px 0 #38bdf8, 2px 0 #ec4899;
Ensure headings and display titles use these exact typography properties with responsive clamp scaling.`;
  navigator.clipboard.writeText(p).then(() => {
    showToast('AI Typography Prompt copied to clipboard!');
  });
});

// Initial reveal
triggerAnimation();
