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
  const tokens = `--bg: #a7f3d0;
--surface: #ffffff;
--surface-hover: #ecfdf5;
--border: #000000;
--primary: #10b981;
--primary-hover: #34d399;
--secondary: #000000;
--accent: #ec4899;
--text: #000000;
--text-muted: #334155;
--glow: none;`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Mint Blast' color palette from 'Neo-Brutalism Pop':
- Background: #a7f3d0
- Surface/Cards: #ffffff
- Primary Brand: #10b981
- Secondary: #000000
- Accent: #ec4899
- Main Text: #000000
- Muted Text: #334155
- Border: #000000
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
