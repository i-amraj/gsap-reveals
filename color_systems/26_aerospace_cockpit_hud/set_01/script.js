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
  const tokens = `--bg: #060503;
--surface: #141009;
--surface-hover: #211a0f;
--border: #332817;
--primary: #f59e0b;
--primary-hover: #fbbf24;
--secondary: #ef4444;
--accent: #38bdf8;
--text: #fffbeb;
--text-muted: #fde68a;
--glow: rgba(245, 158, 11, 0.45);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Tactical HUD Amber' color palette from 'Aerospace Cockpit HUD':
- Background: #060503
- Surface/Cards: #141009
- Primary Brand: #f59e0b
- Secondary: #ef4444
- Accent: #38bdf8
- Main Text: #fffbeb
- Muted Text: #fde68a
- Border: #332817
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
