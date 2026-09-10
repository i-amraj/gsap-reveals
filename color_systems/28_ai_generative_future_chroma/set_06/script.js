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
  const tokens = `--bg: #0b0e14;
--surface: #151b26;
--surface-hover: #1e2738;
--border: #2b374f;
--primary: #e2e8f0;
--primary-hover: #ffffff;
--secondary: #3b82f6;
--accent: #f97316;
--text: #ffffff;
--text-muted: #94a3b8;
--glow: rgba(226, 232, 240, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Cybernetic Chrome' color palette from 'AI Generative Future Chroma':
- Background: #0b0e14
- Surface/Cards: #151b26
- Primary Brand: #e2e8f0
- Secondary: #3b82f6
- Accent: #f97316
- Main Text: #ffffff
- Muted Text: #94a3b8
- Border: #2b374f
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
