import { VideosMapper } from './videos.mapper';

describe('VideosMapper', () => {
  let mapper: VideosMapper;

  beforeEach(() => {
    mapper = new VideosMapper();
  });

  it('maps raw video to clean video shape', () => {
    const rawVideo = {
      id: 'video-1',
      snippet: {
        thumbnails: { high: { url: 'https://img.youtube.com/1.jpg' } },
        title: 'Curso de Node',
        channelTitle: 'Canal Dev',
        publishedAt: '2025-01-01T00:00:00.000Z',
      },
      statistics: {
        commentCount: '10',
        likeCount: '20',
        viewCount: '100',
      },
    };

    const result = mapper.toClean(rawVideo);

    expect(result.id).toBe('video-1');
    expect(result.thumbnailUrl).toBe('https://img.youtube.com/1.jpg');
    expect(result.title).toBe('Curso de Node');
    expect(result.autor).toBe('Canal Dev');
    expect(result.hype).toBe(0.3);
    expect(result.publishedRelative).toMatch(/^Hace /);
  });

  it('maps defaults when optional nested fields are missing', () => {
    const result = mapper.toClean({
      id: 'video-2',
      snippet: {},
      statistics: {},
    });

    expect(result.id).toBe('video-2');
    expect(result.thumbnailUrl).toBe('https://placehold.co/300x200?text=');
    expect(result.title).toBe('');
    expect(result.autor).toBe('');
    expect(result.hype).toBe(0);
    expect(result.publishedRelative).toBe('Hace NaN años');
  });
});
