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
  const tokens = `--bg: #fefdfa;
--surface: #ffffff;
--surface-hover: #fbf5eb;
--border: #f2e4cf;
--primary: #b45309;
--primary-hover: #92400e;
--secondary: #44403c;
--accent: #d97706;
--text: #292524;
--text-muted: #78716c;
--glow: rgba(180, 83, 9, 0.2);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Hinoki Cypress Wood' color palette from 'Japanese Wabi-Sabi':
- Background: #fefdfa
- Surface/Cards: #ffffff
- Primary Brand: #b45309
- Secondary: #44403c
- Accent: #d97706
- Main Text: #292524
- Muted Text: #78716c
- Border: #f2e4cf
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
