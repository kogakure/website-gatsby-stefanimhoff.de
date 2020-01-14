import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../utils/test-utils';

import { Emojify } from '.';

describe('Emojify', () => {
  test('renders correctly', () => {
    const { container } = render(<Emojify emoji="🤪" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<Emojify emoji="😬" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  test('is accessible when no text is returned', async () => {
    const { container, debug } = render(<Emojify emoji="👩🏻‍🦽" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
