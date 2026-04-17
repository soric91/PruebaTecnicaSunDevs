import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HypeBar from '../../Components/HypeBar';

describe('HypeBar', () => {
  it('should render N/A when level is 0', () => {
    render(<HypeBar level={0} />);
    expect(screen.getByText('N/A')).toBeInTheDocument();
  });

  it('should render percentage when level > 0', () => {
    render(<HypeBar level={0.25} />);
    expect(screen.getByText('25.0%')).toBeInTheDocument();
  });

  it('should cap the bar width at 100%', () => {
    const { container } = render(<HypeBar level={1.5} />);
    const bar = container.querySelector('[style]');
    expect(bar.style.width).toBe('100%');
  });

  it('should render with md size', () => {
    const { container } = render(<HypeBar level={0.5} size="md" />);
    const bar = container.querySelector('.h-2\\.5');
    expect(bar).toBeInTheDocument();
  });
});
