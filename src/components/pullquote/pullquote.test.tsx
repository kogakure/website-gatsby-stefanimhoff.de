import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import { Pullquote } from '.';
import type { PullquoteProps } from '.';

type PullquoteTestProps = PullquoteProps & {
  description: string;
};

describe('Pullquote', () => {
  // prettier-ignore
  const combinations: PullquoteTestProps[] = [
    { description: 'default', children: 'Pullquote' },
    { description: 'german', children: 'Pullquote', lang: 'de' },
    { description: 'japanese', children: 'Pullquote', lang: 'ja' },
    { description: 'author', children: 'Pullquote', author: 'author' },
    { description: 'source', children: 'Pullquote', source: 'source' },
    { description: 'source, sourceUrl', children: 'Pullquote', source: 'source', sourceUrl: 'sourceUrl' },
    { description: 'author, source, sourceUrl', children: 'Pullquote', author: 'author', source: 'source', sourceUrl: 'sourceUrl' },
    { description: 'author, source', children: 'Pullquote', author: 'author', source: 'source' },
  ];

  combinations.forEach((combination) => {
    test(`renders in ${combination.description}`, () => {
      const { container } = render(<Pullquote {...combination} />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  combinations.forEach((combination) => {
    test(`is accessible in ${combination.description}`, async () => {
      const { container } = render(<Pullquote {...combination} />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
