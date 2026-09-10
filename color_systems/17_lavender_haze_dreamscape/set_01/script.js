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
  const tokens = `--bg: #0d0b17;
--surface: #18142a;
--surface-hover: #251f40;
--border: #362e5c;
--primary: #c084fc;
--primary-hover: #d8b4fe;
--secondary: #38bdf8;
--accent: #f472b6;
--text: #faf5ff;
--text-muted: #c4b5fd;
--glow: rgba(192, 132, 252, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Amethyst Dusk' color palette from 'Lavender Haze Dreamscape':
- Background: #0d0b17
- Surface/Cards: #18142a
- Primary Brand: #c084fc
- Secondary: #38bdf8
- Accent: #f472b6
- Main Text: #faf5ff
- Muted Text: #c4b5fd
- Border: #362e5c
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
