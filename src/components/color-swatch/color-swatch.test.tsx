import React from 'react';
import { axe } from 'jest-axe';
import user from '@testing-library/user-event';

import { render, fireEvent } from '../../services/test-utils';

import { ColorSwatch } from '.';
import type { ColorSwatchProps } from '.';

type ColorSwatchTestProps = ColorSwatchProps & {
  title: string;
};

const defaultProps = {
  color: '#005CAF',
  name: 'Lapis Lazuli',
  description:
    'The soft, slightly purplish blue associated with the semi-precious stone.',
};

describe('ColorSwatch', () => {
  // prettier-ignore
  const combinations: ColorSwatchTestProps[] = [
    { title: 'default', color: '#005CAF', name: 'name', description: 'description' },
    { title: 'description', color: '#005CAF', description: 'description' },
    { title: 'rgb', color: 'rgb(0, 92, 175)' }, 
    { title: 'hsl', color: 'hsl(208, 100%, 34%)' },
  ];

  combinations.forEach((combination) => {
    test(`renders in ${combination.description}`, () => {
      const { container } = render(<ColorSwatch {...combination} />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  combinations.forEach((combination) => {
    test(`is accessible in ${combination.description}`, async () => {
      const { container } = render(<ColorSwatch {...combination} />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });

  test('renders correctly with name', () => {
    const { getByText } = render(<ColorSwatch {...defaultProps} />);
    expect(getByText(/lapis lazuli/i)).toBeInTheDocument();
  });

  test('renders correctly with description', () => {
    const { getByText } = render(
      <ColorSwatch {...defaultProps} name={undefined} />
    );
    expect(getByText(/purplish blue/i)).toBeInTheDocument();
  });

  test('renders correctly with RGB value', () => {
    const { getByText } = render(<ColorSwatch color="rgb(0, 92, 175)" />);
    expect(getByText(/#005CA/)).toBeInTheDocument();
  });

  test('renders correctly with HSL value', () => {
    const { getByText } = render(<ColorSwatch color="hsl(208, 100%, 34%)" />);
    expect(getByText(/#005CA/)).toBeInTheDocument();
  });

  test('show color information on click', async () => {
    const { getByText, findByLabelText } = render(
      <ColorSwatch {...defaultProps} />
    );

    user.click(await findByLabelText('Information'));
    expect(getByText(/#005CA/i)).toBeInTheDocument();

    user.click(await findByLabelText('Information'));
    expect(getByText(/lapis lazuli/i)).toBeInTheDocument();
  });

  test('should cycle through information icon', async () => {
    const { findByLabelText } = render(<ColorSwatch {...defaultProps} />);

    expect(document.body).toHaveFocus();
    user.tab();
    expect(await findByLabelText('Information')).toHaveFocus();
  });

  test('show color information on Enter keyUp', async () => {
    const { getByText, findByLabelText } = render(
      <ColorSwatch {...defaultProps} />
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
});
