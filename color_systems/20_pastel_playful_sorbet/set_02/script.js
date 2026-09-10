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
  const tokens = `--bg: #fff7ed;
--surface: #ffffff;
--surface-hover: #ffedd5;
--border: #fed7aa;
--primary: #ea580c;
--primary-hover: #c2410c;
--secondary: #ec4899;
--accent: #ca8a04;
--text: #431407;
--text-muted: #7c2d12;
--glow: rgba(234, 88, 12, 0.2);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Peach Sorbet' color palette from 'Pastel Playful Sorbet':
- Background: #fff7ed
- Surface/Cards: #ffffff
- Primary Brand: #ea580c
- Secondary: #ec4899
- Accent: #ca8a04
- Main Text: #431407
- Muted Text: #7c2d12
- Border: #fed7aa
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
