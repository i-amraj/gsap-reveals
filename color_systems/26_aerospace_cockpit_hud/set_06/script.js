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
  const tokens = `--bg: #0a0203;
--surface: #1a0609;
--surface-hover: #290a0f;
--border: #3d0f17;
--primary: #ef4444;
--primary-hover: #f87171;
--secondary: #f59e0b;
--accent: #38bdf8;
--text: #fff1f2;
--text-muted: #fca5a5;
--glow: rgba(239, 68, 68, 0.45);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Fighter Cockpit Red' color palette from 'Aerospace Cockpit HUD':
- Background: #0a0203
- Surface/Cards: #1a0609
- Primary Brand: #ef4444
- Secondary: #f59e0b
- Accent: #38bdf8
- Main Text: #fff1f2
- Muted Text: #fca5a5
- Border: #3d0f17
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
