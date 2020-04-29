import React from 'react';
import { axe } from 'jest-axe';
import user from '@testing-library/user-event';

import { render, fireEvent } from '../../utils/test-utils';

import {
  Default,
  WithDescription,
  RGBValue,
  HSLValue,
} from './color-swatch.stories';

describe('ColorSwatch', () => {
  test('renders correctly', () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders correctly with name', () => {
    const { getByText } = render(<Default />);

    expect(getByText(/lapis lazuli/i)).toBeInTheDocument();
  });

  test('renders correctly with description', () => {
    const { getByText } = render(<WithDescription />);

    expect(getByText(/purplish blue/i)).toBeInTheDocument();
  });

  test('renders correctly with RGB value', () => {
    const { getByText } = render(<RGBValue />);

    expect(getByText(/#005CA/)).toBeInTheDocument();
  });

  test('renders correctly with HSL value', () => {
    const { getByText } = render(<HSLValue />);

    expect(getByText(/#005CA/)).toBeInTheDocument();
  });

  test('show color information on click', async () => {
    const { getByText, findByLabelText } = render(<Default />);

    user.click(await findByLabelText('Information'));
    expect(getByText(/#005CA/i)).toBeInTheDocument();

    user.click(await findByLabelText('Information'));
    expect(getByText(/lapis lazuli/i)).toBeInTheDocument();
  });

  test('should cycle through information icon', async () => {
    const { findByLabelText } = render(<Default />);

    expect(document.body).toHaveFocus();
    user.tab();
    expect(await findByLabelText('Information')).toHaveFocus();
  });

  test('show color information on Enter keyUp', async () => {
    const { getByText, findByLabelText } = render(<Default />);

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
    const { container } = render(<Default />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
