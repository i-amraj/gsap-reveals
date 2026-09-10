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
  const tokens = `--bg: #120608;
--surface: #240d11;
--surface-hover: #361319;
--border: #4f1c25;
--primary: #dc2626;
--primary-hover: #ef4444;
--secondary: #f59e0b;
--accent: #ea580c;
--text: #fff1f2;
--text-muted: #fca5a5;
--glow: rgba(220, 38, 38, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Maple Leaf Crimson' color palette from 'Autumn Harvest Foliage':
- Background: #120608
- Surface/Cards: #240d11
- Primary Brand: #dc2626
- Secondary: #f59e0b
- Accent: #ea580c
- Main Text: #fff1f2
- Muted Text: #fca5a5
- Border: #4f1c25
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
