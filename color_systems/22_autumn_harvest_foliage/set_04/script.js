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
  const tokens = `--bg: #191411;
--surface: #2b221d;
--surface-hover: #3d302a;
--border: #54433a;
--primary: #f59e0b;
--primary-hover: #fbbf24;
--secondary: #e7e5e4;
--accent: #b45309;
--text: #fafaf9;
--text-muted: #a8a29e;
--glow: rgba(245, 158, 11, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Chestnut Wood' color palette from 'Autumn Harvest Foliage':
- Background: #191411
- Surface/Cards: #2b221d
- Primary Brand: #f59e0b
- Secondary: #e7e5e4
- Accent: #b45309
- Main Text: #fafaf9
- Muted Text: #a8a29e
- Border: #54433a
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
