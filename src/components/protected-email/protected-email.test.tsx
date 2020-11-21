import React from 'react';
import { axe } from 'jest-axe';
import user from '@testing-library/user-event';

import { render, fireEvent } from '../../services/test-utils';

import { ProtectedEmail } from '.';

describe('ProtectedEmail', () => {
  test('renders correctly', () => {
    const { container } = render(<ProtectedEmail />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<ProtectedEmail />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  test('shows the email on click', async () => {
    const { container, findByText, getByRole } = render(<ProtectedEmail />);

    user.click(await findByText(/email/i));

    expect(container).toHaveTextContent(/@imhoff.name/i);
    expect(getByRole('link', { name: /download public/i })).toBeInTheDocument();
  });

  test('show the email on Enter keyUp', async () => {
    const { container, findByText, getByRole } = render(<ProtectedEmail />);

    fireEvent.keyUp(await findByText(/email/i), {
      key: 'Enter',
      code: 13,
    });

    expect(container).toHaveTextContent(/@imhoff.name/i);
    expect(getByRole('link', { name: /download public/i })).toBeInTheDocument();
  });

  describe('without GPG key download option', () => {
    test('renders correctly', () => {
      const { container } = render(<ProtectedEmail noKeyDownload />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('shows the email on click', async () => {
      const { container, findByText, queryByRole } = render(
        <ProtectedEmail noKeyDownload />
      );

      user.click(await findByText(/email/i));

      expect(container).toHaveTextContent(/@imhoff.name/i);
      expect(
        queryByRole('link', { name: /download public/i })
      ).not.toBeInTheDocument();
    });

    test('show the email on Enter keyUp', async () => {
      const { container, findByText, queryByRole } = render(
        <ProtectedEmail noKeyDownload />
      );

      fireEvent.keyUp(await findByText(/email/i), {
        key: 'Enter',
        code: 13,
      });

      expect(container).toHaveTextContent(/@imhoff.name/i);
      expect(
        queryByRole('link', { name: /download public/i })
      ).not.toBeInTheDocument();
    });

    test('is accessible', async () => {
      const { container } = render(<ProtectedEmail noKeyDownload />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });

  describe('with custom title', () => {
    test('renders correctly', () => {
      const { container } = render(<ProtectedEmail title="title" />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<ProtectedEmail title="title" />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
