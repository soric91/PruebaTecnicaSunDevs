import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { VideosService } from './videos.service';
import { VideoClean } from './types';

@ApiTags('Videos')
@Controller('api')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @Get('/videos')
  @ApiOperation({ summary: 'Obtener videos ordenados por hype' })
  @ApiResponse({
    status: 200,
    description: 'Lista de videos ordenados por nivel de hype descendente',
    type: [VideoClean],
  })
  getVideos(): VideoClean[] {
    return this.videosService.getVideos();
  }
}
