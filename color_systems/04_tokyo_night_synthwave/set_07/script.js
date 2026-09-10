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
  const tokens = `--bg: #05060d;
--surface: #0f1224;
--surface-hover: #171c36;
--border: #222a4f;
--primary: #00ff87;
--primary-hover: #4ade80;
--secondary: #60efff;
--accent: #ec4899;
--text: #ffffff;
--text-muted: #94a3b8;
--glow: rgba(0, 255, 135, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Neon Arcade 88' color palette from 'Tokyo Night Synthwave':
- Background: #05060d
- Surface/Cards: #0f1224
- Primary Brand: #00ff87
- Secondary: #60efff
- Accent: #ec4899
- Main Text: #ffffff
- Muted Text: #94a3b8
- Border: #222a4f
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
