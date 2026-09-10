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
  const tokens = `--bg: #140408;
--surface: #260a11;
--surface-hover: #3b101b;
--border: #541727;
--primary: #f43f5e;
--primary-hover: #fb7185;
--secondary: #f59e0b;
--accent: #fde047;
--text: #fff1f2;
--text-muted: #fecdd3;
--glow: rgba(244, 63, 94, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Ruby Port & Gold' color palette from 'Regal Emerald Jewel':
- Background: #140408
- Surface/Cards: #260a11
- Primary Brand: #f43f5e
- Secondary: #f59e0b
- Accent: #fde047
- Main Text: #fff1f2
- Muted Text: #fecdd3
- Border: #541727
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
