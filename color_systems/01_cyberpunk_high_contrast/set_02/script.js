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
--surface: #141417;
--surface-hover: #1f1f24;
--border: #27272a;
--primary: #a3e635;
--primary-hover: #bef264;
--secondary: #7c3aed;
--accent: #38bdf8;
--text: #fafafa;
--text-muted: #a1a1aa;
--glow: rgba(163, 230, 53, 0.3);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Acid Night' color palette from 'Cyberpunk High Contrast':
- Background: #09090b
- Surface/Cards: #141417
- Primary Brand: #a3e635
- Secondary: #7c3aed
- Accent: #38bdf8
- Main Text: #fafafa
- Muted Text: #a1a1aa
- Border: #27272a
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
