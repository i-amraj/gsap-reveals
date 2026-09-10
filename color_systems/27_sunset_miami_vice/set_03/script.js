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
  const tokens = `--bg: #031412;
--surface: #072623;
--surface-hover: #0c3833;
--border: #13524b;
--primary: #10b981;
--primary-hover: #34d399;
--secondary: #ec4899;
--accent: #f59e0b;
--text: #f0fdfa;
--text-muted: #99f6e4;
--glow: rgba(16, 185, 129, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Palm Beach Emerald' color palette from 'Sunset Miami Vice':
- Background: #031412
- Surface/Cards: #072623
- Primary Brand: #10b981
- Secondary: #ec4899
- Accent: #f59e0b
- Main Text: #f0fdfa
- Muted Text: #99f6e4
- Border: #13524b
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
