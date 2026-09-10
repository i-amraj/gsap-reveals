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
  const tokens = `--bg: #fff7f7;
--surface: #ffffff;
--surface-hover: #feeef0;
--border: #fed7dc;
--primary: #f43f5e;
--primary-hover: #e11d48;
--secondary: #0284c7;
--accent: #ca8a04;
--text: #4c0519;
--text-muted: #9f1239;
--glow: rgba(244, 63, 94, 0.25);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Coral Glitz 86' color palette from 'Sunset Miami Vice':
- Background: #fff7f7
- Surface/Cards: #ffffff
- Primary Brand: #f43f5e
- Secondary: #0284c7
- Accent: #ca8a04
- Main Text: #4c0519
- Muted Text: #9f1239
- Border: #fed7dc
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
