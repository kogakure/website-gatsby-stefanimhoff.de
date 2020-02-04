import React from 'react';
import { axe } from 'jest-axe';
import user from '@testing-library/user-event';

import { render, fireEvent } from '../../utils/test-utils';

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
    const { getByText } = render(<ColorSwatch color={color} name={name} />);

    expect(getByText(/lapis lazuli/i)).toBeInTheDocument();
  });

  test('renders correctly with description', () => {
    const { getByText } = render(
      <ColorSwatch color={color} description={description} />
    );

    expect(getByText(/purplish blue/i)).toBeInTheDocument();
  });

  test('renders correctly with RGB value', () => {
    const { getByText } = render(<ColorSwatch color={rgbColor} />);

    expect(getByText(/#005CA/)).toBeInTheDocument();
  });

  test('renders correctly with HSL value', () => {
    const { getByText } = render(<ColorSwatch color={hslColor} />);

    expect(getByText(/#005CA/)).toBeInTheDocument();
  });

  test('show color information on click', async () => {
    const { getByText, findByLabelText } = render(
      <ColorSwatch color={color} name={name} description={description} />
    );

    user.click(await findByLabelText('Information'));
    expect(getByText(/#005CA/i)).toBeInTheDocument();

    user.click(await findByLabelText('Information'));
    expect(getByText(/lapis lazuli/i)).toBeInTheDocument();
  });

  test('should cycle through information icon', async () => {
    const { findByLabelText } = render(
      <ColorSwatch color={color} name={name} description={description} />
    );

    expect(document.body).toHaveFocus();
    user.tab();
    expect(await findByLabelText('Information')).toHaveFocus();
  });

  test('show color information on Enter keyUp', async () => {
    const { getByText, findByLabelText } = render(
      <ColorSwatch color={color} name={name} description={description} />
    );

    fireEvent.keyUp(await findByLabelText('Information'), {
      key: 'Enter',
      code: 13,
    });
    expect(getByText(/#005CA/i)).toBeInTheDocument();

    fireEvent.keyUp(await findByLabelText('Information'), {
      key: 'Enter',
      code: 13,
    });
    expect(getByText(/lapis lazuli/i)).toBeInTheDocument();
  });

  test('is accessible', async () => {
    const { container } = render(
      <ColorSwatch color={color} name={name} description={description} />
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
