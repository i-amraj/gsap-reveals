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
  const tokens = `--bg: #facc15;
--surface: #ffffff;
--surface-hover: #fef9c3;
--border: #000000;
--primary: #a3e635;
--primary-hover: #bef264;
--secondary: #000000;
--accent: #ec4899;
--text: #000000;
--text-muted: #1e293b;
--glow: none;`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Electric Lime & Black' color palette from 'Neo-Brutalism Pop':
- Background: #facc15
- Surface/Cards: #ffffff
- Primary Brand: #a3e635
- Secondary: #000000
- Accent: #ec4899
- Main Text: #000000
- Muted Text: #1e293b
- Border: #000000
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
