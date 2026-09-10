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
  const tokens = `--bg: #e5e5e5;
--surface: #ffffff;
--surface-hover: #f5f5f5;
--border: #171717;
--primary: #171717;
--primary-hover: #262626;
--secondary: #737373;
--accent: #404040;
--text: #171717;
--text-muted: #525252;
--glow: rgba(23, 23, 23, 0.15);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Cast Concrete Brutal' color palette from 'Monastic Zen Grayscale':
- Background: #e5e5e5
- Surface/Cards: #ffffff
- Primary Brand: #171717
- Secondary: #737373
- Accent: #404040
- Main Text: #171717
- Muted Text: #525252
- Border: #171717
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
