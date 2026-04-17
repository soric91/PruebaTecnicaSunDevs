import { Test, TestingModule } from '@nestjs/testing';
import { VideosService } from './videos.service';
import { VideosMapper } from './videos.mapper';
import { RepositoryService } from './repository/repository.service';
import { RawVideo } from './types';

describe('VideosService', () => {
  let service: VideosService;
  let repositoryService: RepositoryService;

  const mockVideos: RawVideo[] = [
    {
      id: 'vid_001',
      snippet: {
        title: 'Low Hype Video',
        channelTitle: 'Author1',
        publishedAt: new Date().toISOString(),
        thumbnails: { high: { url: 'https://img.com/1.jpg' } },
      },
      statistics: { viewCount: '10000', likeCount: '10', commentCount: '5' },
    },
    {
      id: 'vid_002',
      snippet: {
        title: 'High Hype Tutorial',
        channelTitle: 'Author2',
        publishedAt: new Date().toISOString(),
        thumbnails: { high: { url: 'https://img.com/2.jpg' } },
      },
      statistics: {
        viewCount: '1000',
        likeCount: '500',
        commentCount: '200',
      },
    },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VideosService,
        VideosMapper,
        {
          provide: RepositoryService,
          useValue: { getVideoData: jest.fn().mockReturnValue(mockVideos) },
        },
      ],
    }).compile();

    service = module.get<VideosService>(VideosService);
    repositoryService = module.get<RepositoryService>(RepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return videos sorted by hype descending', () => {
    const result = service.getVideos();

    expect(result.length).toBe(2);
    expect(result[0].hype).toBeGreaterThan(result[1].hype);
    expect(result[0].id).toBe('vid_002');
  });

  it('should call repository to get raw data', () => {
    service.getVideos();
    expect(repositoryService.getVideoData).toHaveBeenCalled();
  });

  it('should return empty array when no videos', () => {
    jest.spyOn(repositoryService, 'getVideoData').mockReturnValue([]);
    const result = service.getVideos();
    expect(result).toEqual([]);
  });
});
