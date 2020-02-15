/* eslint-disable */
(function() {
  const root = document.getElementsByTagName('html')[0];
  window.__onThemeChange = function() {};

  function setTheme(newTheme) {
    window.__theme = newTheme;
    preferredTheme = newTheme;
    currentTheme = newTheme === 'light' ? 'dark' : 'light';
    root.classList.add(newTheme);
    root.classList.remove(currentTheme);
    window.__onThemeChange(newTheme);
  }

  let preferredTheme;

  try {
    preferredTheme = localStorage.getItem('theme');
  } catch (err) {}

  window.__setPreferredTheme = function(newTheme) {
    setTheme(newTheme);
    try {
      localStorage.setItem('theme', newTheme);
    } catch (err) {}
  };

  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

  darkQuery.addListener(function(e) {
    window.__setPreferredTheme(e.matches ? 'dark' : 'light');
  });

  setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
})();
