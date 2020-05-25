import React from 'react';
import { axe } from 'jest-axe';
import user from '@testing-library/user-event';

import { render } from '../../services/test-utils';

import { Default } from './localized-date.stories';

describe('LocalizedDate', () => {
  test('renders correctly', () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('changes the date text on click', async () => {
    const { container, findByText } = render(<Default />);
    user.click(await findByText(/January/i));
    expect(container.firstChild).toHaveTextContent('17.01.2020');
    expect(container.firstChild).toMatchSnapshot();

    user.click(await findByText(/17.01.2020/i));
    expect(container.firstChild).toHaveTextContent('2020年01月17日');
    expect(container.firstChild).toMatchSnapshot();

    user.click(await findByText(/年/i));
    expect(container.firstChild).toHaveTextContent('January 17th, 2020');
  });

  test('is accessible', async () => {
    const { container } = render(<Default />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
