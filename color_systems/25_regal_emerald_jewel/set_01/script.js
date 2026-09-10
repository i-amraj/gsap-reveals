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
  const tokens = `--bg: #021c14;
--surface: #053627;
--surface-hover: #084d37;
--border: #0d664a;
--primary: #10b981;
--primary-hover: #34d399;
--secondary: #d4af37;
--accent: #38bdf8;
--text: #ecfdf5;
--text-muted: #a7f3d0;
--glow: rgba(16, 185, 129, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Imperial Emerald' color palette from 'Regal Emerald Jewel':
- Background: #021c14
- Surface/Cards: #053627
- Primary Brand: #10b981
- Secondary: #d4af37
- Accent: #38bdf8
- Main Text: #ecfdf5
- Muted Text: #a7f3d0
- Border: #0d664a
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
