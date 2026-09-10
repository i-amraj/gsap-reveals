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
--surface-hover: #fbf6ec;
--border: #f4e7cd;
--primary: #d97706;
--primary-hover: #b45309;
--secondary: #0284c7;
--accent: #15803d;
--text: #451a03;
--text-muted: #78350f;
--glow: rgba(217, 119, 6, 0.25);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Golden Sand Dune' color palette from 'Coastal Mediterranean':
- Background: #fefdfa
- Surface/Cards: #ffffff
- Primary Brand: #d97706
- Secondary: #0284c7
- Accent: #15803d
- Main Text: #451a03
- Muted Text: #78350f
- Border: #f4e7cd
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
