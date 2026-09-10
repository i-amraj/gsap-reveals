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
  const tokens = `--bg: #1c1917;
--surface: #292524;
--surface-hover: #3c3633;
--border: #44403c;
--primary: #fafaf9;
--primary-hover: #ffffff;
--secondary: #d6d3d1;
--accent: #ca8a04;
--text: #ffffff;
--text-muted: #a8a29e;
--glow: rgba(250, 250, 249, 0.25);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Vogue Espresso' color palette from 'Luxury Editorial Monochrome':
- Background: #1c1917
- Surface/Cards: #292524
- Primary Brand: #fafaf9
- Secondary: #d6d3d1
- Accent: #ca8a04
- Main Text: #ffffff
- Muted Text: #a8a29e
- Border: #44403c
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
