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
  const tokens = `--bg: #0c0717;
--surface: #190f2e;
--surface-hover: #261745;
--border: #392363;
--primary: #ec4899;
--primary-hover: #f472b6;
--secondary: #06b6d4;
--accent: #facc15;
--text: #ffffff;
--text-muted: #cbd5e1;
--glow: rgba(236, 72, 153, 0.45);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Flamingo & Turquoise' color palette from 'Sunset Miami Vice':
- Background: #0c0717
- Surface/Cards: #190f2e
- Primary Brand: #ec4899
- Secondary: #06b6d4
- Accent: #facc15
- Main Text: #ffffff
- Muted Text: #cbd5e1
- Border: #392363
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
