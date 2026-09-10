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
  const tokens = `--bg: #fdf8f4;
--surface: #ffffff;
--surface-hover: #fceddf;
--border: #fad8c0;
--primary: #c2410c;
--primary-hover: #9a3412;
--secondary: #0369a1;
--accent: #d97706;
--text: #431407;
--text-muted: #78350f;
--glow: rgba(194, 65, 12, 0.25);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Terracotta Sunset Coast' color palette from 'Coastal Mediterranean':
- Background: #fdf8f4
- Surface/Cards: #ffffff
- Primary Brand: #c2410c
- Secondary: #0369a1
- Accent: #d97706
- Main Text: #431407
- Muted Text: #78350f
- Border: #fad8c0
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
