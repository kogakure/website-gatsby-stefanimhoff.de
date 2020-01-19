import React from 'react';
import { axe } from 'jest-axe';
import user from '@testing-library/user-event';

import { render } from '../../utils/test-utils';

import { ColorSwatch } from '.';

describe('ColorSwatch', () => {
  const color = '#005CAF';
  const rgbColor = 'rgb(0, 92, 175)';
  const hslColor = 'hsl(208, 100%, 34%)';
  const name = 'Lapis Lazuli';
  const description =
    'The soft, slightly purplish blue associated with the semi-precious stone.';

  test('renders correctly', () => {
    const { container } = render(
      <ColorSwatch color={color} name={name} description={description} />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders correctly with name', () => {
    const { container } = render(<ColorSwatch color={color} name={name} />);

    expect(container.firstChild).toHaveTextContent(/lapis lazuli/i);
  });

  test('renders correctly with description', () => {
    const { container } = render(
      <ColorSwatch color={color} description={description} />
    );

    expect(container.firstChild).toHaveTextContent(/purplish blue/i);
  });

  test('renders correctly with RGB value', () => {
    const { container } = render(<ColorSwatch color={rgbColor} />);

    expect(container.firstChild).toHaveTextContent(/#005CA/);
  });

  test('renders correctly with HSL value', () => {
    const { container } = render(<ColorSwatch color={hslColor} />);

    expect(container.firstChild).toHaveTextContent(/#005CA/);
  });

  test('show color information on click', async () => {
    const { container, findByLabelText } = render(
      <ColorSwatch color={color} name={name} description={description} />
    );

    user.click(await findByLabelText('Information'));
    expect(container.firstChild).toHaveTextContent(/#005CA/i);

    user.click(await findByLabelText('Information'));
    expect(container.firstChild).toHaveTextContent(/lapis lazuli/i);
  });

  test('is accessible', async () => {
    const { container } = render(
      <ColorSwatch color={color} name={name} description={description} />
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
