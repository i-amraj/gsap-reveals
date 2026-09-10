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
  const tokens = `--bg: #0c0a08;
--surface: #1c1713;
--surface-hover: #2a231d;
--border: #3d322a;
--primary: #fbbf24;
--primary-hover: #fde047;
--secondary: #10b981;
--accent: #f97316;
--text: #ffffff;
--text-muted: #d6d3d1;
--glow: rgba(251, 191, 36, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Irish Coffee Cream' color palette from 'Dark Coffee Warm Latte':
- Background: #0c0a08
- Surface/Cards: #1c1713
- Primary Brand: #fbbf24
- Secondary: #10b981
- Accent: #f97316
- Main Text: #ffffff
- Muted Text: #d6d3d1
- Border: #3d322a
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
