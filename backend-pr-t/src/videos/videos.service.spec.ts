import { VideosService } from './videos.service';
import { RepositoryService } from './repository/repository.service';
import { VideosMapper } from './videos.mapper';

describe('VideosService', () => {
  let service: VideosService;
  let repositoryService: jest.Mocked<RepositoryService>;
  let videosMapper: jest.Mocked<VideosMapper>;

  beforeEach(() => {
    repositoryService = {
      getVideoData: jest.fn(),
    } as unknown as jest.Mocked<RepositoryService>;

    videosMapper = {
      toClean: jest.fn(),
    } as unknown as jest.Mocked<VideosMapper>;

    service = new VideosService(repositoryService, videosMapper);
  });

  it('maps and sorts videos by hype descending', () => {
    const rawVideos = [{ id: '1' }, { id: '2' }];
    repositoryService.getVideoData.mockReturnValue(rawVideos);

    videosMapper.toClean
      .mockReturnValueOnce({
        id: '1',
        thumbnailUrl: '',
        title: '',
        autor: '',
        publishedRelative: '',
        hype: 0.2,
      })
      .mockReturnValueOnce({
        id: '2',
        thumbnailUrl: '',
        title: '',
        autor: '',
        publishedRelative: '',
        hype: 0.9,
      });

    const result = service.getVideos();

    expect(repositoryService.getVideoData).toHaveBeenCalledTimes(1);
    expect(videosMapper.toClean).toHaveBeenCalledTimes(2);
    expect(result.map((video) => video.id)).toEqual(['2', '1']);
  });
});
