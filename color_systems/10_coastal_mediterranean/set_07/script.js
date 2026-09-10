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
  const tokens = `--bg: #fefce8;
--surface: #ffffff;
--surface-hover: #fef9c3;
--border: #fde047;
--primary: #eab308;
--primary-hover: #ca8a04;
--secondary: #0284c7;
--accent: #16a34a;
--text: #422006;
--text-muted: #713f12;
--glow: rgba(234, 179, 8, 0.25);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Capri Lemon Coast' color palette from 'Coastal Mediterranean':
- Background: #fefce8
- Surface/Cards: #ffffff
- Primary Brand: #eab308
- Secondary: #0284c7
- Accent: #16a34a
- Main Text: #422006
- Muted Text: #713f12
- Border: #fde047
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
