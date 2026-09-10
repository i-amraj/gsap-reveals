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
  const tokens = `--bg: #09090b;
--surface: #18181b;
--surface-hover: #27272a;
--border: #a3e635;
--primary: #a3e635;
--primary-hover: #bef264;
--secondary: #ec4899;
--accent: #38bdf8;
--text: #ffffff;
--text-muted: #a1a1aa;
--glow: 0 0 15px rgba(163, 230, 53, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Dark Brutalist High Voltage' color palette from 'Neo-Brutalism Pop':
- Background: #09090b
- Surface/Cards: #18181b
- Primary Brand: #a3e635
- Secondary: #ec4899
- Accent: #38bdf8
- Main Text: #ffffff
- Muted Text: #a1a1aa
- Border: #a3e635
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
