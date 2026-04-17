import { existsSync, readFileSync } from 'node:fs';
import { InternalServerErrorException } from '@nestjs/common';
import { RepositoryService } from './repository.service';

jest.mock('node:fs', () => ({
  existsSync: jest.fn(),
  readFileSync: jest.fn(),
}));

describe('RepositoryService', () => {
  let service: RepositoryService;

  beforeEach(() => {
    service = new RepositoryService();
    delete process.env.URL_DATA;
  });

  afterEach(() => {
    jest.restoreAllMocks();
    delete process.env.URL_DATA;
  });

  it('returns items array from json file', () => {
    (existsSync as jest.Mock).mockReturnValue(true);
    (readFileSync as jest.Mock).mockReturnValue(
      JSON.stringify({ items: [{ id: '1' }] }),
    );

    expect(service.getVideoData()).toEqual([{ id: '1' }]);
  });

  it('returns empty array when items is not an array', () => {
    (existsSync as jest.Mock).mockReturnValue(true);
    (readFileSync as jest.Mock).mockReturnValue(JSON.stringify({ items: {} }));

    expect(service.getVideoData()).toEqual([]);
  });

  it('throws InternalServerErrorException when file does not exist', () => {
    (existsSync as jest.Mock).mockReturnValue(false);

    expect(() => service.getVideoData()).toThrow(InternalServerErrorException);
  });
});
