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
  const tokens = `--bg: #e4e4e7;
--surface: #ffffff;
--surface-hover: #f4f4f5;
--border: #000000;
--primary: #000000;
--primary-hover: #27272a;
--secondary: #facc15;
--accent: #dc2626;
--text: #000000;
--text-muted: #3f3f46;
--glow: rgba(0, 0, 0, 0.3);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Brutalist Hard Edge' color palette from 'Swiss Brutalist Bauhaus':
- Background: #e4e4e7
- Surface/Cards: #ffffff
- Primary Brand: #000000
- Secondary: #facc15
- Accent: #dc2626
- Main Text: #000000
- Muted Text: #3f3f46
- Border: #000000
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
