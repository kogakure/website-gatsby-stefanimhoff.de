import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../utils/test-utils';
import { EmojifyContext } from '../../contexts';

import { Emojify } from '.';

const App: React.FC = ({ children }) => {
  const { setEmojified } = React.useContext(EmojifyContext);
  setEmojified(true);

  return <>{children}</>;
};

describe('Emojify', () => {
  test('renders correctly', () => {
    const { container } = render(
      <App>
        <Emojify emoji="🤪" />
      </App>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(
      <App>
        <Emojify emoji="😬" />
      </App>
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  test('is accessible when no text is returned', async () => {
    const { container } = render(
      <App>
        <Emojify emoji="👩🏻‍🦽" />
      </App>
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
