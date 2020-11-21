import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import { Attribution } from '.';
import type { AttributionProps } from '.';

type AttributionTestProps = AttributionProps & {
  description: string;
};

describe('Attribution', () => {
  const combinations: AttributionTestProps[] = [
    {
      description: 'default',
      data: [
        {
          title: 'Sunflowers',
          author: 'Stefan Imhoff',
          url: 'https://www.stefanimhoff.de',
        },
      ],
    },
    {
      description: 'title and author',
      data: [
        {
          title: 'Sunflowers',
          author: 'Stefan Imhoff',
        },
      ],
    },
    {
      description: 'multiple authors',
      data: [
        {
          author: 'Stefan Imhoff',
        },
      ],
    },
    {
      description: 'author',
      data: [
        {
          title: 'Sunflowers',
          author: 'Stefan Imhoff',
          url: 'https://www.stefanimhoff.de',
        },
        {
          title: 'Boat on a River',
          author: 'Stefan Imhoff',
        },
      ],
    },
    {
      description: 'author and url',
      data: [
        {
          author: 'Stefan Imhoff',
          url: 'https://www.stefanimhoff.de',
        },
      ],
    },
  ];

  combinations.forEach((combination) => {
    test(`renders in ${combination.description}`, () => {
      const { container } = render(<Attribution {...combination} />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  combinations.forEach((combination) => {
    test(`is accessible in ${combination.description}`, async () => {
      const { container } = render(<Attribution {...combination} />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
