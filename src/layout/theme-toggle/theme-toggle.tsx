/* eslint-disable import/no-duplicates */
import * as React from 'react';
import { useState, useEffect } from 'react';

import { Clickable } from '../../components/clickable';

import { Styled } from './theme-toggle.styles';

/* eslint-disable no-underscore-dangle */
export interface ThemedWindow extends Window {
  __theme: string;
  __onThemeChange: () => void;
  __setPreferredTheme: (theme: string) => void;
}

declare const window: ThemedWindow;

export const ThemeToggle: React.FC = ({ ...props }) => {
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
    <Clickable text={buttonText} onClick={setPreferredTheme} {...props}>
      <Styled.CircleIcon role="img" aria-label="Circle" />
    </Clickable>
  );
};
