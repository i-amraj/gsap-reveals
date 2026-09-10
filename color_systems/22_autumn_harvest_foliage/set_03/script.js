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
  const tokens = `--bg: #140a04;
--surface: #241309;
--surface-hover: #361d0f;
--border: #4f2b17;
--primary: #ea580c;
--primary-hover: #f97316;
--secondary: #facc15;
--accent: #dc2626;
--text: #fff7ed;
--text-muted: #fdba74;
--glow: rgba(234, 88, 12, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Pumpkin Spice Dark' color palette from 'Autumn Harvest Foliage':
- Background: #140a04
- Surface/Cards: #241309
- Primary Brand: #ea580c
- Secondary: #facc15
- Accent: #dc2626
- Main Text: #fff7ed
- Muted Text: #fdba74
- Border: #4f2b17
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
