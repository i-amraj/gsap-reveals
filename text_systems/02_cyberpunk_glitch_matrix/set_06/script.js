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
  heroText.textContent = e.target.value || 'MAINFRAME OFFLINE';
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
  const css = `font-family: 'Share Tech Mono', sans-serif;
font-weight: 400;
letter-spacing: 0.08em;
text-transform: uppercase;
font-size: clamp(2.5rem, 6vw, 4.8rem);
color: #fbbf24; text-shadow: 2px 2px 0 #000, 0 0 10px #f59e0b;`;
  navigator.clipboard.writeText(css).then(() => {
    showToast('Typography CSS copied to clipboard!');
  });
});

copyPromptBtn.addEventListener('click', () => {
  const p = `Use the 'Hacker Scanline Shift' typography treatment from 'Cyberpunk Glitch Matrix':
- Font Family: 'Share Tech Mono', sans-serif (Google Fonts)
- Weight: 400
- Tracking / Spacing: 0.08em
- Text Transform: uppercase
- Custom Styling: color: #fbbf24; text-shadow: 2px 2px 0 #000, 0 0 10px #f59e0b;
Ensure headings and display titles use these exact typography properties with responsive clamp scaling.`;
  navigator.clipboard.writeText(p).then(() => {
    showToast('AI Typography Prompt copied to clipboard!');
  });
});

// Initial reveal
triggerAnimation();
