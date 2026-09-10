// Component Interactive Scripts
(function() {
  
        const rBtn = document.getElementById('rippleBtn');
        if (rBtn) {
          rBtn.addEventListener('click', function(e) {
            const circle = document.createElement('span');
            circle.classList.add('ripple-drop');
            const d = Math.max(rBtn.clientWidth, rBtn.clientHeight);
            circle.style.width = circle.style.height = `${d}px`;
            const rect = rBtn.getBoundingClientRect();
            circle.style.left = `${e.clientX - rect.left - d/2}px`;
            circle.style.top = `${e.clientY - rect.top - d/2}px`;
            rBtn.appendChild(circle);
            setTimeout(() => circle.remove(), 600);
          });
        }
        

  const toast = document.getElementById('toast');
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2200);
  }

  const copyHtmlBtn = document.getElementById('copyHtmlBtn');
  const copyCssBtn = document.getElementById('copyCssBtn');
  const copyPromptBtn = document.getElementById('copyPromptBtn');

  if (copyHtmlBtn) {
    copyHtmlBtn.addEventListener('click', () => {
      const stage = document.getElementById('componentStage');
      if (stage) {
        navigator.clipboard.writeText(stage.innerHTML.trim()).then(() => showToast('HTML Markup copied!'));
      }
    });
  }

  if (copyCssBtn) {
    copyCssBtn.addEventListener('click', () => {
      fetch('styles.css').then(r => r.text()).then(css => {
        navigator.clipboard.writeText(css).then(() => showToast('CSS Code copied!'));
      });
    });
  }

  if (copyPromptBtn) {
    copyPromptBtn.addEventListener('click', () => {
      fetch('prompt.md').then(r => r.text()).then(text => {
        navigator.clipboard.writeText(text).then(() => showToast('AI Prompt copied!'));
      });
    });
  }
})();
