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
  const tokens = `--bg: #141416;
--surface: #202024;
--surface-hover: #2c2c33;
--border: #3d3d47;
--primary: #e2e8f0;
--primary-hover: #ffffff;
--secondary: #84cc16;
--accent: #f43f5e;
--text: #fafafa;
--text-muted: #a1a1aa;
--glow: rgba(226, 232, 240, 0.25);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Kyoto Twilight Dark' color palette from 'Japanese Wabi-Sabi':
- Background: #141416
- Surface/Cards: #202024
- Primary Brand: #e2e8f0
- Secondary: #84cc16
- Accent: #f43f5e
- Main Text: #fafafa
- Muted Text: #a1a1aa
- Border: #3d3d47
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
