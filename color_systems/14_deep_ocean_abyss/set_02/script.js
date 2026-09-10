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
  const tokens = `--bg: #030b17;
--surface: #091c36;
--surface-hover: #0f2b52;
--border: #163f75;
--primary: #f43f5e;
--primary-hover: #fb7185;
--secondary: #06b6d4;
--accent: #facc15;
--text: #ffffff;
--text-muted: #94a3b8;
--glow: rgba(244, 63, 94, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Bioluminescent Coral' color palette from 'Deep Ocean Abyss':
- Background: #030b17
- Surface/Cards: #091c36
- Primary Brand: #f43f5e
- Secondary: #06b6d4
- Accent: #facc15
- Main Text: #ffffff
- Muted Text: #94a3b8
- Border: #163f75
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
