import { Controller, Get, HttpCode } from '@nestjs/common';
import { VideosService } from './videos.service';

@Controller('api')
export class VideosController {
    constructor(private videosService: VideosService) {}
    @Get('/videos')
    @HttpCode(200)
    getVideos() {
        return this.videosService.getVideos();
    }
}
