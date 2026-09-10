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
  const tokens = `--bg: #fafcf8;
--surface: #ffffff;
--surface-hover: #f2f7ed;
--border: #deebcf;
--primary: #16a34a;
--primary-hover: #15803d;
--secondary: #22c55e;
--accent: #84cc16;
--text: #14532d;
--text-muted: #4b5563;
--glow: rgba(22, 163, 74, 0.25);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Bamboo Grove' color palette from 'Biophilic Organic Nature':
- Background: #fafcf8
- Surface/Cards: #ffffff
- Primary Brand: #16a34a
- Secondary: #22c55e
- Accent: #84cc16
- Main Text: #14532d
- Muted Text: #4b5563
- Border: #deebcf
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
