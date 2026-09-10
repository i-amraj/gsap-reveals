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
  const tokens = `--bg: #02070a;
--surface: #06151f;
--surface-hover: #0a2233;
--border: #0f334d;
--primary: #00f3ff;
--primary-hover: #38bdf8;
--secondary: #ff0055;
--accent: #39ff14;
--text: #ffffff;
--text-muted: #7dd3fc;
--glow: rgba(0, 243, 255, 0.45);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Cyan Toxic Strobe' color palette from 'Glitch Acid Rave':
- Background: #02070a
- Surface/Cards: #06151f
- Primary Brand: #00f3ff
- Secondary: #ff0055
- Accent: #39ff14
- Main Text: #ffffff
- Muted Text: #7dd3fc
- Border: #0f334d
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
