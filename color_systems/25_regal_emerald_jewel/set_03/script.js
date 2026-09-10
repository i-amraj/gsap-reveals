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
  const tokens = `--bg: #03081a;
--surface: #0a173d;
--surface-hover: #10255e;
--border: #193687;
--primary: #3b82f6;
--primary-hover: #60a5fa;
--secondary: #d4af37;
--accent: #38bdf8;
--text: #eff6ff;
--text-muted: #bfdbfe;
--glow: rgba(59, 130, 246, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Royal Sapphire Night' color palette from 'Regal Emerald Jewel':
- Background: #03081a
- Surface/Cards: #0a173d
- Primary Brand: #3b82f6
- Secondary: #d4af37
- Accent: #38bdf8
- Main Text: #eff6ff
- Muted Text: #bfdbfe
- Border: #193687
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
