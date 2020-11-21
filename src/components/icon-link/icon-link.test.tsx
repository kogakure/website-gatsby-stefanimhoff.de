import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';
import { ArrowRight as Icon } from '../icons';

import { IconLink } from '.';

describe('IconLink', () => {
  test('renders correctly', () => {
    const { container } = render(
      <IconLink to="/" icon={<Icon />}>
        Icon Link
      </IconLink>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(
      <IconLink to="/" icon={<Icon />}>
        Icon Link
      </IconLink>
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
