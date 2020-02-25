import React from 'react';
import { axe } from 'jest-axe';
import user from '@testing-library/user-event';

import { render } from '../../utils/test-utils';

import { Default } from './LocalizedDate.stories';

describe('LocalizedDate', () => {
  test('renders correctly', () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('changes the date text on click', async () => {
    const { container, findByText } = render(<Default />);
    user.click(await findByText(/January/i));
    expect(container.firstChild).toHaveTextContent('17.01.2020');

    user.click(await findByText(/17.01.2020/i));
    expect(container.firstChild).toHaveTextContent('2020年01月17日');
  });

  test('is accessible', async () => {
    const { container } = render(<Default />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
