import { render, screen } from '@testing-library/react';
import  MenuBar from '../../components/menuBar';

test('check menu bar has proper elements', () => {
    render(<MenuBar />);
    const logoutElement = screen.queryByText(/logout/i);
    expect(logoutElement).toBeInTheDocument();
    const titleElement = screen.queryByText(/contacts app/i);
    expect(titleElement).toBeInTheDocument();
});

