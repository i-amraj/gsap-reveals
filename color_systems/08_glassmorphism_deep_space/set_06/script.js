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
  const tokens = `--bg: #0b0704;
--surface: #1c1109;
--surface-hover: #2e1c10;
--border: #472c1a;
--primary: #f59e0b;
--primary-hover: #fbbf24;
--secondary: #f43f5e;
--accent: #06b6d4;
--text: #fffbeb;
--text-muted: #fde68a;
--glow: rgba(245, 158, 11, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Supernova Amber' color palette from 'Glassmorphism Deep Space':
- Background: #0b0704
- Surface/Cards: #1c1109
- Primary Brand: #f59e0b
- Secondary: #f43f5e
- Accent: #06b6d4
- Main Text: #fffbeb
- Muted Text: #fde68a
- Border: #472c1a
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
