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
  const tokens = `--bg: #021c14;
--surface: #063828;
--surface-hover: #0a4f3a;
--border: #0f6148;
--primary: #10b981;
--primary-hover: #34d399;
--secondary: #84cc16;
--accent: #67e8f9;
--text: #ecfdf5;
--text-muted: #a7f3d0;
--glow: rgba(16, 185, 129, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Emerald Matrix' color palette from 'Cyberpunk High Contrast':
- Background: #021c14
- Surface/Cards: #063828
- Primary Brand: #10b981
- Secondary: #84cc16
- Accent: #67e8f9
- Main Text: #ecfdf5
- Muted Text: #a7f3d0
- Border: #0f6148
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
