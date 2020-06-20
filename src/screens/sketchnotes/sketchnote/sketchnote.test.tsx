import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { Sketchnote } from '.';

describe('Sketchnotes', () => {
  describe('Sketchnote', () => {
    test('renders correctly', () => {
      const { container } = render(<Sketchnote>Sketchnote</Sketchnote>);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<Sketchnote>Sketchnote</Sketchnote>);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
