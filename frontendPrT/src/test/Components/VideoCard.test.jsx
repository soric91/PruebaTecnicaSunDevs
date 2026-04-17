import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import VideoCard from '../../Components/VideoCard';

const mockVideo = {
  id: 'vid_001',
  title: 'React Tutorial Avanzado',
  autor: 'DevChannel',
  thumbnailUrl: 'https://placehold.co/300x200?text=React',
  publishedRelative: 'Hace 3 días',
  hype: 0.3,
};

describe('VideoCard', () => {
  it('should render video title', () => {
    render(<VideoCard video={mockVideo} />);
    expect(screen.getByText('React Tutorial Avanzado')).toBeInTheDocument();
  });

  it('should render author name', () => {
    render(<VideoCard video={mockVideo} />);
    expect(screen.getByText('DevChannel')).toBeInTheDocument();
  });

  it('should render published date', () => {
    render(<VideoCard video={mockVideo} />);
    expect(screen.getByText('Hace 3 días')).toBeInTheDocument();
  });

  it('should show tutorial badge for tutorial videos', () => {
    render(<VideoCard video={mockVideo} />);
    expect(screen.getByText('📚 Tutorial')).toBeInTheDocument();
  });

  it('should not show tutorial badge for non-tutorial videos', () => {
    const nonTutorial = { ...mockVideo, title: 'AWS Explicado' };
    render(<VideoCard video={nonTutorial} />);
    expect(screen.queryByText('📚 Tutorial')).not.toBeInTheDocument();
  });

  it('should show Hot label for high hype', () => {
    render(<VideoCard video={{ ...mockVideo, hype: 0.3 }} />);
    expect(screen.getByText('🔥 Hot')).toBeInTheDocument();
  });

  it('should show Rising label for medium hype', () => {
    render(<VideoCard video={{ ...mockVideo, hype: 0.2 }} />);
    expect(screen.getByText('⚡ Rising')).toBeInTheDocument();
  });

  it('should show Low label for low hype', () => {
    render(<VideoCard video={{ ...mockVideo, hype: 0.05 }} />);
    expect(screen.getByText('📊 Low')).toBeInTheDocument();
  });

  it('should render image with lazy loading', () => {
    render(<VideoCard video={mockVideo} />);
    const img = screen.getByAltText('React Tutorial Avanzado');
    expect(img).toHaveAttribute('loading', 'lazy');
  });
});
