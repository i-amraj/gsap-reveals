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
  const tokens = `--bg: #050512;
--surface: #0f0f26;
--surface-hover: #19193d;
--border: #262657;
--primary: #00f0ff;
--primary-hover: #38bdf8;
--secondary: #f43f5e;
--accent: #fde047;
--text: #ffffff;
--text-muted: #94a3b8;
--glow: rgba(0, 240, 255, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Outrun Laser Grid' color palette from 'Tokyo Night Synthwave':
- Background: #050512
- Surface/Cards: #0f0f26
- Primary Brand: #00f0ff
- Secondary: #f43f5e
- Accent: #fde047
- Main Text: #ffffff
- Muted Text: #94a3b8
- Border: #262657
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
