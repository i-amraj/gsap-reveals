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
  const tokens = `--bg: #f9fcf8;
--surface: #ffffff;
--surface-hover: #f0f6ed;
--border: #dce8d5;
--primary: #4d7c0f;
--primary-hover: #3f6212;
--secondary: #78350f;
--accent: #d97706;
--text: #1c1917;
--text-muted: #57534e;
--glow: rgba(77, 124, 15, 0.25);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Matcha Coffee Fusion' color palette from 'Dark Coffee Warm Latte':
- Background: #f9fcf8
- Surface/Cards: #ffffff
- Primary Brand: #4d7c0f
- Secondary: #78350f
- Accent: #d97706
- Main Text: #1c1917
- Muted Text: #57534e
- Border: #dce8d5
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
