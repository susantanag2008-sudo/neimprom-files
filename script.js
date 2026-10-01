(() => {
  const button = document.querySelector('#theme');
  let saved; try { saved = localStorage.getItem('neon-theme'); } catch (_) {}
  let theme = saved === 'dark' || saved === 'light' ? saved : (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  function apply() { document.documentElement.dataset.theme = theme; button.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' theme'); }
  apply();
  button.addEventListener('click', () => { theme = theme === 'dark' ? 'light' : 'dark'; apply(); try { localStorage.setItem('neon-theme', theme); } catch (_) {} });
})();
