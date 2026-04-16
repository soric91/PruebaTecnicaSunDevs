import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { VideosMapper } from './videos.mapper';
import { RepositoryService } from './repository/repository.service';

@Injectable()
export class VideosService {
  constructor(
    private repositoryService: RepositoryService,
    private videosMapper: VideosMapper
  ) {}

  getVideos() {
    const rawVideos = this.repositoryService.getVideoData();

    const cleanVideos = rawVideos.map(video =>
      this.videosMapper.toClean(video)
    );

    return cleanVideos.sort((a, b) => b.hype - a.hype);
  }
}