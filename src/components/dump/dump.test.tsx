import React from 'react';

import { render } from '../../services/test-utils';

import { Dump } from '.';

const data = {
  foo: 'bar',
  someArr: [1, 2, 3],
  someObj: {
    hello: 'Hello World',
  },
};

describe('Dump', () => {
  test('renders correctly', () => {
    const { container } = render(<Dump data={data} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
