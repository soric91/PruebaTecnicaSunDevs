import { calculateHype } from './hype.util';

describe('calculateHype', () => {
  it('returns 0 when views are 0', () => {
    expect(calculateHype('10', '20', '0', 'Node video')).toBe(0);
  });

  it('returns 0 when comments are 0', () => {
    expect(calculateHype('0', '20', '100', 'Node video')).toBe(0);
  });

  it('doubles hype when title includes tutorial', () => {
    expect(calculateHype('10', '20', '100', 'Node tutorial')).toBe(0.6);
  });

  it('rounds hype value to 4 decimals', () => {
    expect(calculateHype('1', '1', '3', 'Node video')).toBe(0.6667);
  });
});
