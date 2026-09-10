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
  const tokens = `--bg: #140a26;
--surface: #22113f;
--surface-hover: #311a59;
--border: #432578;
--primary: #f97316;
--primary-hover: #fb923c;
--secondary: #fb7185;
--accent: #c084fc;
--text: #fff1f2;
--text-muted: #cbd5e1;
--glow: rgba(249, 115, 22, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Tangerine Twilight' color palette from 'Tokyo Night Synthwave':
- Background: #140a26
- Surface/Cards: #22113f
- Primary Brand: #f97316
- Secondary: #fb7185
- Accent: #c084fc
- Main Text: #fff1f2
- Muted Text: #cbd5e1
- Border: #432578
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
