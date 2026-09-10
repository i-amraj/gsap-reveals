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
  const tokens = `--bg: #0f1115;
--surface: #191c24;
--surface-hover: #242833;
--border: #313745;
--primary: #f8fafc;
--primary-hover: #ffffff;
--secondary: #94a3b8;
--accent: #64748b;
--text: #f8fafc;
--text-muted: #94a3b8;
--glow: rgba(248, 250, 252, 0.2);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Graphite Slate' color palette from 'Monastic Zen Grayscale':
- Background: #0f1115
- Surface/Cards: #191c24
- Primary Brand: #f8fafc
- Secondary: #94a3b8
- Accent: #64748b
- Main Text: #f8fafc
- Muted Text: #94a3b8
- Border: #313745
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
