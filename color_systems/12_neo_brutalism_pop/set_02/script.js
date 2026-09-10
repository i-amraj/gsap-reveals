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
  const tokens = `--bg: #e9d5ff;
--surface: #ffffff;
--surface-hover: #faf5ff;
--border: #000000;
--primary: #fde047;
--primary-hover: #fef08a;
--secondary: #a855f7;
--accent: #38bdf8;
--text: #000000;
--text-muted: #334155;
--glow: none;`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Lilac & Lemon Pop' color palette from 'Neo-Brutalism Pop':
- Background: #e9d5ff
- Surface/Cards: #ffffff
- Primary Brand: #fde047
- Secondary: #a855f7
- Accent: #38bdf8
- Main Text: #000000
- Muted Text: #334155
- Border: #000000
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
