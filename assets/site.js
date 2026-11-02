(function () {
  var root = document.documentElement;
  var button = document.querySelector('.theme-toggle');
  var system = window.matchMedia('(prefers-color-scheme: dark)');
  function isDark() { return root.dataset.theme ? root.dataset.theme === 'dark' : system.matches; }
  function updateLabel() {
    if (!button) return;
    var label = isDark() ? 'Switch to light theme' : 'Switch to dark theme';
    button.setAttribute('aria-label', label);
    button.setAttribute('aria-pressed', String(isDark()));
    button.title = label;
  }
  if (button) {
    button.addEventListener('click', function () {
      root.dataset.theme = isDark() ? 'light' : 'dark';
      try { localStorage.setItem('theme', root.dataset.theme); } catch (error) {}
      updateLabel();
    });
    if (system.addEventListener) system.addEventListener('change', updateLabel);
    updateLabel();
  }
  var bar = document.querySelector('.progress span');
  if (bar) {
    function updateProgress() {
      var height = root.scrollHeight - window.innerHeight;
      bar.style.transform = 'scaleX(' + (height > 0 ? Math.min(1, Math.max(0, window.scrollY / height)) : 0) + ')';
    }
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    updateProgress();
  }
})();
