import React from 'react';
import { axe } from 'jest-axe';
import user from '@testing-library/user-event';

import { render } from '../../utils/test-utils';
import { EmojifyProvider } from '../../contexts';
import { EmojifyToggle } from '../emojify-toggle';

import { Default, UnknownEmoji } from './emojify.stories';

const App: React.FC = ({ children }) => (
  <EmojifyProvider>
    <EmojifyToggle />
    {children}
  </EmojifyProvider>
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

  test('is accessible when no text is returned', async () => {
    const { container } = render(
      <App>
        <UnknownEmoji />
      </App>
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
