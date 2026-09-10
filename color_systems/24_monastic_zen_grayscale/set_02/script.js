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
--border: #d4d4d8;
--primary: #09090b;
--primary-hover: #18181b;
--secondary: #52525b;
--accent: #71717a;
--text: #09090b;
--text-muted: #71717a;
--glow: rgba(9, 9, 11, 0.15);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Gallery White Minimal' color palette from 'Monastic Zen Grayscale':
- Background: #ffffff
- Surface/Cards: #f4f4f5
- Primary Brand: #09090b
- Secondary: #52525b
- Accent: #71717a
- Main Text: #09090b
- Muted Text: #71717a
- Border: #d4d4d8
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
