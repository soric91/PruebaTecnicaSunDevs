import { normalizeImageUrl } from './imagen.util';

describe('normalizeImageUrl', () => {
  it('should return placehold.co fallback when url is empty', () => {
    const result = normalizeImageUrl('', 'React Hooks');
    expect(result).toBe(
      'https://placehold.co/300x200?text=React',
    );
  });

  it('should handle empty title with empty url', () => {
    const result = normalizeImageUrl('', '');
    expect(result).toBe('https://placehold.co/300x200?text=Video');
  });

  it('should convert via.placeholder.com URLs to placehold.co', () => {
    const url =
      'https://via.placeholder.com/300x200/282c34/61dafb?text=AWS';
    const result = normalizeImageUrl(url, 'AWS explicado');
    expect(result).toBe('https://placehold.co/300x200?text=AWS');
  });

  it('should use title as fallback text for via.placeholder without text param', () => {
    const url = 'https://via.placeholder.com/400x300/000/fff';
    const result = normalizeImageUrl(url, 'Docker Guide');
    expect(result).toBe(
      'https://placehold.co/400x300?text=Docker%20Guide',
    );
  });

  it('should return original URL if not a placeholder', () => {
    const url = 'https://i.ytimg.com/vi/abc123/hqdefault.jpg';
    const result = normalizeImageUrl(url, 'Test');
    expect(result).toBe(url);
  });

  it('should encode special characters in text', () => {
    const result = normalizeImageUrl('', 'C++ Guide');
    expect(result).toContain('text=C%2B%2B');
  });
});
