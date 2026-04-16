import { Module } from '@nestjs/common';
import { VideosController } from './videos.controller';
import { VideosService } from './videos.service';
import { RepositoryService } from './repository/repository.service';
import { VideosMapper } from './videos.mapper';

@Module({
  controllers: [VideosController],
  providers: [VideosService, RepositoryService, VideosMapper],
})
export class VideosModule {}
