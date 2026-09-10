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
  const tokens = `--bg: #14110e;
--surface: #26201b;
--surface-hover: #382f27;
--border: #4f4236;
--primary: #f59e0b;
--primary-hover: #fbbf24;
--secondary: #38bdf8;
--accent: #ef4444;
--text: #fafaf9;
--text-muted: #a8a29e;
--glow: rgba(245, 158, 11, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Cassette Gold' color palette from 'Retro 90s Nostalgia':
- Background: #14110e
- Surface/Cards: #26201b
- Primary Brand: #f59e0b
- Secondary: #38bdf8
- Accent: #ef4444
- Main Text: #fafaf9
- Muted Text: #a8a29e
- Border: #4f4236
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
