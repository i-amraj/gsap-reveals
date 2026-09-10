const toast = document.getElementById('toast');

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

// Swatches Click to Copy
document.querySelectorAll('.swatch').forEach(swatch => {
  swatch.addEventListener('click', () => {
    const hex = swatch.getAttribute('data-hex');
    navigator.clipboard.writeText(hex).then(() => {
      showToast(`Copied ${hex} to clipboard!`);
    });
  });
});

// Copy Tokens
document.getElementById('copyTokensBtn').addEventListener('click', () => {
  const tokens = `--bg: #0a0614;
--surface: #160d2b;
--surface-hover: #241547;
--border: #371f6d;
--primary: #d946ef;
--primary-hover: #e879f9;
--secondary: #06b6d4;
--accent: #facc15;
--text: #faf5ff;
--text-muted: #d8b4fe;
--glow: rgba(217, 70, 239, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Dark Pulsar' color palette from 'Glassmorphism Deep Space':
- Background: #0a0614
- Surface/Cards: #160d2b
- Primary Brand: #d946ef
- Secondary: #06b6d4
- Accent: #facc15
- Main Text: #faf5ff
- Muted Text: #d8b4fe
- Border: #371f6d
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
