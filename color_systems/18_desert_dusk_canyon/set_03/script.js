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
  const tokens = `--bg: #170b19;
--surface: #29132d;
--surface-hover: #3c1c42;
--border: #57295f;
--primary: #f43f5e;
--primary-hover: #fb7185;
--secondary: #fbbf24;
--accent: #38bdf8;
--text: #ffffff;
--text-muted: #e2e8f0;
--glow: rgba(244, 63, 94, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Canyon Twilight' color palette from 'Desert Dusk Canyon':
- Background: #170b19
- Surface/Cards: #29132d
- Primary Brand: #f43f5e
- Secondary: #fbbf24
- Accent: #38bdf8
- Main Text: #ffffff
- Muted Text: #e2e8f0
- Border: #57295f
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
