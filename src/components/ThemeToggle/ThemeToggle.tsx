/* eslint-disable import/no-duplicates */
import * as React from 'react';
import { useState, useEffect } from 'react';

import { Styled } from './ThemeToggle.styles';

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
  const buttonText =
    theme === 'light' ? 'Switch to dark theme' : 'Swith to light theme';

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => setTheme(window.__theme);
  }, []);

  return (
    <Styled.Button
      aria-label={buttonText}
      type="button"
      onClick={setPreferredTheme}
    >
      <Styled.SunIcon theme={theme} role="img" aria-label="Sun" />
      <Styled.MoonIcon theme={theme} role="img" aria-label="Moon" />
    </Styled.Button>
  );
};

export { ThemeToggle };
