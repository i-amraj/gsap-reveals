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
  const tokens = `--bg: #030712;
--surface: #0f172a;
--surface-hover: #1e293b;
--border: #1f2937;
--primary: #f43f5e;
--primary-hover: #fb7185;
--secondary: #f59e0b;
--accent: #06b6d4;
--text: #f9fafb;
--text-muted: #9ca3af;
--glow: rgba(244, 63, 94, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Hot Overdrive' color palette from 'Cyberpunk High Contrast':
- Background: #030712
- Surface/Cards: #0f172a
- Primary Brand: #f43f5e
- Secondary: #f59e0b
- Accent: #06b6d4
- Main Text: #f9fafb
- Muted Text: #9ca3af
- Border: #1f2937
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
