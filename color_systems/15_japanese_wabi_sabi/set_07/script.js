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
  const tokens = `--bg: #0e0e11;
--surface: #1a1a21;
--surface-hover: #262630;
--border: #373745;
--primary: #f59e0b;
--primary-hover: #fbbf24;
--secondary: #fafaf9;
--accent: #d97706;
--text: #ffffff;
--text-muted: #a8a29e;
--glow: rgba(245, 158, 11, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Kintsugi Gold Fracture' color palette from 'Japanese Wabi-Sabi':
- Background: #0e0e11
- Surface/Cards: #1a1a21
- Primary Brand: #f59e0b
- Secondary: #fafaf9
- Accent: #d97706
- Main Text: #ffffff
- Muted Text: #a8a29e
- Border: #373745
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
