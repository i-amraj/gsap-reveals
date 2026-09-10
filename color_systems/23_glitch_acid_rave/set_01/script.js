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
  const tokens = `--bg: #050604;
--surface: #0e120b;
--surface-hover: #171d12;
--border: #232c1c;
--primary: #39ff14;
--primary-hover: #5cff3d;
--secondary: #a855f7;
--accent: #00f0ff;
--text: #ffffff;
--text-muted: #86efac;
--glow: rgba(57, 255, 20, 0.45);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Radioactive Lime' color palette from 'Glitch Acid Rave':
- Background: #050604
- Surface/Cards: #0e120b
- Primary Brand: #39ff14
- Secondary: #a855f7
- Accent: #00f0ff
- Main Text: #ffffff
- Muted Text: #86efac
- Border: #232c1c
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
