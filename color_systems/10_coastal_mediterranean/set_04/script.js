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
  const tokens = `--bg: #051324;
--surface: #0a2240;
--surface-hover: #0e315c;
--border: #154785;
--primary: #38bdf8;
--primary-hover: #7dd3fc;
--secondary: #fb923c;
--accent: #34d399;
--text: #f0f9ff;
--text-muted: #bae6fd;
--glow: rgba(56, 189, 248, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Aegean Night Dark' color palette from 'Coastal Mediterranean':
- Background: #051324
- Surface/Cards: #0a2240
- Primary Brand: #38bdf8
- Secondary: #fb923c
- Accent: #34d399
- Main Text: #f0f9ff
- Muted Text: #bae6fd
- Border: #154785
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
