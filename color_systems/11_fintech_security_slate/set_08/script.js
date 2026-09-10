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
  const tokens = `--bg: #090a0f;
--surface: #141724;
--surface-hover: #1d2236;
--border: #2a314d;
--primary: #f59e0b;
--primary-hover: #fbbf24;
--secondary: #10b981;
--accent: #38bdf8;
--text: #ffffff;
--text-muted: #94a3b8;
--glow: rgba(245, 158, 11, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Gold Reserve' color palette from 'Fintech Security Slate':
- Background: #090a0f
- Surface/Cards: #141724
- Primary Brand: #f59e0b
- Secondary: #10b981
- Accent: #38bdf8
- Main Text: #ffffff
- Muted Text: #94a3b8
- Border: #2a314d
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
