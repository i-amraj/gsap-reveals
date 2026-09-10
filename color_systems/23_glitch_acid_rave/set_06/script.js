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
  const tokens = `--bg: #000000;
--surface: #111111;
--surface-hover: #1c1c1c;
--border: #282828;
--primary: #ffffff;
--primary-hover: #e5e5e5;
--secondary: #39ff14;
--accent: #ff0055;
--text: #ffffff;
--text-muted: #a3a3a3;
--glow: rgba(255, 255, 255, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Glitch Static Void' color palette from 'Glitch Acid Rave':
- Background: #000000
- Surface/Cards: #111111
- Primary Brand: #ffffff
- Secondary: #39ff14
- Accent: #ff0055
- Main Text: #ffffff
- Muted Text: #a3a3a3
- Border: #282828
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
