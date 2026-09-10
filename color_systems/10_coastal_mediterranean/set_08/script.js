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
  const tokens = `--bg: #080c1a;
--surface: #121936;
--surface-hover: #1a254f;
--border: #273670;
--primary: #60a5fa;
--primary-hover: #93c5fd;
--secondary: #f472b6;
--accent: #34d399;
--text: #ffffff;
--text-muted: #94a3b8;
--glow: rgba(96, 165, 250, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Midnight Riviera' color palette from 'Coastal Mediterranean':
- Background: #080c1a
- Surface/Cards: #121936
- Primary Brand: #60a5fa
- Secondary: #f472b6
- Accent: #34d399
- Main Text: #ffffff
- Muted Text: #94a3b8
- Border: #273670
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
