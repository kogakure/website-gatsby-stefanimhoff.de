/* eslint react/prefer-stateless-function: "off" */
import React from 'react';

// eslint-disable-next-line import/no-webpack-loader-syntax
import theme from '!raw-loader!./services/theme.js';

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
              __html: `${theme}`,
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
