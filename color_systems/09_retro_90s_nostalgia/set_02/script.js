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
  const tokens = `--bg: #fff5f7;
--surface: #ffffff;
--surface-hover: #fce7ee;
--border: #fbcfe8;
--primary: #ec4899;
--primary-hover: #db2777;
--secondary: #06b6d4;
--accent: #facc15;
--text: #831843;
--text-muted: #be185d;
--glow: rgba(236, 72, 153, 0.3);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Bubblegum Pop Light' color palette from 'Retro 90s Nostalgia':
- Background: #fff5f7
- Surface/Cards: #ffffff
- Primary Brand: #ec4899
- Secondary: #06b6d4
- Accent: #facc15
- Main Text: #831843
- Muted Text: #be185d
- Border: #fbcfe8
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
