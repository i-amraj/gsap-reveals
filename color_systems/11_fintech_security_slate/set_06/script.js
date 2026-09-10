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
  const tokens = `--bg: #040b14;
--surface: #09192c;
--surface-hover: #0e2642;
--border: #153a63;
--primary: #06b6d4;
--primary-hover: #22d3ee;
--secondary: #8b5cf6;
--accent: #10b981;
--text: #ecfeff;
--text-muted: #67e8f9;
--glow: rgba(6, 182, 212, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Crypto Cyan Ledger' color palette from 'Fintech Security Slate':
- Background: #040b14
- Surface/Cards: #09192c
- Primary Brand: #06b6d4
- Secondary: #8b5cf6
- Accent: #10b981
- Main Text: #ecfeff
- Muted Text: #67e8f9
- Border: #153a63
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
