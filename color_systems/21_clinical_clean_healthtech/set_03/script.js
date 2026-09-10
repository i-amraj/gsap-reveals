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
  const tokens = `--bg: #050b14;
--surface: #0c182a;
--surface-hover: #132540;
--border: #1c375e;
--primary: #38bdf8;
--primary-hover: #7dd3fc;
--secondary: #34d399;
--accent: #818cf8;
--text: #f0f9ff;
--text-muted: #bae6fd;
--glow: rgba(56, 189, 248, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Lab Biotech Dark' color palette from 'Clinical Clean Healthtech':
- Background: #050b14
- Surface/Cards: #0c182a
- Primary Brand: #38bdf8
- Secondary: #34d399
- Accent: #818cf8
- Main Text: #f0f9ff
- Muted Text: #bae6fd
- Border: #1c375e
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
