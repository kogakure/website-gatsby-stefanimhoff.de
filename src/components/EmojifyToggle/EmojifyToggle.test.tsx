import React from 'react';
import { axe } from 'jest-axe';
import user from '@testing-library/user-event';

import { render } from '../../utils/test-utils';

import { Default } from './EmojifyToggle.stories';

describe('EmojifyToggle', () => {
  test('renders correctly', () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('changes the button text on click', async () => {
    const { getByText, findByText } = render(<Default />);
    user.click(await findByText(/🐵/i));
    expect(getByText('🙈')).toBeInTheDocument();

    user.click(await findByText(/🙈/i));
    expect(getByText('🐵')).toBeInTheDocument();
  });

  test('is accessible', async () => {
    const { container } = render(<Default />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
