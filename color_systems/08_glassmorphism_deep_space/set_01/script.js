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
  const tokens = `--bg: #050510;
--surface: #0f0f26;
--surface-hover: #18183d;
--border: #272754;
--primary: #a855f7;
--primary-hover: #c084fc;
--secondary: #38bdf8;
--accent: #ec4899;
--text: #f8fafc;
--text-muted: #94a3b8;
--glow: rgba(168, 85, 247, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Nebula Violet' color palette from 'Glassmorphism Deep Space':
- Background: #050510
- Surface/Cards: #0f0f26
- Primary Brand: #a855f7
- Secondary: #38bdf8
- Accent: #ec4899
- Main Text: #f8fafc
- Muted Text: #94a3b8
- Border: #272754
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
