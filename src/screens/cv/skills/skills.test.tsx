import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { Skills } from '.';

const data = {
  headline: 'Key Skills',
  items: [{ headline: 'Frontend', tags: ['Skill 1', 'Skill 2', 'Skill 3'] }],
};

describe('CV', () => {
  describe('Skills', () => {
    test('renders correctly', () => {
      const { container } = render(<Skills data={data} />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<Skills data={data} />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
