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
  const tokens = `--bg: #fcfbf7;
--surface: #ffffff;
--surface-hover: #f5f3eb;
--border: #e5e2d5;
--primary: #1c1917;
--primary-hover: #0c0a09;
--secondary: #78716c;
--accent: #dc2626;
--text: #1c1917;
--text-muted: #57534e;
--glow: rgba(28, 25, 23, 0.2);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Sumi Ink & Linen' color palette from 'Japanese Wabi-Sabi':
- Background: #fcfbf7
- Surface/Cards: #ffffff
- Primary Brand: #1c1917
- Secondary: #78716c
- Accent: #dc2626
- Main Text: #1c1917
- Muted Text: #57534e
- Border: #e5e2d5
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
