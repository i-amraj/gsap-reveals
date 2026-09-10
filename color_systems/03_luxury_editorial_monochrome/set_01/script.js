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
  const tokens = `--bg: #0a0a0a;
--surface: #141414;
--surface-hover: #1f1f1f;
--border: #2a2a2a;
--primary: #d4af37;
--primary-hover: #f5d061;
--secondary: #f5f5f4;
--accent: #e5e5e5;
--text: #fafaf9;
--text-muted: #a8a29e;
--glow: rgba(212, 175, 55, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Onyx & Champagne' color palette from 'Luxury Editorial Monochrome':
- Background: #0a0a0a
- Surface/Cards: #141414
- Primary Brand: #d4af37
- Secondary: #f5f5f4
- Accent: #e5e5e5
- Main Text: #fafaf9
- Muted Text: #a8a29e
- Border: #2a2a2a
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
