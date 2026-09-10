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
  const tokens = `--bg: #05060d;
--surface: #0e1124;
--surface-hover: #161b38;
--border: #222a54;
--primary: #818cf8;
--primary-hover: #a5b4fc;
--secondary: #34d399;
--accent: #f472b6;
--text: #ffffff;
--text-muted: #cbd5e1;
--glow: rgba(129, 140, 248, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Holographic Aurora' color palette from 'AI Generative Future Chroma':
- Background: #05060d
- Surface/Cards: #0e1124
- Primary Brand: #818cf8
- Secondary: #34d399
- Accent: #f472b6
- Main Text: #ffffff
- Muted Text: #cbd5e1
- Border: #222a54
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
