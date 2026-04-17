import { Injectable } from '@nestjs/common';
import { VideosMapper } from './videos.mapper';
import { RepositoryService } from './repository/repository.service';
import { VideoClean } from './types';

@Injectable()
export class VideosService {
  constructor(
    private readonly repositoryService: RepositoryService,
    private readonly videosMapper: VideosMapper,
  ) {}

  getVideos(): VideoClean[] {
    const rawVideos = this.repositoryService.getVideoData();

    return rawVideos
      .map((video) => this.videosMapper.toClean(video))
      .sort((a, b) => b.hype - a.hype);
  }
}