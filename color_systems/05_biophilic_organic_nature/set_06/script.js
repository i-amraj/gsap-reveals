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
  const tokens = `--bg: #041a16;
--surface: #092e27;
--surface-hover: #0e4238;
--border: #15594c;
--primary: #10b981;
--primary-hover: #34d399;
--secondary: #2dd4bf;
--accent: #fb923c;
--text: #ecfdf5;
--text-muted: #a7f3d0;
--glow: rgba(16, 185, 129, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Ocean Kelp' color palette from 'Biophilic Organic Nature':
- Background: #041a16
- Surface/Cards: #092e27
- Primary Brand: #10b981
- Secondary: #2dd4bf
- Accent: #fb923c
- Main Text: #ecfdf5
- Muted Text: #a7f3d0
- Border: #15594c
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
