import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import axios from './axios';
import { getDataVideos } from './video';

vi.mock('./axios', () => ({
  default: {
    get: vi.fn(),
  },
}));

describe('getDataVideos', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('returns videos data when request is successful', async () => {
    const mockData = [{ id: '1', title: 'Video de prueba' }];
    axios.get.mockResolvedValueOnce({ data: mockData });

    const result = await getDataVideos();

    expect(axios.get).toHaveBeenCalledWith('/videos');
    expect(result).toEqual(mockData);
  });

  it('logs and rethrows error when request fails', async () => {
    const mockError = new Error('network error');
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    axios.get.mockRejectedValueOnce(mockError);

    await expect(getDataVideos()).rejects.toThrow('network error');
    expect(errorSpy).toHaveBeenCalledWith('Error fetching videos:', mockError);
  });
});
