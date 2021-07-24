import { render, screen } from '@testing-library/react';
import { LoginPage } from '../../pages/LoginPage';

test('checks if login box has proper elements', () => {
  render(<LoginPage />);
  const linkElement = screen.getByText(/login/i);
  expect(linkElement).toBeInTheDocument();

  const usernameElement = screen.getByText(/username/i);
  expect(usernameElement).toBeInTheDocument();

  const passwordElement = screen.getByText(/password/i);
  expect(passwordElement).toBeInTheDocument();
});
