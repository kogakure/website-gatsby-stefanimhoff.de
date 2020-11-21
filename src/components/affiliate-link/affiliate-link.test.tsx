import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import { AffiliateLink } from '.';

describe('AffiliateLink', () => {
  test('renders correctly', () => {
    const { container } = render(
      <AffiliateLink asin="B07NWN6KD6">Affiliate Link</AffiliateLink>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(
      <AffiliateLink asin="B07NWN6KD6">Affiliate Link</AffiliateLink>
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
