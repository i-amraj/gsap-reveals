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
  const tokens = `--bg: #8b956d;
--surface: #9bbc0f;
--surface-hover: #8bac0f;
--border: #306230;
--primary: #0f380f;
--primary-hover: #1f521f;
--secondary: #306230;
--accent: #0f380f;
--text: #0f380f;
--text-muted: #306230;
--glow: rgba(15, 56, 15, 0.3);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'GameBoy Matrix' color palette from 'Retro 90s Nostalgia':
- Background: #8b956d
- Surface/Cards: #9bbc0f
- Primary Brand: #0f380f
- Secondary: #306230
- Accent: #0f380f
- Main Text: #0f380f
- Muted Text: #306230
- Border: #306230
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
