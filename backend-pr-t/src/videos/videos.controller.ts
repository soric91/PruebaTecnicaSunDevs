import { Controller, Get, HttpCode } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { VideosService } from './videos.service';
import { VideoClean } from './types';

@ApiTags('Videos')
@Controller('api')
export class VideosController {
  constructor(private videosService: VideosService) {}

  @ApiOperation({ summary: 'Obtener todos los videos ordenados por hype' })
  @ApiResponse({
    status: 200,
    description: 'Lista de videos',
    type: [VideoClean],
  })
  @Get('/videos')
  @HttpCode(200)
  getVideos() {
    return this.videosService.getVideos();
  }
}
