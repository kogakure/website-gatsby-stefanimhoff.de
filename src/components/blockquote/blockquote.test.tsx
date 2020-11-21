import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import { Blockquote } from '.';
import type { BlockquoteProps } from '.';

type BlockquoteTestProps = BlockquoteProps & {
  description: string;
};

describe('Blockquote', () => {
  // prettier-ignore
  const combinations: BlockquoteTestProps[] = [
    { description: 'default', children: 'Quote' },
    { description: 'german', children: 'Quote', lang: 'de' },
    { description: 'japanese', children: 'Quote', lang: 'ja' },
    { description: 'author', children: 'Quote', author: 'Author' },
    { description: 'author, source', children: 'Quote', author: 'Author', source: 'Source' },
    { description: 'author, sourceUrl', children: 'Quote', author: 'Author', sourceUrl: 'SourceUrl' },
    { description: 'source', children: 'Quote', source: 'Source' },
    { description: 'sourceUrl', children: 'Quote', sourceUrl: 'SourceUrl' },
    { description: 'source, sourceUrl', children: 'Quote', source: 'Source', sourceUrl: 'SourceUrl' },
    { description: 'author, source, sourceUrl', children: 'Quote', author: 'Author', source: 'Source', sourceUrl: 'SourceUrl' },
  ];

  combinations.forEach((combination) => {
    test(`renders in ${combination.description}`, () => {
      const { container } = render(<Blockquote {...combination} />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  combinations.forEach((combination) => {
    test(`is accessible in ${combination.description}`, async () => {
      const { container } = render(<Blockquote {...combination} />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
