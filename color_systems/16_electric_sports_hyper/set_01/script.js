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
  const tokens = `--bg: #050608;
--surface: #101217;
--surface-hover: #1a1e26;
--border: #272c38;
--primary: #ccff00;
--primary-hover: #dfff33;
--secondary: #ffffff;
--accent: #ff3366;
--text: #ffffff;
--text-muted: #94a3b8;
--glow: rgba(204, 255, 0, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Volt Runner' color palette from 'Electric Sports Hyper':
- Background: #050608
- Surface/Cards: #101217
- Primary Brand: #ccff00
- Secondary: #ffffff
- Accent: #ff3366
- Main Text: #ffffff
- Muted Text: #94a3b8
- Border: #272c38
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
