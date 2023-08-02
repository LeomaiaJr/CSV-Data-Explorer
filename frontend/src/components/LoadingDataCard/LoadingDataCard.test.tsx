import { render, screen } from '@testing-library/react';
import { LoadingDataCard } from './LoadingDataCard';

describe('LoadingDataCard', () => {
  it('renders skeleton elements', () => {
    render(<LoadingDataCard />);

    const skeletonElements = screen.getAllByRole('status');
    expect(skeletonElements).toHaveLength(8); // Two skeleton elements for each loop iteration
  });
});
