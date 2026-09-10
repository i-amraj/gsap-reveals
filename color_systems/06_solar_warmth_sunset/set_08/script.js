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
--primary: #dc2626;
--primary-hover: #b91c1c;
--secondary: #f59e0b;
--accent: #2563eb;
--text: #450a0a;
--text-muted: #991b1b;
--glow: rgba(220, 38, 38, 0.25);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Summer Heatwave' color palette from 'Solar Warmth Sunset':
- Background: #fff7ed
- Surface/Cards: #ffffff
- Primary Brand: #dc2626
- Secondary: #f59e0b
- Accent: #2563eb
- Main Text: #450a0a
- Muted Text: #991b1b
- Border: #fed7aa
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
