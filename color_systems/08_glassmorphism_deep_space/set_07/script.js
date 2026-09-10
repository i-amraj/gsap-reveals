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
  const tokens = `--bg: #060913;
--surface: #0f162e;
--surface-hover: #172347;
--border: #213366;
--primary: #06b6d4;
--primary-hover: #22d3ee;
--secondary: #8b5cf6;
--accent: #10b981;
--text: #f0fdfa;
--text-muted: #99f6e4;
--glow: rgba(6, 182, 212, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Quantum Horizon' color palette from 'Glassmorphism Deep Space':
- Background: #060913
- Surface/Cards: #0f162e
- Primary Brand: #06b6d4
- Secondary: #8b5cf6
- Accent: #10b981
- Main Text: #f0fdfa
- Muted Text: #99f6e4
- Border: #213366
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
