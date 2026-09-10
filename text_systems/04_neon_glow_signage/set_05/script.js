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
  heroText.textContent = e.target.value || 'VELVET CLUB';
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
font-weight: 900;
letter-spacing: 0.1em;
text-transform: uppercase;
font-size: clamp(2.5rem, 6vw, 4.8rem);
color: #fff; text-shadow: 0 0 5px #c084fc, 0 0 15px #a855f7, 0 0 35px #7e22ce, 0 0 70px #581c87;`;
  navigator.clipboard.writeText(css).then(() => {
    showToast('Typography CSS copied to clipboard!');
  });
});

copyPromptBtn.addEventListener('click', () => {
  const p = `Use the 'Ultraviolet Nightclub' typography treatment from 'Neon Glow Signage':
- Font Family: 'Orbitron', sans-serif (Google Fonts)
- Weight: 900
- Tracking / Spacing: 0.1em
- Text Transform: uppercase
- Custom Styling: color: #fff; text-shadow: 0 0 5px #c084fc, 0 0 15px #a855f7, 0 0 35px #7e22ce, 0 0 70px #581c87;
Ensure headings and display titles use these exact typography properties with responsive clamp scaling.`;
  navigator.clipboard.writeText(p).then(() => {
    showToast('AI Typography Prompt copied to clipboard!');
  });
});

// Initial reveal
triggerAnimation();
