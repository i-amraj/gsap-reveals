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
  const tokens = `--bg: #060812;
--surface: #0f142b;
--surface-hover: #171f42;
--border: #232e61;
--primary: #6366f1;
--primary-hover: #818cf8;
--secondary: #00ff87;
--accent: #ff007f;
--text: #ffffff;
--text-muted: #c7d2fe;
--glow: rgba(99, 102, 241, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Sub-Bass Shocker' color palette from 'Glitch Acid Rave':
- Background: #060812
- Surface/Cards: #0f142b
- Primary Brand: #6366f1
- Secondary: #00ff87
- Accent: #ff007f
- Main Text: #ffffff
- Muted Text: #c7d2fe
- Border: #232e61
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
