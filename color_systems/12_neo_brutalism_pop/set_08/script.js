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
  const tokens = `--bg: #ffffff;
--surface: #f4f4f5;
--surface-hover: #e4e4e7;
--border: #000000;
--primary: #22c55e;
--primary-hover: #4ade80;
--secondary: #ef4444;
--accent: #3b82f6;
--text: #000000;
--text-muted: #27272a;
--glow: none;`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Radioactive Ultra' color palette from 'Neo-Brutalism Pop':
- Background: #ffffff
- Surface/Cards: #f4f4f5
- Primary Brand: #22c55e
- Secondary: #ef4444
- Accent: #3b82f6
- Main Text: #000000
- Muted Text: #27272a
- Border: #000000
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
