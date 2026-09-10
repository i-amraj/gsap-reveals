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
  const tokens = `--bg: #170f09;
--surface: #291b12;
--surface-hover: #3b271a;
--border: #543725;
--primary: #ea580c;
--primary-hover: #f97316;
--secondary: #14b8a6;
--accent: #facc15;
--text: #fff7ed;
--text-muted: #fdba74;
--glow: rgba(234, 88, 12, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Steam Boiler Room' color palette from 'Steampunk Industrial Copper':
- Background: #170f09
- Surface/Cards: #291b12
- Primary Brand: #ea580c
- Secondary: #14b8a6
- Accent: #facc15
- Main Text: #fff7ed
- Muted Text: #fdba74
- Border: #543725
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
