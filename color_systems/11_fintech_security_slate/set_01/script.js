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
  const tokens = `--bg: #0a0e1a;
--surface: #131a30;
--surface-hover: #1c2545;
--border: #25325c;
--primary: #10b981;
--primary-hover: #34d399;
--secondary: #38bdf8;
--accent: #6366f1;
--text: #f8fafc;
--text-muted: #94a3b8;
--glow: rgba(16, 185, 129, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Stripe Navy & Mint' color palette from 'Fintech Security Slate':
- Background: #0a0e1a
- Surface/Cards: #131a30
- Primary Brand: #10b981
- Secondary: #38bdf8
- Accent: #6366f1
- Main Text: #f8fafc
- Muted Text: #94a3b8
- Border: #25325c
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
