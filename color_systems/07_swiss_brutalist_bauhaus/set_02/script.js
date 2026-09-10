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
  const tokens = `--bg: #f4f4f5;
--surface: #ffffff;
--surface-hover: #e4e4e7;
--border: #18181b;
--primary: #09090b;
--primary-hover: #27272a;
--secondary: #ef4444;
--accent: #3b82f6;
--text: #09090b;
--text-muted: #52525b;
--glow: rgba(9, 9, 11, 0.2);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Zurich Concrete' color palette from 'Swiss Brutalist Bauhaus':
- Background: #f4f4f5
- Surface/Cards: #ffffff
- Primary Brand: #09090b
- Secondary: #ef4444
- Accent: #3b82f6
- Main Text: #09090b
- Muted Text: #52525b
- Border: #18181b
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
