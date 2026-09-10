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
  const tokens = `--bg: #09090b;
--surface: #181416;
--surface-hover: #261c20;
--border: #3f1c24;
--primary: #dc2626;
--primary-hover: #ef4444;
--secondary: #fbbf24;
--accent: #22d3ee;
--text: #fafafa;
--text-muted: #a1a1aa;
--glow: rgba(220, 38, 38, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Cyber Redline' color palette from 'Cyberpunk High Contrast':
- Background: #09090b
- Surface/Cards: #181416
- Primary Brand: #dc2626
- Secondary: #fbbf24
- Accent: #22d3ee
- Main Text: #fafafa
- Muted Text: #a1a1aa
- Border: #3f1c24
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
