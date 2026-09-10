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
  const tokens = `--bg: #f0fdf4;
--surface: #ffffff;
--surface-hover: #dcfce7;
--border: #bbf7d0;
--primary: #16a34a;
--primary-hover: #15803d;
--secondary: #0ea5e9;
--accent: #f43f5e;
--text: #14532d;
--text-muted: #4b5563;
--glow: rgba(22, 163, 74, 0.2);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Pistachio Gelato' color palette from 'Pastel Playful Sorbet':
- Background: #f0fdf4
- Surface/Cards: #ffffff
- Primary Brand: #16a34a
- Secondary: #0ea5e9
- Accent: #f43f5e
- Main Text: #14532d
- Muted Text: #4b5563
- Border: #bbf7d0
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
