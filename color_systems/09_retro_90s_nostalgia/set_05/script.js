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
  const tokens = `--bg: #180a1c;
--surface: #2e1236;
--surface-hover: #421a4f;
--border: #612773;
--primary: #a855f7;
--primary-hover: #c084fc;
--secondary: #a3e635;
--accent: #ec4899;
--text: #ffffff;
--text-muted: #e9d5ff;
--glow: rgba(168, 85, 247, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'MTV Acid Wave' color palette from 'Retro 90s Nostalgia':
- Background: #180a1c
- Surface/Cards: #2e1236
- Primary Brand: #a855f7
- Secondary: #a3e635
- Accent: #ec4899
- Main Text: #ffffff
- Muted Text: #e9d5ff
- Border: #612773
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
