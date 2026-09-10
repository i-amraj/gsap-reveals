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
  const tokens = `--bg: #120509;
--surface: #240a12;
--surface-hover: #36101c;
--border: #4f1929;
--primary: #e11d48;
--primary-hover: #f43f5e;
--secondary: #d97706;
--accent: #ffffff;
--text: #fff1f2;
--text-muted: #fda4af;
--glow: rgba(225, 29, 72, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Gilded Garnet' color palette from 'Regal Emerald Jewel':
- Background: #120509
- Surface/Cards: #240a12
- Primary Brand: #e11d48
- Secondary: #d97706
- Accent: #ffffff
- Main Text: #fff1f2
- Muted Text: #fda4af
- Border: #4f1929
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
