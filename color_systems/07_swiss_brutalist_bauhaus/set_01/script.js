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
  const tokens = `--bg: #ffffff;
--surface: #f8fafc;
--surface-hover: #f1f5f9;
--border: #000000;
--primary: #e11d48;
--primary-hover: #be123c;
--secondary: #1d4ed8;
--accent: #facc15;
--text: #000000;
--text-muted: #475569;
--glow: rgba(225, 29, 72, 0.25);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Bauhaus Primary' color palette from 'Swiss Brutalist Bauhaus':
- Background: #ffffff
- Surface/Cards: #f8fafc
- Primary Brand: #e11d48
- Secondary: #1d4ed8
- Accent: #facc15
- Main Text: #000000
- Muted Text: #475569
- Border: #000000
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
