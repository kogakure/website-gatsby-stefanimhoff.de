import React from 'react';
import { axe } from 'jest-axe';
import user from '@testing-library/user-event';

import { render } from '../../services/test-utils';
import { EmojifyProvider } from '../../contexts';

import { Default } from './emojify.stories';

type AppProps = {
  children: React.ReactNode;
};

const App = ({ children }: AppProps) => (
  <EmojifyProvider>{children}</EmojifyProvider>
);

describe('Emojify', () => {
  test('renders correctly', async () => {
    const { container, findByText } = render(
      <App>
        <Default />
      </App>
    );

    user.click(await findByText(/🐵/i));

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(
      <App>
        <Default />
      </App>
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
