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
  const tokens = `--bg: #090919;
--surface: #141433;
--surface-hover: #1f1f4d;
--border: #2f2f6b;
--primary: #7e22ce;
--primary-hover: #9333ea;
--secondary: #f43f5e;
--accent: #fb923c;
--text: #f8fafc;
--text-muted: #94a3b8;
--glow: rgba(126, 34, 206, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Twilight Skyline' color palette from 'Solar Warmth Sunset':
- Background: #090919
- Surface/Cards: #141433
- Primary Brand: #7e22ce
- Secondary: #f43f5e
- Accent: #fb923c
- Main Text: #f8fafc
- Muted Text: #94a3b8
- Border: #2f2f6b
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
