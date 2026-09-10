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
  const tokens = `--bg: #06070a;
--surface: #0f1118;
--surface-hover: #171a24;
--border: #1e293b;
--primary: #00f3ff;
--primary-hover: #38bdf8;
--secondary: #ff0055;
--accent: #39ff14;
--text: #f8fafc;
--text-muted: #94a3b8;
--glow: rgba(0, 243, 255, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Neon Voltage' color palette from 'Cyberpunk High Contrast':
- Background: #06070a
- Surface/Cards: #0f1118
- Primary Brand: #00f3ff
- Secondary: #ff0055
- Accent: #39ff14
- Main Text: #f8fafc
- Muted Text: #94a3b8
- Border: #1e293b
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
