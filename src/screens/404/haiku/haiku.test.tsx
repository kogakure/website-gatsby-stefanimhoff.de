import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { Haiku } from '.';

describe('404', () => {
  describe('Haiku', () => {
    test('renders correctly', () => {
      const { container } = render(<Haiku />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<Haiku />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
