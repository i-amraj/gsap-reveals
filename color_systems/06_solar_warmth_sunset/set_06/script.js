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
  const tokens = `--bg: #0a0314;
--surface: #17082e;
--surface-hover: #240d47;
--border: #391570;
--primary: #d946ef;
--primary-hover: #e879f9;
--secondary: #f97316;
--accent: #38bdf8;
--text: #ffffff;
--text-muted: #cbd5e1;
--glow: rgba(217, 70, 239, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Burning Eclipse' color palette from 'Solar Warmth Sunset':
- Background: #0a0314
- Surface/Cards: #17082e
- Primary Brand: #d946ef
- Secondary: #f97316
- Accent: #38bdf8
- Main Text: #ffffff
- Muted Text: #cbd5e1
- Border: #391570
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
