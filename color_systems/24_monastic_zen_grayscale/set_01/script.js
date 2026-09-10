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
--surface: #121212;
--surface-hover: #1c1c1c;
--border: #282828;
--primary: #ffffff;
--primary-hover: #e5e5e5;
--secondary: #a3a3a3;
--accent: #737373;
--text: #ffffff;
--text-muted: #a3a3a3;
--glow: rgba(255, 255, 255, 0.25);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Absolute Pure Monochrome' color palette from 'Monastic Zen Grayscale':
- Background: #000000
- Surface/Cards: #121212
- Primary Brand: #ffffff
- Secondary: #a3a3a3
- Accent: #737373
- Main Text: #ffffff
- Muted Text: #a3a3a3
- Border: #282828
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
