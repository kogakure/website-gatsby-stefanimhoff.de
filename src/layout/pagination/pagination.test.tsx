import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import { Pagination } from '.';
import type { LinkWithPaginationProps } from '.';

const leftProps: LinkWithPaginationProps = {
  text: 'Previous',
  to: '/previous/',
  variant: 'left',
};

const rightProps: LinkWithPaginationProps = {
  text: 'Next',
  to: '/next/',
  variant: 'right',
};

describe('Pagination', () => {
  test('renders correctly', () => {
    const { container } = render(<Pagination to="/" variant="right" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('"Both" renders correctly', () => {
    const { container } = render(
      <>
        <Pagination {...leftProps} />
        <Pagination {...rightProps} />
      </>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('"Left" renders correctly', () => {
    const { container } = render(<Pagination {...leftProps} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('"Right" renders correctly', () => {
    const { container } = render(<Pagination {...rightProps} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(
      <Pagination to="/" variant="left" text="left" />
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
