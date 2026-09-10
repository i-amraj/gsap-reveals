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
  const tokens = `--bg: #f8fafc;
--surface: #ffffff;
--surface-hover: #f1f5f9;
--border: #e2e8f0;
--primary: #0f172a;
--primary-hover: #1e293b;
--secondary: #059669;
--accent: #0284c7;
--text: #0f172a;
--text-muted: #64748b;
--glow: rgba(15, 23, 42, 0.2);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Clean Banking Light' color palette from 'Fintech Security Slate':
- Background: #f8fafc
- Surface/Cards: #ffffff
- Primary Brand: #0f172a
- Secondary: #059669
- Accent: #0284c7
- Main Text: #0f172a
- Muted Text: #64748b
- Border: #e2e8f0
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
