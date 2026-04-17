import { VideosMapper } from './videos.mapper';
import { RawVideo } from './types';

describe('VideosMapper', () => {
  let mapper: VideosMapper;

  beforeEach(() => {
    mapper = new VideosMapper();
  });

  it('should map a raw video to VideoClean', () => {
    const raw: RawVideo = {
      id: 'vid_001',
      snippet: {
        title: 'NestJS Tutorial',
        channelTitle: 'DevChannel',
        publishedAt: new Date().toISOString(),
        thumbnails: {
          high: { url: 'https://i.ytimg.com/vi/abc/hqdefault.jpg' },
        },
      },
      statistics: {
        viewCount: '10000',
        likeCount: '500',
        commentCount: '100',
      },
    };

    const result = mapper.toClean(raw);

    expect(result.id).toBe('vid_001');
    expect(result.title).toBe('NestJS Tutorial');
    expect(result.autor).toBe('DevChannel');
    expect(result.thumbnailUrl).toBe(
      'https://i.ytimg.com/vi/abc/hqdefault.jpg',
    );
    expect(result.publishedRelative).toBe('Hace unos segundos');
    // Tutorial: (100 + 500) / 10000 * 2 = 0.12
    expect(result.hype).toBe(0.12);
  });

  it('should handle missing snippet gracefully', () => {
    const raw: RawVideo = { id: 'vid_002' };

    const result = mapper.toClean(raw);

    expect(result.id).toBe('vid_002');
    expect(result.title).toBe('');
    expect(result.autor).toBe('');
    expect(result.hype).toBe(0);
  });

  it('should handle missing statistics gracefully', () => {
    const raw: RawVideo = {
      id: 'vid_003',
      snippet: {
        title: 'Test Video',
        channelTitle: 'Author',
        publishedAt: new Date().toISOString(),
      },
    };

    const result = mapper.toClean(raw);

    expect(result.title).toBe('Test Video');
    expect(result.hype).toBe(0);
  });
});
