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
  const tokens = `--bg: #fcfaff;
--surface: #ffffff;
--surface-hover: #f5eeff;
--border: #eddcfc;
--primary: #7c3aed;
--primary-hover: #6d28d9;
--secondary: #06b6d4;
--accent: #f43f5e;
--text: #2e1065;
--text-muted: #6b21a8;
--glow: rgba(124, 58, 237, 0.25);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Lilac Dream Silk' color palette from 'Lavender Haze Dreamscape':
- Background: #fcfaff
- Surface/Cards: #ffffff
- Primary Brand: #7c3aed
- Secondary: #06b6d4
- Accent: #f43f5e
- Main Text: #2e1065
- Muted Text: #6b21a8
- Border: #eddcfc
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
