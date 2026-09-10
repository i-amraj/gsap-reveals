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
  const tokens = `--bg: #ffffff;
--surface: #fafafa;
--surface-hover: #f4f4f5;
--border: #e4e4e7;
--primary: #18181b;
--primary-hover: #09090b;
--secondary: #71717a;
--accent: #a1a1aa;
--text: #09090b;
--text-muted: #71717a;
--glow: rgba(24, 24, 27, 0.2);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Platinum Minimal' color palette from 'Luxury Editorial Monochrome':
- Background: #ffffff
- Surface/Cards: #fafafa
- Primary Brand: #18181b
- Secondary: #71717a
- Accent: #a1a1aa
- Main Text: #09090b
- Muted Text: #71717a
- Border: #e4e4e7
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
