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
  const tokens = `--bg: #040507;
--surface: #0c0d12;
--surface-hover: #14161f;
--border: #1e212e;
--primary: #e2e8f0;
--primary-hover: #ffffff;
--secondary: #f59e0b;
--accent: #ef4444;
--text: #ffffff;
--text-muted: #94a3b8;
--glow: rgba(226, 232, 240, 0.3);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Stealth Bomber Noir' color palette from 'Aerospace Cockpit HUD':
- Background: #040507
- Surface/Cards: #0c0d12
- Primary Brand: #e2e8f0
- Secondary: #f59e0b
- Accent: #ef4444
- Main Text: #ffffff
- Muted Text: #94a3b8
- Border: #1e212e
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
