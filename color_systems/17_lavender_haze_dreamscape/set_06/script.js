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
  const tokens = `--bg: #f5f3ff;
--surface: #ffffff;
--surface-hover: #ede9fe;
--border: #ddd6fe;
--primary: #6366f1;
--primary-hover: #4f46e5;
--secondary: #0d9488;
--accent: #ec4899;
--text: #1e1b4b;
--text-muted: #4338ca;
--glow: rgba(99, 102, 241, 0.25);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Soft Iris Calm' color palette from 'Lavender Haze Dreamscape':
- Background: #f5f3ff
- Surface/Cards: #ffffff
- Primary Brand: #6366f1
- Secondary: #0d9488
- Accent: #ec4899
- Main Text: #1e1b4b
- Muted Text: #4338ca
- Border: #ddd6fe
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
