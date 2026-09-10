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
  const tokens = `--bg: #080614;
--surface: #130f2e;
--surface-hover: #1e1747;
--border: #2c2266;
--primary: #a855f7;
--primary-hover: #c084fc;
--secondary: #06b6d4;
--accent: #34d399;
--text: #ffffff;
--text-muted: #c4b5fd;
--glow: rgba(168, 85, 247, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Genomics Violet' color palette from 'Clinical Clean Healthtech':
- Background: #080614
- Surface/Cards: #130f2e
- Primary Brand: #a855f7
- Secondary: #06b6d4
- Accent: #34d399
- Main Text: #ffffff
- Muted Text: #c4b5fd
- Border: #2c2266
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
