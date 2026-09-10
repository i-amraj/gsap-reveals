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
  const tokens = `--bg: #fff8fa;
--surface: #ffffff;
--surface-hover: #fdeef3;
--border: #fbcfe8;
--primary: #ec4899;
--primary-hover: #db2777;
--secondary: #292524;
--accent: #15803d;
--text: #500724;
--text-muted: #9d174d;
--glow: rgba(236, 72, 153, 0.25);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Cherry Blossom Sakura' color palette from 'Japanese Wabi-Sabi':
- Background: #fff8fa
- Surface/Cards: #ffffff
- Primary Brand: #ec4899
- Secondary: #292524
- Accent: #15803d
- Main Text: #500724
- Muted Text: #9d174d
- Border: #fbcfe8
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
