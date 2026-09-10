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
  const tokens = `--bg: #faf7f0;
--surface: #ffffff;
--surface-hover: #f4edd9;
--border: #e8d8be;
--primary: #78350f;
--primary-hover: #92400e;
--secondary: #0f766e;
--accent: #b45309;
--text: #291508;
--text-muted: #785838;
--glow: rgba(120, 53, 15, 0.2);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Antique Parchment Light' color palette from 'Steampunk Industrial Copper':
- Background: #faf7f0
- Surface/Cards: #ffffff
- Primary Brand: #78350f
- Secondary: #0f766e
- Accent: #b45309
- Main Text: #291508
- Muted Text: #785838
- Border: #e8d8be
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
