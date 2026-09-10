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
  const tokens = `--bg: #f7faf6;
--surface: #ffffff;
--surface-hover: #eef5ed;
--border: #dbe8d8;
--primary: #3f6212;
--primary-hover: #365314;
--secondary: #c2410c;
--accent: #d97706;
--text: #1a2e05;
--text-muted: #4b5563;
--glow: rgba(63, 98, 18, 0.25);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Saguaro Oasis' color palette from 'Desert Dusk Canyon':
- Background: #f7faf6
- Surface/Cards: #ffffff
- Primary Brand: #3f6212
- Secondary: #c2410c
- Accent: #d97706
- Main Text: #1a2e05
- Muted Text: #4b5563
- Border: #dbe8d8
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
