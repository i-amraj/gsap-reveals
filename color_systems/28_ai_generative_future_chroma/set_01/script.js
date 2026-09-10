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
  const tokens = `--bg: #07090e;
--surface: #0f1422;
--surface-hover: #171e33;
--border: #222c4a;
--primary: #38bdf8;
--primary-hover: #7dd3fc;
--secondary: #a855f7;
--accent: #f43f5e;
--text: #f8fafc;
--text-muted: #94a3b8;
--glow: rgba(56, 189, 248, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Prismatic Shimmer' color palette from 'AI Generative Future Chroma':
- Background: #07090e
- Surface/Cards: #0f1422
- Primary Brand: #38bdf8
- Secondary: #a855f7
- Accent: #f43f5e
- Main Text: #f8fafc
- Muted Text: #94a3b8
- Border: #222c4a
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
