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
  const tokens = `--bg: #fafafa;
--surface: #ffffff;
--surface-hover: #f4f4f5;
--border: #e4e4e7;
--primary: #15803d;
--primary-hover: #166534;
--secondary: #b45309;
--accent: #475569;
--text: #09090b;
--text-muted: #52525b;
--glow: rgba(21, 128, 61, 0.2);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Tuscan Marble' color palette from 'Luxury Editorial Monochrome':
- Background: #fafafa
- Surface/Cards: #ffffff
- Primary Brand: #15803d
- Secondary: #b45309
- Accent: #475569
- Main Text: #09090b
- Muted Text: #52525b
- Border: #e4e4e7
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
