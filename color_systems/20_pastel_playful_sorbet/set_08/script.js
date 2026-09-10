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
--surface: #f8fafc;
--surface-hover: #f1f5f9;
--border: #e2e8f0;
--primary: #6366f1;
--primary-hover: #4f46e5;
--secondary: #ec4899;
--accent: #10b981;
--text: #0f172a;
--text-muted: #475569;
--glow: rgba(99, 102, 241, 0.2);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Rainbow Sprinkle' color palette from 'Pastel Playful Sorbet':
- Background: #ffffff
- Surface/Cards: #f8fafc
- Primary Brand: #6366f1
- Secondary: #ec4899
- Accent: #10b981
- Main Text: #0f172a
- Muted Text: #475569
- Border: #e2e8f0
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
