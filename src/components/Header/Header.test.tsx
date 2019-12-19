import React from 'react';

import { render } from '../../utils/test-utils';

import { Header } from './Header';

describe('Header', () => {
  it('renders correctly', () => {
    const { container } = render(<Header />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly with prop siteTitle', () => {
    const siteTitle = 'I am the title of the site';
    const { container } = render(<Header siteTitle={siteTitle} />);

    expect(container.firstChild).toMatchSnapshot();
    expect(container).toHaveTextContent(siteTitle);
  });
});
