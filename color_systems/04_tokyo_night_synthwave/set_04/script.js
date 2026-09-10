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
  const tokens = `--bg: #0a0614;
--surface: #1a1030;
--surface-hover: #261747;
--border: #3b246e;
--primary: #facc15;
--primary-hover: #fde047;
--secondary: #ec4899;
--accent: #9333ea;
--text: #ffffff;
--text-muted: #cbd5e1;
--glow: rgba(250, 204, 21, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Akihabara Glow' color palette from 'Tokyo Night Synthwave':
- Background: #0a0614
- Surface/Cards: #1a1030
- Primary Brand: #facc15
- Secondary: #ec4899
- Accent: #9333ea
- Main Text: #ffffff
- Muted Text: #cbd5e1
- Border: #3b246e
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
