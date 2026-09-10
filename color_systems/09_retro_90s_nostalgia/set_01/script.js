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
  const tokens = `--bg: #120826;
--surface: #221145;
--surface-hover: #311861;
--border: #49268f;
--primary: #00f0ff;
--primary-hover: #38bdf8;
--secondary: #ff007f;
--accent: #ffe600;
--text: #ffffff;
--text-muted: #cbd5e1;
--glow: rgba(0, 240, 255, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Vaporwave Sunset' color palette from 'Retro 90s Nostalgia':
- Background: #120826
- Surface/Cards: #221145
- Primary Brand: #00f0ff
- Secondary: #ff007f
- Accent: #ffe600
- Main Text: #ffffff
- Muted Text: #cbd5e1
- Border: #49268f
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
