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
  const tokens = `--bg: #0a0414;
--surface: #180a2e;
--surface-hover: #261147;
--border: #391a6b;
--primary: #a855f7;
--primary-hover: #c084fc;
--secondary: #fbbf24;
--accent: #ec4899;
--text: #faf5ff;
--text-muted: #e9d5ff;
--glow: rgba(168, 85, 247, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Amethyst Crown' color palette from 'Regal Emerald Jewel':
- Background: #0a0414
- Surface/Cards: #180a2e
- Primary Brand: #a855f7
- Secondary: #fbbf24
- Accent: #ec4899
- Main Text: #faf5ff
- Muted Text: #e9d5ff
- Border: #391a6b
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
