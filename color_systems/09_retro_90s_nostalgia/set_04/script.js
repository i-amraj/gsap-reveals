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
  const tokens = `--bg: #0a1926;
--surface: #132d44;
--surface-hover: #1c4061;
--border: #295b87;
--primary: #2dd4bf;
--primary-hover: #5eead4;
--secondary: #f472b6;
--accent: #fbbf24;
--text: #f0fdfa;
--text-muted: #99f6e4;
--glow: rgba(45, 212, 191, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Miami Mall 94' color palette from 'Retro 90s Nostalgia':
- Background: #0a1926
- Surface/Cards: #132d44
- Primary Brand: #2dd4bf
- Secondary: #f472b6
- Accent: #fbbf24
- Main Text: #f0fdfa
- Muted Text: #99f6e4
- Border: #295b87
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
