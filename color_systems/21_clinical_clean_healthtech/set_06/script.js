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
  const tokens = `--bg: #f4f6f8;
--surface: #ffffff;
--surface-hover: #e8edf2;
--border: #d3dbe3;
--primary: #1e3a8a;
--primary-hover: #172554;
--secondary: #0284c7;
--accent: #dc2626;
--text: #0f172a;
--text-muted: #475569;
--glow: rgba(30, 58, 138, 0.2);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Surgical Precision' color palette from 'Clinical Clean Healthtech':
- Background: #f4f6f8
- Surface/Cards: #ffffff
- Primary Brand: #1e3a8a
- Secondary: #0284c7
- Accent: #dc2626
- Main Text: #0f172a
- Muted Text: #475569
- Border: #d3dbe3
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
