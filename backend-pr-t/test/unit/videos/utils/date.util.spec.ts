import { formatRelativeDate } from '../../../../src/videos/utils/date.util';

describe('formatRelativeDate', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2026-01-10T00:00:00.000Z'));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('formats minutes correctly', () => {
    expect(formatRelativeDate('2026-01-09T23:58:00.000Z')).toBe(
      'Hace 2 minutos',
    );
  });

  it('formats singular day correctly', () => {
    expect(formatRelativeDate('2026-01-09T00:00:00.000Z')).toBe('Hace 1 día');
  });

  it('formats months correctly', () => {
    expect(formatRelativeDate('2025-12-01T00:00:00.000Z')).toBe('Hace 1 mes');
  });
});
