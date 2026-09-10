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
  const tokens = `--bg: #0a0a0c;
--surface: #141418;
--surface-hover: #1e1e24;
--border: #282830;
--primary: #e4e4e7;
--primary-hover: #ffffff;
--secondary: #71717a;
--accent: #52525b;
--text: #fafafa;
--text-muted: #a1a1aa;
--glow: rgba(228, 228, 231, 0.25);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Smoked Obsidian' color palette from 'Monastic Zen Grayscale':
- Background: #0a0a0c
- Surface/Cards: #141418
- Primary Brand: #e4e4e7
- Secondary: #71717a
- Accent: #52525b
- Main Text: #fafafa
- Muted Text: #a1a1aa
- Border: #282830
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
