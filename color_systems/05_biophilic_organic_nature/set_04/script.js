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
  const tokens = `--bg: #0f1710;
--surface: #19261b;
--surface-hover: #233626;
--border: #314b35;
--primary: #84cc16;
--primary-hover: #a3e635;
--secondary: #f59e0b;
--accent: #38bdf8;
--text: #f0fdf4;
--text-muted: #86efac;
--glow: rgba(132, 204, 22, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Autumn Woodland Dark' color palette from 'Biophilic Organic Nature':
- Background: #0f1710
- Surface/Cards: #19261b
- Primary Brand: #84cc16
- Secondary: #f59e0b
- Accent: #38bdf8
- Main Text: #f0fdf4
- Muted Text: #86efac
- Border: #314b35
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
