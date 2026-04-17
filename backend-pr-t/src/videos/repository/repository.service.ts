import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { RawVideo } from '../types';

@Injectable()
export class RepositoryService {
  private cache: RawVideo[] | null = null;

  getVideoData(): RawVideo[] {
    if (this.cache) {
      return this.cache;
    }

    try {
      const filePath = join(
        process.cwd(),
        'data',
        process.env.URL_DATA || 'mock-youtube-api.json',
      );

      if (!existsSync(filePath)) {
        throw new Error(`Archivo no encontrado: ${filePath}`);
      }

      const raw = readFileSync(filePath, 'utf-8');
      const videoData = JSON.parse(raw);
      const items: RawVideo[] = Array.isArray(videoData.items) ? videoData.items : [];
      this.cache = items;

      return items;
    } catch {
      throw new InternalServerErrorException(
        'No se pudo procesar el mock de videos',
      );
    }
  }
}