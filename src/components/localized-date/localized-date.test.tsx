import React from 'react';
import { axe } from 'jest-axe';
import user from '@testing-library/user-event';

import { render, fireEvent } from '../../services/test-utils';

import { LocalizedDate } from '.';

const date = '2020-01-17T18:00:00';

describe('LocalizedDate', () => {
  test('renders correctly', () => {
    const { container } = render(<LocalizedDate date={date} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('changes the date text on click', async () => {
    const { container, findByText } = render(<LocalizedDate date={date} />);

    user.click(await findByText(/January/i));
    expect(container.firstChild).toHaveTextContent('17.01.2020');
    expect(container.firstChild).toMatchSnapshot();

    user.click(await findByText(/17.01.2020/i));
    expect(container.firstChild).toHaveTextContent('2020年01月17日');
    expect(container.firstChild).toMatchSnapshot();

    user.click(await findByText(/年/i));
    expect(container.firstChild).toHaveTextContent('January 17th, 2020');
  });

  test('changes the date text on Enter keyUp', async () => {
    const { container, findByText } = render(<LocalizedDate date={date} />);

    fireEvent.keyUp(await findByText(/January/i), {
      key: 'Enter',
      code: 13,
    });
    expect(container.firstChild).toHaveTextContent('17.01.2020');
    expect(container.firstChild).toMatchSnapshot();

    fireEvent.keyUp(await findByText(/17.01.2020/i), {
      key: 'Enter',
      code: 13,
    });
    expect(container.firstChild).toHaveTextContent('2020年01月17日');
    expect(container.firstChild).toMatchSnapshot();

    fireEvent.keyUp(await findByText(/年/i), {
      key: 'Enter',
      code: 13,
    });
    expect(container.firstChild).toHaveTextContent('January 17th, 2020');
  });

  test('is accessible', async () => {
    const { container } = render(<LocalizedDate date={date} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
