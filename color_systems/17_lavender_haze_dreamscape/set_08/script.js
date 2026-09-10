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
  const tokens = `--bg: #100c1e;
--surface: #1d1736;
--surface-hover: #2b224f;
--border: #3e3270;
--primary: #d8b4fe;
--primary-hover: #e9d5ff;
--secondary: #38bdf8;
--accent: #fde047;
--text: #ffffff;
--text-muted: #a78bfa;
--glow: rgba(216, 180, 254, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Frosted Lavender Glass' color palette from 'Lavender Haze Dreamscape':
- Background: #100c1e
- Surface/Cards: #1d1736
- Primary Brand: #d8b4fe
- Secondary: #38bdf8
- Accent: #fde047
- Main Text: #ffffff
- Muted Text: #a78bfa
- Border: #3e3270
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
