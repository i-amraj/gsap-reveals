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
--border: #000000;
--primary: #dc2626;
--primary-hover: #b91c1c;
--secondary: #2563eb;
--accent: #facc15;
--text: #000000;
--text-muted: #262626;
--glow: rgba(220, 38, 38, 0.25);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'De Stijl Quad' color palette from 'Swiss Brutalist Bauhaus':
- Background: #fafafa
- Surface/Cards: #ffffff
- Primary Brand: #dc2626
- Secondary: #2563eb
- Accent: #facc15
- Main Text: #000000
- Muted Text: #262626
- Border: #000000
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
