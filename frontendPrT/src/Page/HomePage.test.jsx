import { describe, expect, it, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

vi.mock('../Context/VideoContext', () => ({
  useVideoContext: vi.fn(),
}));

vi.mock('../Components/Navbar', () => ({
  default: () => <div data-testid="navbar">Navbar</div>,
}));

vi.mock('../Components/LoadingSkeleton', () => ({
  default: () => <div data-testid="loading-skeleton">Loading</div>,
}));

vi.mock('../Components/TopVideo', () => ({
  default: ({ dataVideo }) => (
    <div data-testid="top-video">Top: {dataVideo?.title}</div>
  ),
}));

vi.mock('../Components/VideoGrid', () => ({
  default: ({ remainingVideos }) => (
    <div data-testid="video-grid">Grid: {remainingVideos.length}</div>
  ),
}));

import { useVideoContext } from '../Context/VideoContext';

describe('HomePage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders loading skeleton while loading', () => {
    useVideoContext.mockReturnValue({ videos: [], loading: true, error: null });

    render(<HomePage />);

    expect(screen.getByTestId('loading-skeleton')).toBeInTheDocument();
  });

  it('renders error state when context has error', () => {
    useVideoContext.mockReturnValue({
      videos: [],
      loading: false,
      error: 'Algo salio mal',
    });

    render(<HomePage />);

    expect(screen.getByText('Error: Algo salio mal')).toBeInTheDocument();
  });

  it('renders empty state when no videos are available', () => {
    useVideoContext.mockReturnValue({
      videos: [],
      loading: false,
      error: null,
    });

    render(<HomePage />);

    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByText('No hay videos disponibles')).toBeInTheDocument();
  });

  it('renders featured video and grid when videos exist', () => {
    useVideoContext.mockReturnValue({
      videos: [
        { id: 1, title: 'Video Principal' },
        { id: 2, title: 'Video 2' },
        { id: 3, title: 'Video 3' },
      ],
      loading: false,
      error: null,
    });

    render(<HomePage />);

    expect(screen.getByTestId('top-video')).toHaveTextContent(
      'Top: Video Principal',
    );
    expect(screen.getByTestId('video-grid')).toHaveTextContent('Grid: 2');
  });
});
