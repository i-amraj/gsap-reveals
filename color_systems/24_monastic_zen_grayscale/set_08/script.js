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
  const tokens = `--bg: #f9f8f6;
--surface: #ffffff;
--surface-hover: #f1efea;
--border: #dedbd2;
--primary: #282624;
--primary-hover: #141312;
--secondary: #706d69;
--accent: #474542;
--text: #1c1a18;
--text-muted: #6b6763;
--glow: rgba(40, 38, 36, 0.15);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Bleached Bone & Ash' color palette from 'Monastic Zen Grayscale':
- Background: #f9f8f6
- Surface/Cards: #ffffff
- Primary Brand: #282624
- Secondary: #706d69
- Accent: #474542
- Main Text: #1c1a18
- Muted Text: #6b6763
- Border: #dedbd2
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
