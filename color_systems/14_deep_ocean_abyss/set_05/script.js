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
  const tokens = `--bg: #011612;
--surface: #032922;
--surface-hover: #053d33;
--border: #075447;
--primary: #10b981;
--primary-hover: #34d399;
--secondary: #06b6d4;
--accent: #84cc16;
--text: #ecfdf5;
--text-muted: #a7f3d0;
--glow: rgba(16, 185, 129, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Submarine Sonar' color palette from 'Deep Ocean Abyss':
- Background: #011612
- Surface/Cards: #032922
- Primary Brand: #10b981
- Secondary: #06b6d4
- Accent: #84cc16
- Main Text: #ecfdf5
- Muted Text: #a7f3d0
- Border: #075447
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
