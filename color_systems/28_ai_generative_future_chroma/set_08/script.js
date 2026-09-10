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
  const tokens = `--bg: #000000;
--surface: #0d0d12;
--surface-hover: #171721;
--border: #252536;
--primary: #00ff87;
--primary-hover: #4ade80;
--secondary: #60efff;
--accent: #ff007f;
--text: #ffffff;
--text-muted: #cbd5e1;
--glow: rgba(0, 255, 135, 0.45);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Chromatic Pulse Void' color palette from 'AI Generative Future Chroma':
- Background: #000000
- Surface/Cards: #0d0d12
- Primary Brand: #00ff87
- Secondary: #60efff
- Accent: #ff007f
- Main Text: #ffffff
- Muted Text: #cbd5e1
- Border: #252536
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
