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
--surface: #111116;
--surface-hover: #1a1a24;
--border: #282836;
--primary: #ffffff;
--primary-hover: #e2e8f0;
--secondary: #6366f1;
--accent: #a855f7;
--text: #ffffff;
--text-muted: #94a3b8;
--glow: rgba(255, 255, 255, 0.3);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Starlight Void' color palette from 'Glassmorphism Deep Space':
- Background: #000000
- Surface/Cards: #111116
- Primary Brand: #ffffff
- Secondary: #6366f1
- Accent: #a855f7
- Main Text: #ffffff
- Muted Text: #94a3b8
- Border: #282836
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
