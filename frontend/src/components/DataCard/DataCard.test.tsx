import { render, screen } from '@testing-library/react';
import { DataCard } from './DataCard';

describe('DataCard', () => {
  it('renders data with proper formatting', () => {
    const testData = {
      first_name: 'John',
      last_name: 'Doe',
      age: '30',
      email: 'john.doe@example.com',
    };

    render(<DataCard data={testData} />);

    expect(screen.getByText('First Name')).toBeInTheDocument();
    expect(screen.getByText('Last Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();

    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Doe')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
  });

  it('renders data with empty object', () => {
    const testData = {};

    render(<DataCard data={testData} />);

    expect(screen.queryByText(/./)).toBeNull();
  });
});
