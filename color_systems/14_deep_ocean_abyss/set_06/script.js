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
  const tokens = `--bg: #080617;
--surface: #140e36;
--surface-hover: #1e1552;
--border: #2d2078;
--primary: #c084fc;
--primary-hover: #d8b4fe;
--secondary: #22d3ee;
--accent: #f472b6;
--text: #ffffff;
--text-muted: #cbd5e1;
--glow: rgba(192, 132, 252, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Jellyfish Glow' color palette from 'Deep Ocean Abyss':
- Background: #080617
- Surface/Cards: #140e36
- Primary Brand: #c084fc
- Secondary: #22d3ee
- Accent: #f472b6
- Main Text: #ffffff
- Muted Text: #cbd5e1
- Border: #2d2078
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
