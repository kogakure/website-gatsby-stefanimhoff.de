import React from 'react';

import { render } from '../../services/test-utils';

import { MDXProviderContainer } from '.';

describe('MdxProviderContainer', () => {
  test('renders correctly', () => {
    const { container } = render(
      <MDXProviderContainer>MDXProvider Content</MDXProviderContainer>
    );

    expect(container.firstChild).toMatchInlineSnapshot(`MDXProvider Content`);
  });
});
