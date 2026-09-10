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
  const tokens = `--bg: #faf7f2;
--surface: #ffffff;
--surface-hover: #f3eee5;
--border: #e4dbcc;
--primary: #78350f;
--primary-hover: #92400e;
--secondary: #3f6212;
--accent: #b45309;
--text: #291508;
--text-muted: #574230;
--glow: rgba(120, 53, 15, 0.2);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Dry Pine Cone' color palette from 'Autumn Harvest Foliage':
- Background: #faf7f2
- Surface/Cards: #ffffff
- Primary Brand: #78350f
- Secondary: #3f6212
- Accent: #b45309
- Main Text: #291508
- Muted Text: #574230
- Border: #e4dbcc
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
