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
  const tokens = `--bg: #07030e;
--surface: #140926;
--surface-hover: #200e3d;
--border: #31165c;
--primary: #d946ef;
--primary-hover: #e879f9;
--secondary: #00ff87;
--accent: #fde047;
--text: #ffffff;
--text-muted: #f0abfc;
--glow: rgba(217, 70, 239, 0.45);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'UV Blacklight' color palette from 'Glitch Acid Rave':
- Background: #07030e
- Surface/Cards: #140926
- Primary Brand: #d946ef
- Secondary: #00ff87
- Accent: #fde047
- Main Text: #ffffff
- Muted Text: #f0abfc
- Border: #31165c
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
