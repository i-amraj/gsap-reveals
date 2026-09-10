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
  const tokens = `--bg: #f8fafc;
--surface: #ffffff;
--surface-hover: #eff6ff;
--border: #dbeafe;
--primary: #1e40af;
--primary-hover: #1d4ed8;
--secondary: #0f172a;
--accent: #d97706;
--text: #0f172a;
--text-muted: #475569;
--glow: rgba(30, 64, 175, 0.25);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Royal Institutional' color palette from 'Fintech Security Slate':
- Background: #f8fafc
- Surface/Cards: #ffffff
- Primary Brand: #1e40af
- Secondary: #0f172a
- Accent: #d97706
- Main Text: #0f172a
- Muted Text: #475569
- Border: #dbeafe
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
