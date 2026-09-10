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
  const tokens = `--bg: #020817;
--surface: #091738;
--surface-hover: #102657;
--border: #17387d;
--primary: #2563eb;
--primary-hover: #3b82f6;
--secondary: #38bdf8;
--accent: #f43f5e;
--text: #eff6ff;
--text-muted: #93c5fd;
--glow: rgba(37, 99, 235, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Interstellar Blue' color palette from 'Glassmorphism Deep Space':
- Background: #020817
- Surface/Cards: #091738
- Primary Brand: #2563eb
- Secondary: #38bdf8
- Accent: #f43f5e
- Main Text: #eff6ff
- Muted Text: #93c5fd
- Border: #17387d
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
