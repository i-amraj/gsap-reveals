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
  const tokens = `--bg: #0d131a;
--surface: #17212e;
--surface-hover: #212f42;
--border: #2e415c;
--primary: #38bdf8;
--primary-hover: #7dd3fc;
--secondary: #ea580c;
--accent: #fde047;
--text: #f8fafc;
--text-muted: #94a3b8;
--glow: rgba(56, 189, 248, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'November Frost' color palette from 'Autumn Harvest Foliage':
- Background: #0d131a
- Surface/Cards: #17212e
- Primary Brand: #38bdf8
- Secondary: #ea580c
- Accent: #fde047
- Main Text: #f8fafc
- Muted Text: #94a3b8
- Border: #2e415c
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
