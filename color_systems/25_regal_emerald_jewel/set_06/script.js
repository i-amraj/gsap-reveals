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
  const tokens = `--bg: #090b14;
--surface: #12172b;
--surface-hover: #1b2240;
--border: #273159;
--primary: #06b6d4;
--primary-hover: #22d3ee;
--secondary: #f59e0b;
--accent: #a855f7;
--text: #f0fdfa;
--text-muted: #99f6e4;
--glow: rgba(6, 182, 212, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Topaz & Midnight' color palette from 'Regal Emerald Jewel':
- Background: #090b14
- Surface/Cards: #12172b
- Primary Brand: #06b6d4
- Secondary: #f59e0b
- Accent: #a855f7
- Main Text: #f0fdfa
- Muted Text: #99f6e4
- Border: #273159
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
