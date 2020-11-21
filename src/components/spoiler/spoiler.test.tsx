import React from 'react';
import { axe } from 'jest-axe';
import user from '@testing-library/user-event';

import { render, fireEvent } from '../../services/test-utils';

import { Spoiler } from '.';

describe('Spoiler', () => {
  test('renders correctly', () => {
    const { container } = render(<Spoiler>Spoiler</Spoiler>);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with layout "block" renders correctly', () => {
    const { container } = render(<Spoiler block>Spoiler</Spoiler>);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('shows the text on click', async () => {
    const { container, findByLabelText } = render(<Spoiler>Spoiler</Spoiler>);
    const spoiler = container.getElementsByTagName('span')[1];

    expect(spoiler).toHaveAttribute('aria-hidden', 'true');

    user.click(await findByLabelText(/spoiler/i));

    expect(spoiler).toHaveAttribute('aria-hidden', 'false');
  });

  test('show the text on Enter keyUp', async () => {
    const { container, findByLabelText } = render(<Spoiler>Spoiler</Spoiler>);
    const spoiler = container.getElementsByTagName('span')[1];

    expect(spoiler).toHaveAttribute('aria-hidden', 'true');

    fireEvent.keyUp(await findByLabelText(/spoiler/i), {
      key: 'Enter',
      code: 13,
    });

    expect(spoiler).toHaveAttribute('aria-hidden', 'false');
  });

  test('is accessible', async () => {
    const { container } = render(<Spoiler>Spoiler</Spoiler>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
