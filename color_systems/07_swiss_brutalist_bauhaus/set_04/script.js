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
  const tokens = `--bg: #fdfbf7;
--surface: #ffffff;
--surface-hover: #f7f2ea;
--border: #000000;
--primary: #b91c1c;
--primary-hover: #991b1b;
--secondary: #000000;
--accent: #475569;
--text: #000000;
--text-muted: #44403c;
--glow: rgba(185, 28, 28, 0.25);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Constructivist Red' color palette from 'Swiss Brutalist Bauhaus':
- Background: #fdfbf7
- Surface/Cards: #ffffff
- Primary Brand: #b91c1c
- Secondary: #000000
- Accent: #475569
- Main Text: #000000
- Muted Text: #44403c
- Border: #000000
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
