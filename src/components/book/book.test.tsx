import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import { Book } from '.';
import type { BookProps } from '.';

type BookTestProps = BookProps & {
  description: string;
};

describe('Book', () => {
  // prettier-ignore
  const combinations: BookTestProps[] = [
    { description: 'default', src: 'book.jpg' },
    { description: 'height, width', src: 'book.jpg', height: '393', width: '300' },
    { description: 'href', src: 'book.jpg', href: "/", alt: "href" },
  ];

  combinations.forEach((combination) => {
    test(`renders in ${combination.description}`, () => {
      const { container } = render(<Book {...combination} />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  combinations.forEach((combination) => {
    test(`is accessible in ${combination.description}`, async () => {
      const { container } = render(<Book {...combination} />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
