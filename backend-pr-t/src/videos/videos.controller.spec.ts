import { VideosController } from './videos.controller';
import { VideosService } from './videos.service';

describe('VideosController', () => {
  let controller: VideosController;
  let videosService: jest.Mocked<VideosService>;

  beforeEach(() => {
    videosService = {
      getVideos: jest.fn(),
    } as unknown as jest.Mocked<VideosService>;

    controller = new VideosController(videosService);
  });

  it('returns videos from service', () => {
    const expected = [
      {
        id: '1',
        thumbnailUrl: '',
        title: '',
        autor: '',
        publishedRelative: '',
        hype: 0.1,
      },
    ];
    videosService.getVideos.mockReturnValue(expected);

    const result = controller.getVideos();

    expect(videosService.getVideos).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expected);
  });
});
