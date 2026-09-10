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
  const tokens = `--bg: #fafafa;
--surface: #ffffff;
--surface-hover: #f4f4f5;
--border: #e4e4e7;
--primary: #0284c7;
--primary-hover: #0369a1;
--secondary: #52525b;
--accent: #10b981;
--text: #18181b;
--text-muted: #71717a;
--glow: rgba(2, 132, 199, 0.2);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Pure Sterile Dove' color palette from 'Clinical Clean Healthtech':
- Background: #fafafa
- Surface/Cards: #ffffff
- Primary Brand: #0284c7
- Secondary: #52525b
- Accent: #10b981
- Main Text: #18181b
- Muted Text: #71717a
- Border: #e4e4e7
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
