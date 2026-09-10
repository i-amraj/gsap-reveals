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
  const tokens = `--bg: #fffbf5;
--surface: #ffffff;
--surface-hover: #fef3e7;
--border: #fed7aa;
--primary: #ea580c;
--primary-hover: #c2410c;
--secondary: #f59e0b;
--accent: #e11d48;
--text: #431407;
--text-muted: #9a3412;
--glow: rgba(234, 88, 12, 0.25);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Golden Dusk Light' color palette from 'Solar Warmth Sunset':
- Background: #fffbf5
- Surface/Cards: #ffffff
- Primary Brand: #ea580c
- Secondary: #f59e0b
- Accent: #e11d48
- Main Text: #431407
- Muted Text: #9a3412
- Border: #fed7aa
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
