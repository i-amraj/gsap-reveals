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
  const tokens = `--bg: #fffaf5;
--surface: #ffffff;
--surface-hover: #fdefdf;
--border: #fadac0;
--primary: #9a3412;
--primary-hover: #7c2d12;
--secondary: #0284c7;
--accent: #d97706;
--text: #451a03;
--text-muted: #78350f;
--glow: rgba(154, 52, 18, 0.25);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Navajo Sandstone' color palette from 'Desert Dusk Canyon':
- Background: #fffaf5
- Surface/Cards: #ffffff
- Primary Brand: #9a3412
- Secondary: #0284c7
- Accent: #d97706
- Main Text: #451a03
- Muted Text: #78350f
- Border: #fadac0
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
