import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('Videos API (e2e)', () => {
  let app: INestApplication<App>;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('GET /api/videos', () => {
    it('should return 200 with an array of videos', () => {
      return request(app.getHttpServer())
        .get('/api/videos')
        .expect(200)
        .expect((res) => {
          expect(Array.isArray(res.body)).toBe(true);
          expect(res.body.length).toBeGreaterThan(0);
        });
    });

    it('should return videos sorted by hype descending', () => {
      return request(app.getHttpServer())
        .get('/api/videos')
        .expect(200)
        .expect((res) => {
          const videos = res.body;
          for (let i = 1; i < videos.length; i++) {
            expect(videos[i - 1].hype).toBeGreaterThanOrEqual(videos[i].hype);
          }
        });
    });

    it('should return videos with the correct shape', () => {
      return request(app.getHttpServer())
        .get('/api/videos')
        .expect(200)
        .expect((res) => {
          const video = res.body[0];
          expect(video).toHaveProperty('id');
          expect(video).toHaveProperty('title');
          expect(video).toHaveProperty('autor');
          expect(video).toHaveProperty('thumbnailUrl');
          expect(video).toHaveProperty('publishedRelative');
          expect(video).toHaveProperty('hype');
          expect(typeof video.hype).toBe('number');
        });
    });
  });
});
