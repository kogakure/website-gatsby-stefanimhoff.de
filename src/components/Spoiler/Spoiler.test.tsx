import React from 'react';
import { axe } from 'jest-axe';
import user from '@testing-library/user-event';

import { render } from '../../utils/test-utils';

import { Default, Block } from './Spoiler.stories';

describe('Spoiler', () => {
  test('renders correctly', () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with layout "block" renders correctly', () => {
    const { container } = render(<Block />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('shows the text on click', async () => {
    const { container, findByLabelText } = render(<Default />);
    const spoiler = container.getElementsByTagName('span')[1];

    expect(spoiler).toHaveAttribute('aria-hidden', 'true');

    user.click(await findByLabelText(/spoiler/i));

    expect(spoiler).toHaveAttribute('aria-hidden', 'false');
  });

  test('is accessible', async () => {
    const { container } = render(<Default />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
