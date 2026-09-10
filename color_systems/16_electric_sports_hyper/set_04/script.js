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
  const tokens = `--bg: #080304;
--surface: #17080a;
--surface-hover: #260e12;
--border: #3d171c;
--primary: #ef4444;
--primary-hover: #f87171;
--secondary: #facc15;
--accent: #38bdf8;
--text: #ffffff;
--text-muted: #fca5a5;
--glow: rgba(239, 68, 68, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Turbo Crimson' color palette from 'Electric Sports Hyper':
- Background: #080304
- Surface/Cards: #17080a
- Primary Brand: #ef4444
- Secondary: #facc15
- Accent: #38bdf8
- Main Text: #ffffff
- Muted Text: #fca5a5
- Border: #3d171c
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
