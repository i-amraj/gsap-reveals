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
  const tokens = `--bg: #080c14;
--surface: #121929;
--surface-hover: #1c263e;
--border: #283759;
--primary: #0066ff;
--primary-hover: #3385ff;
--secondary: #00ffcc;
--accent: #ffffff;
--text: #ffffff;
--text-muted: #94a3b8;
--glow: rgba(0, 102, 255, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Carbon Hyper Blue' color palette from 'Electric Sports Hyper':
- Background: #080c14
- Surface/Cards: #121929
- Primary Brand: #0066ff
- Secondary: #00ffcc
- Accent: #ffffff
- Main Text: #ffffff
- Muted Text: #94a3b8
- Border: #283759
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
