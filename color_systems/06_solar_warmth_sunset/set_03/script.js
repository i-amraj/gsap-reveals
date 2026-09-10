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
  const tokens = `--bg: #180c14;
--surface: #2a1523;
--surface-hover: #3c1e33;
--border: #542b47;
--primary: #f43f5e;
--primary-hover: #fb7185;
--secondary: #a855f7;
--accent: #fbbf24;
--text: #ffffff;
--text-muted: #e2e8f0;
--glow: rgba(244, 63, 94, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Desert Mirage' color palette from 'Solar Warmth Sunset':
- Background: #180c14
- Surface/Cards: #2a1523
- Primary Brand: #f43f5e
- Secondary: #a855f7
- Accent: #fbbf24
- Main Text: #ffffff
- Muted Text: #e2e8f0
- Border: #542b47
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
