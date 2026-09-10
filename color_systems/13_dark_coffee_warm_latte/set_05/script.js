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
  const tokens = `--bg: #fbf8f5;
--surface: #ffffff;
--surface-hover: #f4ecdf;
--border: #e5d5be;
--primary: #9a3412;
--primary-hover: #7c2d12;
--secondary: #451a03;
--accent: #ca8a04;
--text: #1c1917;
--text-muted: #78716c;
--glow: rgba(154, 52, 18, 0.2);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Hazelnut Praline' color palette from 'Dark Coffee Warm Latte':
- Background: #fbf8f5
- Surface/Cards: #ffffff
- Primary Brand: #9a3412
- Secondary: #451a03
- Accent: #ca8a04
- Main Text: #1c1917
- Muted Text: #78716c
- Border: #e5d5be
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
