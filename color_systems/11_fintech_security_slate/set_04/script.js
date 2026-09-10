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
  const tokens = `--bg: #06090e;
--surface: #0f1422;
--surface-hover: #171e33;
--border: #222c4a;
--primary: #22c55e;
--primary-hover: #4ade80;
--secondary: #ef4444;
--accent: #38bdf8;
--text: #ffffff;
--text-muted: #94a3b8;
--glow: rgba(34, 197, 94, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Trading Floor Dark' color palette from 'Fintech Security Slate':
- Background: #06090e
- Surface/Cards: #0f1422
- Primary Brand: #22c55e
- Secondary: #ef4444
- Accent: #38bdf8
- Main Text: #ffffff
- Muted Text: #94a3b8
- Border: #222c4a
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
