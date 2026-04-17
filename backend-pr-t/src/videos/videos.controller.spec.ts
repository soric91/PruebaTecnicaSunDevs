import { Test, TestingModule } from '@nestjs/testing';
import { VideosController } from './videos.controller';
import { VideosService } from './videos.service';
import { VideoClean } from './types';

describe('VideosController', () => {
  let controller: VideosController;
  let service: VideosService;

  const mockVideos: VideoClean[] = [
    {
      id: 'vid_001',
      title: 'Top Hype Video',
      autor: 'Author1',
      thumbnailUrl: 'https://img.com/1.jpg',
      publishedRelative: 'Hace 1 hora',
      hype: 0.5,
    },
    {
      id: 'vid_002',
      title: 'Low Hype Video',
      autor: 'Author2',
      thumbnailUrl: 'https://img.com/2.jpg',
      publishedRelative: 'Hace 3 días',
      hype: 0.1,
    },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VideosController],
      providers: [
        {
          provide: VideosService,
          useValue: { getVideos: jest.fn().mockReturnValue(mockVideos) },
        },
      ],
    }).compile();

    controller = module.get<VideosController>(VideosController);
    service = module.get<VideosService>(VideosService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return videos from the service', () => {
    const result = controller.getVideos();

    expect(result).toEqual(mockVideos);
    expect(service.getVideos).toHaveBeenCalled();
  });
});
