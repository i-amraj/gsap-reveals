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
  const tokens = `--bg: #17140d;
--surface: #262116;
--surface-hover: #362f20;
--border: #4f4530;
--primary: #ca8a04;
--primary-hover: #eab308;
--secondary: #fafaf9;
--accent: #dc2626;
--text: #fefce8;
--text-muted: #fef08a;
--glow: rgba(202, 138, 4, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Aged Brass Clockwork' color palette from 'Steampunk Industrial Copper':
- Background: #17140d
- Surface/Cards: #262116
- Primary Brand: #ca8a04
- Secondary: #fafaf9
- Accent: #dc2626
- Main Text: #fefce8
- Muted Text: #fef08a
- Border: #4f4530
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
