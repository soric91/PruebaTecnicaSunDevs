import { describe, expect, it, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { GlobalVideoProvider, useVideoContext } from './VideoContext';
import { getDataVideos } from '../Api/video';

vi.mock('../Api/video', () => ({
  getDataVideos: vi.fn(),
}));

const Consumer = () => {
  const { videos, loading, error } = useVideoContext();

  return (
    <>
      <p data-testid="loading">{String(loading)}</p>
      <p data-testid="error">{error ?? ''}</p>
      <p data-testid="videos-count">{videos.length}</p>
    </>
  );
};

describe('VideoContext', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('throws when useVideoContext is used outside provider', () => {
    const HookConsumer = () => {
      useVideoContext();
      return null;
    };

    expect(() => render(<HookConsumer />)).toThrow(
      'useVideoContext must be used within a GlobalVideoProvider',
    );
  });

  it('loads videos and exposes them in provider value', async () => {
    getDataVideos.mockResolvedValueOnce([
      { id: 1, title: 'Video A' },
      { id: 2, title: 'Video B' },
    ]);

    render(
      <GlobalVideoProvider>
        <Consumer />
      </GlobalVideoProvider>,
    );

    expect(screen.getByTestId('loading')).toHaveTextContent('true');

    await waitFor(() => {
      expect(screen.getByTestId('loading')).toHaveTextContent('false');
    });

    expect(screen.getByTestId('videos-count')).toHaveTextContent('2');
    expect(screen.getByTestId('error')).toHaveTextContent('');
  });

  it('maps API error message and sets loading to false', async () => {
    getDataVideos.mockRejectedValueOnce({
      response: {
        data: {
          message: 'Fallo API',
        },
      },
    });

    render(
      <GlobalVideoProvider>
        <Consumer />
      </GlobalVideoProvider>,
    );

    await waitFor(() => {
      expect(screen.getByTestId('loading')).toHaveTextContent('false');
    });

    expect(screen.getByTestId('videos-count')).toHaveTextContent('0');
    expect(screen.getByTestId('error')).toHaveTextContent('Fallo API');
  });
});
