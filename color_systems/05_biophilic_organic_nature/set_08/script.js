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
  const tokens = `--bg: #022014;
--surface: #053622;
--surface-hover: #084d31;
--border: #0d6642;
--primary: #22c55e;
--primary-hover: #4ade80;
--secondary: #38bdf8;
--accent: #facc15;
--text: #f0fdf4;
--text-muted: #86efac;
--glow: rgba(34, 197, 94, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Rainforest Deep' color palette from 'Biophilic Organic Nature':
- Background: #022014
- Surface/Cards: #053622
- Primary Brand: #22c55e
- Secondary: #38bdf8
- Accent: #facc15
- Main Text: #f0fdf4
- Muted Text: #86efac
- Border: #0d6642
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
