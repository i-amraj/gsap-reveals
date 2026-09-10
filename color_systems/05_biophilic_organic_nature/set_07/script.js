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
  const tokens = `--bg: #fbfbf9;
--surface: #ffffff;
--surface-hover: #f5f5f0;
--border: #e5e5dc;
--primary: #4d7c0f;
--primary-hover: #3f6212;
--secondary: #a855f7;
--accent: #ca8a04;
--text: #1c1917;
--text-muted: #57534e;
--glow: rgba(77, 124, 15, 0.2);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Wild Herbal Clay' color palette from 'Biophilic Organic Nature':
- Background: #fbfbf9
- Surface/Cards: #ffffff
- Primary Brand: #4d7c0f
- Secondary: #a855f7
- Accent: #ca8a04
- Main Text: #1c1917
- Muted Text: #57534e
- Border: #e5e5dc
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
