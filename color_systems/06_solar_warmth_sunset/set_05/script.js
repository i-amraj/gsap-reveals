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
--border: #fef08a;
--primary: #ca8a04;
--primary-hover: #a16207;
--secondary: #ea580c;
--accent: #eab308;
--text: #422006;
--text-muted: #713f12;
--glow: rgba(202, 138, 4, 0.25);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Warm Amber Honey' color palette from 'Solar Warmth Sunset':
- Background: #fefce8
- Surface/Cards: #ffffff
- Primary Brand: #ca8a04
- Secondary: #ea580c
- Accent: #eab308
- Main Text: #422006
- Muted Text: #713f12
- Border: #fef08a
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
