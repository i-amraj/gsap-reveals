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
  const tokens = `--bg: #f0fdfa;
--surface: #ffffff;
--surface-hover: #ccfbf1;
--border: #99f6e4;
--primary: #0284c7;
--primary-hover: #0369a1;
--secondary: #0f172a;
--accent: #f43f5e;
--text: #0c4a6e;
--text-muted: #475569;
--glow: rgba(2, 132, 199, 0.25);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Aerobic Cyan Light' color palette from 'Electric Sports Hyper':
- Background: #f0fdfa
- Surface/Cards: #ffffff
- Primary Brand: #0284c7
- Secondary: #0f172a
- Accent: #f43f5e
- Main Text: #0c4a6e
- Muted Text: #475569
- Border: #99f6e4
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
