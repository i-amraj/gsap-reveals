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
  const tokens = `--bg: #0d0603;
--surface: #1e0e07;
--surface-hover: #2e160b;
--border: #452211;
--primary: #ff5500;
--primary-hover: #ff7733;
--secondary: #a855f7;
--accent: #00f0ff;
--text: #ffffff;
--text-muted: #fed7aa;
--glow: rgba(255, 85, 0, 0.45);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Laser Rave Orange' color palette from 'Glitch Acid Rave':
- Background: #0d0603
- Surface/Cards: #1e0e07
- Primary Brand: #ff5500
- Secondary: #a855f7
- Accent: #00f0ff
- Main Text: #ffffff
- Muted Text: #fed7aa
- Border: #452211
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
