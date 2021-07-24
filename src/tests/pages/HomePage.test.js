import { render, screen } from '@testing-library/react';
import { HomePage } from '../../pages/HomePage';

test('checks if login box has proper elements', () => {
  render(<HomePage />);
  const linkElement = screen.queryByText(/login/i);
  expect(linkElement).toBeNull()

  const usernameElement = screen.queryByText(/username/i);
  expect(usernameElement).toBeNull()

  const passwordElement = screen.queryByText(/password/i);
  expect(passwordElement).toBeNull()

  const loginElement = screen.getByText(/logout/i);
  expect(loginElement).toBeInTheDocument();
});
