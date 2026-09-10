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
  const tokens = `--bg: #0a192f;
--surface: #112240;
--surface-hover: #1a325c;
--border: #233554;
--primary: #64ffda;
--primary-hover: #a7f3d0;
--secondary: #f59e0b;
--accent: #ffffff;
--text: #ccd6f6;
--text-muted: #8892b0;
--glow: rgba(100, 255, 218, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Victorian Blueprint' color palette from 'Steampunk Industrial Copper':
- Background: #0a192f
- Surface/Cards: #112240
- Primary Brand: #64ffda
- Secondary: #f59e0b
- Accent: #ffffff
- Main Text: #ccd6f6
- Muted Text: #8892b0
- Border: #233554
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
