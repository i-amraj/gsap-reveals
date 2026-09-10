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
  const tokens = `--bg: #bae6fd;
--surface: #ffffff;
--surface-hover: #f0f9ff;
--border: #000000;
--primary: #0284c7;
--primary-hover: #0369a1;
--secondary: #f43f5e;
--accent: #fde047;
--text: #000000;
--text-muted: #334155;
--glow: none;`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Cyan Shockwave' color palette from 'Neo-Brutalism Pop':
- Background: #bae6fd
- Surface/Cards: #ffffff
- Primary Brand: #0284c7
- Secondary: #f43f5e
- Accent: #fde047
- Main Text: #000000
- Muted Text: #334155
- Border: #000000
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
