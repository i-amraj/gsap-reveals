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
  const tokens = `--bg: #050505;
--surface: #141414;
--surface-hover: #222222;
--border: #333333;
--primary: #e11d48;
--primary-hover: #f43f5e;
--secondary: #fde047;
--accent: #ffffff;
--text: #ffffff;
--text-muted: #a3a3a3;
--glow: rgba(225, 29, 72, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Formula Velocity' color palette from 'Electric Sports Hyper':
- Background: #050505
- Surface/Cards: #141414
- Primary Brand: #e11d48
- Secondary: #fde047
- Accent: #ffffff
- Main Text: #ffffff
- Muted Text: #a3a3a3
- Border: #333333
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
