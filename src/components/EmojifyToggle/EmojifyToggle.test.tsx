import React from 'react';
import { axe } from 'jest-axe';
import user from '@testing-library/user-event';

import { render } from '../../utils/test-utils';

import { EmojifyToggle } from '.';

describe('EmojifyToggle', () => {
  test('renders correctly', () => {
    const { container } = render(<EmojifyToggle />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('changes the button text on click', async () => {
    const { container, findByText, debug } = render(<EmojifyToggle />);
    user.click(await findByText(/🐵/i));
    expect(container.firstChild).toMatchSnapshot();

    user.click(await findByText(/🙈/i));
    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<EmojifyToggle />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
