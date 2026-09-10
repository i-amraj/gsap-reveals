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
  const tokens = `--bg: #f8fafc;
--surface: #ffffff;
--surface-hover: #f1f5f9;
--border: #1e3a8a;
--primary: #1d4ed8;
--primary-hover: #1e40af;
--secondary: #ea580c;
--accent: #000000;
--text: #0f172a;
--text-muted: #475569;
--glow: rgba(29, 78, 216, 0.25);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Ultramarine Bold' color palette from 'Swiss Brutalist Bauhaus':
- Background: #f8fafc
- Surface/Cards: #ffffff
- Primary Brand: #1d4ed8
- Secondary: #ea580c
- Accent: #000000
- Main Text: #0f172a
- Muted Text: #475569
- Border: #1e3a8a
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
