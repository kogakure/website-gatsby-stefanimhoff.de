import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { Sketchnotes } from '.';

describe('Sketchnotes', () => {
  describe('Sketchnotes', () => {
    test('renders correctly', () => {
      const { container } = render(<Sketchnotes>Sketchnotes</Sketchnotes>);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<Sketchnotes>Sketchnotes</Sketchnotes>);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
