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
  const tokens = `--bg: #0f0c29;
--surface: #1a163d;
--surface-hover: #262054;
--border: #352d70;
--primary: #a855f7;
--primary-hover: #c084fc;
--secondary: #ec4899;
--accent: #06b6d4;
--text: #f8fafc;
--text-muted: #94a3b8;
--glow: rgba(168, 85, 247, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Shibuya Midnight' color palette from 'Tokyo Night Synthwave':
- Background: #0f0c29
- Surface/Cards: #1a163d
- Primary Brand: #a855f7
- Secondary: #ec4899
- Accent: #06b6d4
- Main Text: #f8fafc
- Muted Text: #94a3b8
- Border: #352d70
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
