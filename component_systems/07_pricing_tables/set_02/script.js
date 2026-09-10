// Component Interactive Scripts
(function() {
  
        const slider = document.getElementById('seatSlider');
        const seatCount = document.getElementById('seatCount');
        const totalPrice = document.getElementById('totalPrice');
        const discountTag = document.getElementById('discountTag');

        if (slider) {
          slider.addEventListener('input', (e) => {
            const seats = parseInt(e.target.value);
            seatCount.textContent = seats;
            let rate = 15;
            if (seats > 20) rate = 12;
            if (seats > 50) rate = 10;
            const total = seats * rate;
            totalPrice.textContent = total;
            discountTag.textContent = seats > 20 ? '25% Volume Discount' : 'Standard Rate';
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
