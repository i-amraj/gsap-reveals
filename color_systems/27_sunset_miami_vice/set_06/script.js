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
  const tokens = `--bg: #09091f;
--surface: #14143d;
--surface-hover: #1e1e59;
--border: #2c2c7d;
--primary: #818cf8;
--primary-hover: #a5b4fc;
--secondary: #f472b6;
--accent: #34d399;
--text: #ffffff;
--text-muted: #94a3b8;
--glow: rgba(129, 140, 248, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'South Beach Twilight' color palette from 'Sunset Miami Vice':
- Background: #09091f
- Surface/Cards: #14143d
- Primary Brand: #818cf8
- Secondary: #f472b6
- Accent: #34d399
- Main Text: #ffffff
- Muted Text: #94a3b8
- Border: #2c2c7d
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
