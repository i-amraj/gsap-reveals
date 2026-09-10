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
  const tokens = `--bg: #f1f5f9;
--surface: #ffffff;
--surface-hover: #e2e8f0;
--border: #cbd5e1;
--primary: #334155;
--primary-hover: #1e293b;
--secondary: #64748b;
--accent: #94a3b8;
--text: #0f172a;
--text-muted: #64748b;
--glow: rgba(51, 65, 85, 0.15);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Architectural Cool Gray' color palette from 'Monastic Zen Grayscale':
- Background: #f1f5f9
- Surface/Cards: #ffffff
- Primary Brand: #334155
- Secondary: #64748b
- Accent: #94a3b8
- Main Text: #0f172a
- Muted Text: #64748b
- Border: #cbd5e1
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
