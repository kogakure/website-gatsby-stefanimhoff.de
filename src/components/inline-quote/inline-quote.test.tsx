import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import { InlineQuote } from '.';
import type { InlineQuoteProps } from '.';

type InlineQuoteTestProps = InlineQuoteProps & {
  description: string;
};

describe('InlineQuote', () => {
  const combinations: InlineQuoteTestProps[] = [
    { description: 'default', children: 'Quote' },
    { description: 'lang en', children: 'Quote', lang: 'en' },
    { description: 'lang de', children: 'Quote', lang: 'de' },
    { description: 'lang ja', children: 'Quote', lang: 'ja' },
  ];

  combinations.forEach((combination) => {
    test(`renders in ${combination.description}`, () => {
      const { container } = render(<InlineQuote {...combination} />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  combinations.forEach((combination) => {
    test(`is accessible in ${combination.description}`, async () => {
      const { container } = render(<InlineQuote {...combination} />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
