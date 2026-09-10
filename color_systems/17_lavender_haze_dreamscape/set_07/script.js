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
  const tokens = `--bg: #0a0717;
--surface: #171033;
--surface-hover: #251a52;
--border: #39287a;
--primary: #818cf8;
--primary-hover: #a5b4fc;
--secondary: #34d399;
--accent: #f472b6;
--text: #f8fafc;
--text-muted: #c7d2fe;
--glow: rgba(129, 140, 248, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Celestial Lilac' color palette from 'Lavender Haze Dreamscape':
- Background: #0a0717
- Surface/Cards: #171033
- Primary Brand: #818cf8
- Secondary: #34d399
- Accent: #f472b6
- Main Text: #f8fafc
- Muted Text: #c7d2fe
- Border: #39287a
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
