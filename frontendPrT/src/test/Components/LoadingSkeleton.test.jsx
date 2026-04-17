import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LoadingSkeleton from '../../Components/LoadingSkeleton';

describe('LoadingSkeleton', () => {
  it('should render with pulse animation', () => {
    const { container } = render(<LoadingSkeleton />);
    expect(container.querySelector('.animate-pulse')).toBeInTheDocument();
  });

  it('should render 4 skeleton cards in the grid', () => {
    const { container } = render(<LoadingSkeleton />);
    const gridCards = container.querySelectorAll('.rounded-xl');
    expect(gridCards.length).toBe(4);
  });
});
