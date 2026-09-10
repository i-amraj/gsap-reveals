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
  const tokens = `--bg: #120824;
--surface: #220f42;
--surface-hover: #31165e;
--border: #472187;
--primary: #00f0ff;
--primary-hover: #38bdf8;
--secondary: #f43f5e;
--accent: #fbbf24;
--text: #ffffff;
--text-muted: #cbd5e1;
--glow: rgba(0, 240, 255, 0.45);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Ocean Drive Sunset' color palette from 'Sunset Miami Vice':
- Background: #120824
- Surface/Cards: #220f42
- Primary Brand: #00f0ff
- Secondary: #f43f5e
- Accent: #fbbf24
- Main Text: #ffffff
- Muted Text: #cbd5e1
- Border: #472187
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
