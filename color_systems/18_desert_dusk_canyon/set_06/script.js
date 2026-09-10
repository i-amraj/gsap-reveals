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
  const tokens = `--bg: #0c0812;
--surface: #181124;
--surface-hover: #251a38;
--border: #36264f;
--primary: #fb923c;
--primary-hover: #fdba74;
--secondary: #a855f7;
--accent: #2dd4bf;
--text: #ffffff;
--text-muted: #cbd5e1;
--glow: rgba(251, 146, 60, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Sonoran Dusk Dark' color palette from 'Desert Dusk Canyon':
- Background: #0c0812
- Surface/Cards: #181124
- Primary Brand: #fb923c
- Secondary: #a855f7
- Accent: #2dd4bf
- Main Text: #ffffff
- Muted Text: #cbd5e1
- Border: #36264f
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
