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
  const tokens = `--bg: #f3f4f6;
--surface: #ffffff;
--surface-hover: #e5e7eb;
--border: #d1d5db;
--primary: #374151;
--primary-hover: #1f2937;
--secondary: #2563eb;
--accent: #f59e0b;
--text: #111827;
--text-muted: #6b7280;
--glow: rgba(55, 65, 81, 0.2);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Oslo Fog' color palette from 'Nordic Scandinavian Minimal':
- Background: #f3f4f6
- Surface/Cards: #ffffff
- Primary Brand: #374151
- Secondary: #2563eb
- Accent: #f59e0b
- Main Text: #111827
- Muted Text: #6b7280
- Border: #d1d5db
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
