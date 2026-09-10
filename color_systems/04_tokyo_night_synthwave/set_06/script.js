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
  const tokens = `--bg: #12081f;
--surface: #200e36;
--surface-hover: #2f164d;
--border: #43216d;
--primary: #fb923c;
--primary-hover: #fdba74;
--secondary: #e879f9;
--accent: #38bdf8;
--text: #ffffff;
--text-muted: #cbd5e1;
--glow: rgba(251, 146, 60, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Cyber Sunset Horizon' color palette from 'Tokyo Night Synthwave':
- Background: #12081f
- Surface/Cards: #200e36
- Primary Brand: #fb923c
- Secondary: #e879f9
- Accent: #38bdf8
- Main Text: #ffffff
- Muted Text: #cbd5e1
- Border: #43216d
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
