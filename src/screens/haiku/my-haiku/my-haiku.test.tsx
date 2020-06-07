import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { MyHaiku } from '.';

describe('Haiku', () => {
  describe('MyHaiku', () => {
    test('renders correctly', () => {
      const { container } = render(<MyHaiku />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<MyHaiku />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
