import { ApiProperty } from '@nestjs/swagger';

export class VideoClean {
  @ApiProperty({ example: 'abc123' })
  id: string;

  @ApiProperty({
    example: 'https://img.youtube.com/vi/abc123/maxresdefault.jpg',
  })
  thumbnailUrl: string;

  @ApiProperty({ example: 'Curso completo de NestJS' })
  title: string;

  @ApiProperty({ example: 'Canal Dev' })
  autor: string;

  @ApiProperty({ example: 'Hace 2 días' })
  publishedRelative: string;

  @ApiProperty({ example: 0.2534 })
  hype: number;
}
