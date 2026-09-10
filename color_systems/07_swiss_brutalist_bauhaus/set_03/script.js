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
--surface-hover: #eff6ff;
--border: #000000;
--primary: #2563eb;
--primary-hover: #1d4ed8;
--secondary: #000000;
--accent: #dc2626;
--text: #000000;
--text-muted: #334155;
--glow: rgba(37, 99, 235, 0.25);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'International Blue' color palette from 'Swiss Brutalist Bauhaus':
- Background: #ffffff
- Surface/Cards: #f8fafc
- Primary Brand: #2563eb
- Secondary: #000000
- Accent: #dc2626
- Main Text: #000000
- Muted Text: #334155
- Border: #000000
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
