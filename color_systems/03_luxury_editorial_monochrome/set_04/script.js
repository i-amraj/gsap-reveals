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
  const tokens = `--bg: #050507;
--surface: #0d0e14;
--surface-hover: #171822;
--border: #212230;
--primary: #f59e0b;
--primary-hover: #fbbf24;
--secondary: #fef3c7;
--accent: #d97706;
--text: #ffffff;
--text-muted: #9ca3af;
--glow: rgba(245, 158, 11, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Imperial Noir' color palette from 'Luxury Editorial Monochrome':
- Background: #050507
- Surface/Cards: #0d0e14
- Primary Brand: #f59e0b
- Secondary: #fef3c7
- Accent: #d97706
- Main Text: #ffffff
- Muted Text: #9ca3af
- Border: #212230
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
