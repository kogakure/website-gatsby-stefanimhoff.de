import React from 'react';
import { axe } from 'jest-axe';
import user from '@testing-library/user-event';

import { render, fireEvent } from '../../services/test-utils';

import { Default, CustomTitle, NoKeyDownload } from './protected-email.stories';

describe('ProtectedEmail', () => {
  test('renders correctly', () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<Default />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  test('shows the email on click', async () => {
    const { container, findByText, getByRole } = render(<Default />);

    user.click(await findByText(/email/i));

    expect(container).toHaveTextContent(/stefan@imhoff.name/i);
    expect(getByRole('link', { name: /download public/i })).toBeInTheDocument();
  });

  test('show the email on Enter keyUp', async () => {
    const { container, findByText, getByRole } = render(<Default />);

    fireEvent.keyUp(await findByText(/email/i), {
      key: 'Enter',
      code: 13,
    });

    expect(container).toHaveTextContent(/stefan@imhoff.name/i);
    expect(getByRole('link', { name: /download public/i })).toBeInTheDocument();
  });

  describe('without GPG key download option', () => {
    test('renders correctly', () => {
      const { container } = render(<NoKeyDownload />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('shows the email on click', async () => {
      const { container, findByText, queryByRole } = render(<NoKeyDownload />);

      user.click(await findByText(/email/i));

      expect(container).toHaveTextContent(/stefan@imhoff.name/i);
      expect(
        queryByRole('link', { name: /download public/i })
      ).not.toBeInTheDocument();
    });

    test('show the email on Enter keyUp', async () => {
      const { container, findByText, queryByRole } = render(<NoKeyDownload />);

      fireEvent.keyUp(await findByText(/email/i), {
        key: 'Enter',
        code: 13,
      });

      expect(container).toHaveTextContent(/stefan@imhoff.name/i);
      expect(
        queryByRole('link', { name: /download public/i })
      ).not.toBeInTheDocument();
    });

    test('is accessible', async () => {
      const { container } = render(<NoKeyDownload />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });

  describe('with custom title', () => {
    test('renders correctly', () => {
      const { container } = render(<CustomTitle />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<CustomTitle />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
