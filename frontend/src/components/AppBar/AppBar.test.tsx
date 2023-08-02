import { render, screen } from '@testing-library/react';
import AppBar from './AppBar';

describe('App', () => {
  it('renders AppBar title', () => {
    render(<AppBar />);
    const appBarTitle = screen.getByText(/CSV Data Explorer/i);
    expect(appBarTitle).toBeInTheDocument();
  });
});
