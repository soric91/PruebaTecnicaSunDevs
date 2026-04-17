import { calculateHype } from './hype.util';

describe('calculateHype', () => {
  it('should return 0 when views are 0', () => {
    expect(calculateHype('10', '20', '0', 'video title')).toBe(0);
  });

  it('should calculate hype correctly with valid values', () => {
    // (100 + 500) / 10000 = 0.06
    expect(calculateHype('100', '500', '10000', 'video title')).toBe(0.06);
  });

  it('should double hype for tutorials', () => {
    // (100 + 500) / 10000 = 0.06 * 2 = 0.12
    expect(calculateHype('100', '500', '10000', 'Tutorial de React')).toBe(
      0.12,
    );
  });

  it('should be case-insensitive for tutorial detection', () => {
    const normal = calculateHype('100', '500', '10000', 'video normal');
    const tutorial = calculateHype('100', '500', '10000', 'TUTORIAL avanzado');
    expect(tutorial).toBe(normal * 2);
  });

  it('should handle 0 comments with likes', () => {
    // (0 + 500) / 10000 = 0.05
    expect(calculateHype('0', '500', '10000', 'video')).toBe(0.05);
  });

  it('should handle 0 likes with comments', () => {
    // (100 + 0) / 10000 = 0.01
    expect(calculateHype('100', '0', '10000', 'video')).toBe(0.01);
  });

  it('should handle all zeros gracefully', () => {
    expect(calculateHype('0', '0', '0', 'video')).toBe(0);
  });

  it('should handle NaN strings', () => {
    expect(calculateHype('abc', 'xyz', '1000', 'video')).toBe(0);
  });

  it('should handle NaN views returning 0', () => {
    expect(calculateHype('100', '200', 'abc', 'video')).toBe(0);
  });

  it('should round to 4 decimal places', () => {
    // (1 + 1) / 3 = 0.6666... → 0.6667
    expect(calculateHype('1', '1', '3', 'video')).toBe(0.6667);
  });
});
