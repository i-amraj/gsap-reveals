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
  const tokens = `--bg: #0a0304;
--surface: #1a080a;
--surface-hover: #2a0d11;
--border: #42151b;
--primary: #ff0055;
--primary-hover: #ff3377;
--secondary: #00f3ff;
--accent: #ffe600;
--text: #ffffff;
--text-muted: #fda4af;
--glow: rgba(255, 0, 85, 0.45);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Infrared Rave' color palette from 'Glitch Acid Rave':
- Background: #0a0304
- Surface/Cards: #1a080a
- Primary Brand: #ff0055
- Secondary: #00f3ff
- Accent: #ffe600
- Main Text: #ffffff
- Muted Text: #fda4af
- Border: #42151b
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
