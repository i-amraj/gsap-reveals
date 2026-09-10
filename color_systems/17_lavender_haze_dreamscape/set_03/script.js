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
  const tokens = `--bg: #120e1a;
--surface: #211a30;
--surface-hover: #302645;
--border: #453761;
--primary: #e879f9;
--primary-hover: #f0abfc;
--secondary: #818cf8;
--accent: #fbbf24;
--text: #ffffff;
--text-muted: #cbd5e1;
--glow: rgba(232, 121, 249, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Dusk Mauve Mist' color palette from 'Lavender Haze Dreamscape':
- Background: #120e1a
- Surface/Cards: #211a30
- Primary Brand: #e879f9
- Secondary: #818cf8
- Accent: #fbbf24
- Main Text: #ffffff
- Muted Text: #cbd5e1
- Border: #453761
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
