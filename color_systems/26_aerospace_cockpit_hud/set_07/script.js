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
  const tokens = `--bg: #040914;
--surface: #0a1730;
--surface-hover: #102347;
--border: #173469;
--primary: #3b82f6;
--primary-hover: #60a5fa;
--secondary: #10b981;
--accent: #facc15;
--text: #eff6ff;
--text-muted: #93c5fd;
--glow: rgba(59, 130, 246, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Mission Control Blue' color palette from 'Aerospace Cockpit HUD':
- Background: #040914
- Surface/Cards: #0a1730
- Primary Brand: #3b82f6
- Secondary: #10b981
- Accent: #facc15
- Main Text: #eff6ff
- Muted Text: #93c5fd
- Border: #173469
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
