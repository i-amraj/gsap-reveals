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
  const tokens = `--bg: #020804;
--surface: #05170b;
--surface-hover: #092412;
--border: #0e381c;
--primary: #22c55e;
--primary-hover: #4ade80;
--secondary: #facc15;
--accent: #00f0ff;
--text: #f0fdf4;
--text-muted: #86efac;
--glow: rgba(34, 197, 94, 0.45);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Phosphor Radar Green' color palette from 'Aerospace Cockpit HUD':
- Background: #020804
- Surface/Cards: #05170b
- Primary Brand: #22c55e
- Secondary: #facc15
- Accent: #00f0ff
- Main Text: #f0fdf4
- Muted Text: #86efac
- Border: #0e381c
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
