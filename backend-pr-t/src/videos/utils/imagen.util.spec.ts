import { normalizeImageUrl } from './imagen.util';

describe('normalizeImageUrl', () => {
  it('returns placeholder when url is empty', () => {
    expect(normalizeImageUrl('', 'Video de prueba')).toBe(
      'https://placehold.co/300x200?text=Video',
    );
  });

  it('normalizes legacy placeholder urls', () => {
    const url = 'https://via.placeholder.com/640x360?text=Thumb';

    expect(normalizeImageUrl(url, 'Video de prueba')).toBe(
      'https://placehold.co/640x360?text=Thumb',
    );
  });

  it('returns original url when it is not a placeholder domain', () => {
    const url = 'https://img.youtube.com/vi/abc/maxresdefault.jpg';

    expect(normalizeImageUrl(url, 'Video de prueba')).toBe(url);
  });
});
