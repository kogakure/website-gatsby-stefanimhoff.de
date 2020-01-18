import React from 'react';
import { axe } from 'jest-axe';
import user from '@testing-library/user-event';

import { render } from '../../utils/test-utils';

import { Spoiler } from '.';

describe('Spoiler', () => {
  test('renders correctly', () => {
    const { container } = render(<Spoiler>I am visually hidden text.</Spoiler>);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with layout "block" renders correctly', () => {
    const { container } = render(
      <Spoiler layout="block">
        I am visually hidden text displayed as a text block.
      </Spoiler>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('shows the text on click', async () => {
    const { container, findByLabelText } = render(
      <Spoiler>I am visually hidden text.</Spoiler>
    );
    const spoiler = container.getElementsByTagName('span')[1];

    expect(spoiler).toHaveAttribute('aria-hidden', 'true');

    user.click(await findByLabelText(/spoiler/i));

    expect(spoiler).toHaveAttribute('aria-hidden', 'false');
  });

  test('is accessible', async () => {
    const { container } = render(<Spoiler />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
