import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { WhatIDo } from '.';

describe('Homepage', () => {
  describe('WhatIDo', () => {
    test('renders correctly', () => {
      const { container } = render(<WhatIDo />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<WhatIDo />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
