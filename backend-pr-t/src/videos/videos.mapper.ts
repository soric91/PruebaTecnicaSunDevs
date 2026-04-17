import { Injectable } from '@nestjs/common';
import { RawVideo, VideoClean } from './types';
import { normalizeImageUrl } from './utils/imagen.util';
import { formatRelativeDate } from './utils/date.util';
import { calculateHype } from './utils/hype.util';

@Injectable()
export class VideosMapper {
  toClean(video: RawVideo): VideoClean {
    const snippet = video.snippet;
    const stats = video.statistics;

    return {
      id: video.id,
      thumbnailUrl: normalizeImageUrl(
        snippet?.thumbnails?.high?.url || '',
        snippet?.title || '',
      ),
      title: snippet?.title || '',
      autor: snippet?.channelTitle || '',
      publishedRelative: formatRelativeDate(snippet?.publishedAt || ''),
      hype: calculateHype(
        stats?.commentCount || '0',
        stats?.likeCount || '0',
        stats?.viewCount || '0',
        snippet?.title || '',
      ),
    };
  }
}