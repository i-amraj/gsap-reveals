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
  const tokens = `--bg: #f0fdfa;
--surface: #ffffff;
--surface-hover: #ccfbf1;
--border: #99f6e4;
--primary: #0d9488;
--primary-hover: #0f766e;
--secondary: #134e4a;
--accent: #14b8a6;
--text: #042f2e;
--text-muted: #475569;
--glow: rgba(13, 148, 136, 0.25);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Eucalyptus Mist' color palette from 'Biophilic Organic Nature':
- Background: #f0fdfa
- Surface/Cards: #ffffff
- Primary Brand: #0d9488
- Secondary: #134e4a
- Accent: #14b8a6
- Main Text: #042f2e
- Muted Text: #475569
- Border: #99f6e4
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
