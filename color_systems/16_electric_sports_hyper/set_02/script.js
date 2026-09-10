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
  const tokens = `--bg: #09090b;
--surface: #18181b;
--surface-hover: #27272a;
--border: #3f3f46;
--primary: #ff5500;
--primary-hover: #ff7733;
--secondary: #38bdf8;
--accent: #facc15;
--text: #ffffff;
--text-muted: #a1a1aa;
--glow: rgba(255, 85, 0, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Speedway Orange' color palette from 'Electric Sports Hyper':
- Background: #09090b
- Surface/Cards: #18181b
- Primary Brand: #ff5500
- Secondary: #38bdf8
- Accent: #facc15
- Main Text: #ffffff
- Muted Text: #a1a1aa
- Border: #3f3f46
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
