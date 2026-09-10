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
  const tokens = `--bg: #030712;
--surface: #0c152e;
--surface-hover: #142247;
--border: #1d3269;
--primary: #38bdf8;
--primary-hover: #7dd3fc;
--secondary: #34d399;
--accent: #818cf8;
--text: #f8fafc;
--text-muted: #94a3b8;
--glow: rgba(56, 189, 248, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Cosmic Aurora' color palette from 'Glassmorphism Deep Space':
- Background: #030712
- Surface/Cards: #0c152e
- Primary Brand: #38bdf8
- Secondary: #34d399
- Accent: #818cf8
- Main Text: #f8fafc
- Muted Text: #94a3b8
- Border: #1d3269
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
