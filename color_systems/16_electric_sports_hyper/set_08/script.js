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
  const tokens = `--bg: #ffffff;
--surface: #f4f4f5;
--surface-hover: #e4e4e7;
--border: #000000;
--primary: #000000;
--primary-hover: #27272a;
--secondary: #ff3300;
--accent: #3b82f6;
--text: #000000;
--text-muted: #3f3f46;
--glow: rgba(0, 0, 0, 0.2);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Iron Gym Minimal' color palette from 'Electric Sports Hyper':
- Background: #ffffff
- Surface/Cards: #f4f4f5
- Primary Brand: #000000
- Secondary: #ff3300
- Accent: #3b82f6
- Main Text: #000000
- Muted Text: #3f3f46
- Border: #000000
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
