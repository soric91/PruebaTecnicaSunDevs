import { ApiProperty } from '@nestjs/swagger';

export class VideoClean {
  @ApiProperty({ example: 'vid_001' })
  id: string;

  @ApiProperty({ example: 'https://placehold.co/300x200?text=React' })
  thumbnailUrl: string;

  @ApiProperty({ example: 'Tutorial de React Hooks' })
  title: string;

  @ApiProperty({ example: 'DevChannel' })
  autor: string;

  @ApiProperty({ example: 'Hace 3 días' })
  publishedRelative: string;

  @ApiProperty({ example: 0.12, description: 'Nivel de hype calculado: (comments + likes) / views, x2 si es tutorial' })
  hype: number;
}

export interface RawVideo {
  id: string;
  snippet?: {
    title?: string;
    channelTitle?: string;
    publishedAt?: string;
    thumbnails?: {
      high?: { url?: string };
    };
  };
  statistics?: {
    viewCount?: string;
    likeCount?: string;
    commentCount?: string;
  };
}