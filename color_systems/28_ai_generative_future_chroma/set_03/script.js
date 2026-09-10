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
  const tokens = `--bg: #020305;
--surface: #0a0c14;
--surface-hover: #121624;
--border: #1d2238;
--primary: #ffffff;
--primary-hover: #e2e8f0;
--secondary: #38bdf8;
--accent: #a855f7;
--text: #ffffff;
--text-muted: #94a3b8;
--glow: rgba(255, 255, 255, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Deep Space Void' color palette from 'AI Generative Future Chroma':
- Background: #020305
- Surface/Cards: #0a0c14
- Primary Brand: #ffffff
- Secondary: #38bdf8
- Accent: #a855f7
- Main Text: #ffffff
- Muted Text: #94a3b8
- Border: #1d2238
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
