import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { ImageBlock } from '.';

describe('Projects', () => {
  describe('ImageBlock', () => {
    test('renders correctly', () => {
      const { container } = render(<ImageBlock>Image</ImageBlock>);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<ImageBlock>Image</ImageBlock>);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
