/* eslint-disable import/no-duplicates */
import * as React from 'react';
import { useState, useEffect } from 'react';

/* eslint-disable no-underscore-dangle */
interface ThemedWindow extends Window {
  __theme: string;
  __onThemeChange: () => void;
  __setPreferredTheme: (theme: string) => void;
}

declare const window: ThemedWindow;

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState('');
  const oppositeTheme = theme === 'light' ? 'dark' : 'light';
  const setPreferredTheme = () => {
    window.__setPreferredTheme(oppositeTheme);
  };

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => setTheme(window.__theme);
  }, []);

  return (
    <button type="button" onClick={setPreferredTheme}>
      Toggle Theme
    </button>
  );
};

export { ThemeToggle };
