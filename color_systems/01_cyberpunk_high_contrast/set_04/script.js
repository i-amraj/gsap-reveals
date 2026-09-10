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
  const tokens = `--bg: #050505;
--surface: #121212;
--surface-hover: #1c1c1c;
--border: #262626;
--primary: #22c55e;
--primary-hover: #4ade80;
--secondary: #06b6d4;
--accent: #ef4444;
--text: #ffffff;
--text-muted: #a3a3a3;
--glow: rgba(34, 197, 94, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Glitch Void' color palette from 'Cyberpunk High Contrast':
- Background: #050505
- Surface/Cards: #121212
- Primary Brand: #22c55e
- Secondary: #06b6d4
- Accent: #ef4444
- Main Text: #ffffff
- Muted Text: #a3a3a3
- Border: #262626
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
