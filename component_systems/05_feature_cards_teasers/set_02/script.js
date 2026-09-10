// Component Interactive Logic
(function() {
  const stage = document.getElementById('componentStage');
  const toggleBtn = document.getElementById('toggleStateBtn');
  const copyHtmlBtn = document.getElementById('copyHtmlBtn');
  const copyCssBtn = document.getElementById('copyCssBtn');
  const copyPromptBtn = document.getElementById('copyPromptBtn');
  const toast = document.getElementById('toast');

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2200);
  }

  // Interactive toggle
  let isToggled = false;
  if (toggleBtn && stage) {
    toggleBtn.addEventListener('click', () => {
      isToggled = !isToggled;
      stage.classList.toggle('state-toggled', isToggled);
      showToast(isToggled ? 'State: Active / Hovered' : 'State: Default');
    });
  }

  if (copyHtmlBtn && stage) {
    copyHtmlBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(stage.innerHTML.trim()).then(() => {
        showToast('Component HTML copied to clipboard!');
      });
    });
  }

  if (copyCssBtn) {
    copyCssBtn.addEventListener('click', () => {
      fetch('styles.css').then(r => r.text()).then(css => {
        navigator.clipboard.writeText(css).then(() => {
          showToast('Component CSS Tokens copied!');
        });
      });
    });
  }

  if (copyPromptBtn) {
    copyPromptBtn.addEventListener('click', () => {
      fetch('prompt.md').then(r => r.text()).then(text => {
        navigator.clipboard.writeText(text).then(() => {
          showToast('AI Component Prompt copied!');
        });
      });
    });
  }
})();
