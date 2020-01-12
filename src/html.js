/* eslint react/prefer-stateless-function: "off" */
import React from 'react';

export default class HTML extends React.Component {
  render() {
    const {
      htmlAttributes,
      headComponents,
      bodyAttributes,
      preBodyComponents,
      body,
      postBodyComponents,
    } = this.props;

    return (
      <html lang="en" {...htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {headComponents}
        </head>
        <body {...bodyAttributes}>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function() {
                var root = document.getElementsByTagName('html')[0];
                window.__onThemeChange = function() {};

                function setTheme(newTheme) {
                  window.__theme = newTheme;
                  preferredTheme = newTheme;
                  currentTheme = newTheme === 'light' ? 'dark' : 'light';
                  root.classList.add(newTheme);
                  root.classList.remove(currentTheme);
                  window.__onThemeChange(newTheme);
                }

                var preferredTheme;

                try {
                  preferredTheme = localStorage.getItem('theme');
                } catch (err) {}

                window.__setPreferredTheme = function(newTheme) {
                  setTheme(newTheme);
                  try {
                    localStorage.setItem('theme', newTheme);
                  } catch (err) {}
                }

                var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

                darkQuery.addListener(function(e) {
                  window.__setPreferredTheme(e.matches ? 'dark' : 'light')
                });

                setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
              })();
            `,
            }}
          />
          {preBodyComponents}
          <div
            key="body"
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: body }}
          />
          {postBodyComponents}
        </body>
      </html>
    );
  }
}
