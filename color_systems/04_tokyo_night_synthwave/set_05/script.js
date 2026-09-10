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
  const tokens = `--bg: #090d16;
--surface: #131b2e;
--surface-hover: #1c2742;
--border: #27385e;
--primary: #38bdf8;
--primary-hover: #7dd3fc;
--secondary: #c084fc;
--accent: #f43f5e;
--text: #f8fafc;
--text-muted: #94a3b8;
--glow: rgba(56, 189, 248, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Shinjuku Rain' color palette from 'Tokyo Night Synthwave':
- Background: #090d16
- Surface/Cards: #131b2e
- Primary Brand: #38bdf8
- Secondary: #c084fc
- Accent: #f43f5e
- Main Text: #f8fafc
- Muted Text: #94a3b8
- Border: #27385e
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
