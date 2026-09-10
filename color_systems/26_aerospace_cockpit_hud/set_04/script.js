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
  const tokens = `--bg: #010a04;
--surface: #031c0b;
--surface-hover: #062b11;
--border: #09401a;
--primary: #10b981;
--primary-hover: #34d399;
--secondary: #a3e635;
--accent: #ffffff;
--text: #ecfdf5;
--text-muted: #6ee7b7;
--glow: rgba(16, 185, 129, 0.45);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Night Vision Monolith' color palette from 'Aerospace Cockpit HUD':
- Background: #010a04
- Surface/Cards: #031c0b
- Primary Brand: #10b981
- Secondary: #a3e635
- Accent: #ffffff
- Main Text: #ecfdf5
- Muted Text: #6ee7b7
- Border: #09401a
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
