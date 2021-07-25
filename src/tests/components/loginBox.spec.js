import { render, screen } from '@testing-library/react';
import  LoginBox from '../../components/loginBox';

test('login box has elements present', () => {
    render(<LoginBox />);
    const titleElement = screen.queryByText(/sign In/i);
    expect(titleElement).toBeInTheDocument();
    const usernameElement = screen.queryByText(/username/i);
    expect(usernameElement).toBeInTheDocument();

    const passwordElement = screen.queryByText(/password/i);
    expect(passwordElement).toBeInTheDocument();
    
});

