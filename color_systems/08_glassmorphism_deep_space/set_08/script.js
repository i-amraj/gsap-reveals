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
  const tokens = `--bg: #08040d;
--surface: #170a29;
--surface-hover: #261142;
--border: #3a1963;
--primary: #e11d48;
--primary-hover: #f43f5e;
--secondary: #8b5cf6;
--accent: #fde047;
--text: #fff1f2;
--text-muted: #fbcfe8;
--glow: rgba(225, 29, 72, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Galactic Core' color palette from 'Glassmorphism Deep Space':
- Background: #08040d
- Surface/Cards: #170a29
- Primary Brand: #e11d48
- Secondary: #8b5cf6
- Accent: #fde047
- Main Text: #fff1f2
- Muted Text: #fbcfe8
- Border: #3a1963
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
