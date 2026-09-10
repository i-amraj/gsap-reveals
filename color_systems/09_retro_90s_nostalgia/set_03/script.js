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
  const tokens = `--bg: #05060a;
--surface: #121424;
--surface-hover: #1c203b;
--border: #282e54;
--primary: #facc15;
--primary-hover: #fde047;
--secondary: #ef4444;
--accent: #00f3ff;
--text: #ffffff;
--text-muted: #94a3b8;
--glow: rgba(250, 204, 21, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Arcade 1992' color palette from 'Retro 90s Nostalgia':
- Background: #05060a
- Surface/Cards: #121424
- Primary Brand: #facc15
- Secondary: #ef4444
- Accent: #00f3ff
- Main Text: #ffffff
- Muted Text: #94a3b8
- Border: #282e54
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
